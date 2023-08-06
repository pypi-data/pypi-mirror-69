from pathlib import Path

from cryptography.hazmat.backends import default_backend
from cryptography.x509 import load_pem_x509_certificate

from sslyze.plugins.certificate_info._cert_chain_analyzer import OcspResponseStatusEnum
from sslyze.plugins.certificate_info.implementation import CertificateInfoImplementation, CertificateInfoExtraArguments
from sslyze.plugins.certificate_info._symantec import SymantecDistructTester, SymantecDistrustTimelineEnum
from sslyze.server_connectivity import ServerConnectivityTester
from sslyze.server_setting import ServerNetworkLocationViaDirectConnection
from tests.markers import can_only_run_on_linux_64
from tests.openssl_server import ModernOpenSslServer, ClientAuthConfigEnum
import pytest


class TestCertificateInfoPlugin:
    def test_ca_file_bad_file(self):
        # Given a server to scan
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("www.hotmail.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When trying to enable a custom CA file but the path is wrong, it fails
        with pytest.raises(ValueError):
            CertificateInfoImplementation.scan_server(
                server_info, CertificateInfoExtraArguments(custom_ca_file=Path("doesntexist"))
            )

    def test_ca_file(self):
        # Given a server to scan
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("www.hotmail.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # And a valid path to a custom CA file
        ca_file_path = Path(__file__).parent / ".." / ".." / "certificates" / "wildcard-self-signed.pem"

        # When running the scan with the custom CA file enabled
        plugin_result = CertificateInfoImplementation.scan_server(
            server_info, CertificateInfoExtraArguments(custom_ca_file=ca_file_path)
        )

        # It succeeds
        assert len(plugin_result.certificate_deployments[0].path_validation_results) >= 6
        for path_validation_result in plugin_result.certificate_deployments[0].path_validation_results:
            if path_validation_result.trust_store.path == ca_file_path:
                assert not path_validation_result.was_validation_successful
            else:
                assert path_validation_result.was_validation_successful

    def test_valid_chain_with_ocsp_stapling(self):
        # Given a server to scan that supports OCSP stapling
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("www.apple.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # The result contains details about the server's OCSP config
        assert plugin_result.certificate_deployments[0].ocsp_response
        assert plugin_result.certificate_deployments[0].ocsp_response.status == OcspResponseStatusEnum.SUCCESSFUL
        assert plugin_result.certificate_deployments[0].ocsp_response_is_trusted
        assert not plugin_result.certificate_deployments[0].leaf_certificate_has_must_staple_extension

    def test_valid_chain_with_ev_cert(self):
        # Given a server to scan that has an EV certificate
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("www.digicert.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # The result returns that the certificate is EV
        assert plugin_result.certificate_deployments[0].leaf_certificate_is_ev

        # And the result has other details about the certificate chain
        assert len(plugin_result.certificate_deployments[0].received_certificate_chain)
        assert len(plugin_result.certificate_deployments[0].verified_certificate_chain)
        assert not plugin_result.certificate_deployments[0].received_chain_contains_anchor_certificate

        assert len(plugin_result.certificate_deployments[0].path_validation_results) == 5
        for path_validation_result in plugin_result.certificate_deployments[0].path_validation_results:
            assert path_validation_result.was_validation_successful

        assert plugin_result.certificate_deployments[0].leaf_certificate_subject_matches_hostname
        assert plugin_result.certificate_deployments[0].received_chain_has_valid_order

    def test_invalid_chain(self):
        # Given a server to scan that has a self-signed certificate
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("self-signed.badssl.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # A verified chain cannot be built
        assert not plugin_result.certificate_deployments[0].verified_certificate_chain
        assert plugin_result.certificate_deployments[0].verified_chain_has_sha1_signature is None

        # And the result has other details about the certificate chain
        assert plugin_result.certificate_deployments[0].ocsp_response is None
        assert len(plugin_result.certificate_deployments[0].received_certificate_chain) == 1

        assert len(plugin_result.certificate_deployments[0].path_validation_results) >= 5
        for path_validation_result in plugin_result.certificate_deployments[0].path_validation_results:
            assert not path_validation_result.was_validation_successful

        assert plugin_result.certificate_deployments[0].leaf_certificate_signed_certificate_timestamps_count == 0

        assert plugin_result.certificate_deployments[0].leaf_certificate_subject_matches_hostname
        assert plugin_result.certificate_deployments[0].received_chain_has_valid_order
        assert plugin_result.certificate_deployments[0].received_chain_contains_anchor_certificate is None

    def test_1000_sans_chain(self):
        # Given a server to scan that has a leaf cert with 1000 SANs
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("1000-sans.badssl.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan, it succeeds
        CertificateInfoImplementation.scan_server(server_info)

    @pytest.mark.skip("Can no longer build a verified because CA cert expired")
    def test_sha1_chain(self):
        # Given a server to scan that has a SHA1-signed certificate
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup(
            "sha1-intermediate.badssl.com", 443
        )
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # The SHA1 signature is detected
        assert plugin_result.certificate_deployments[0].verified_chain_has_sha1_signature

    def test_sha256_chain(self):
        # Given a server to scan that has a SHA256-signed certificate
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("sha256.badssl.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # No SHA1 signature is detected
        assert not plugin_result.certificate_deployments[0].verified_chain_has_sha1_signature

    def test_ecdsa_certificate(self):
        # Given a server to scan that has an ECDSA certificate
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("www.cloudflare.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan, it succeeds
        CertificateInfoImplementation.scan_server(server_info)

    def test_chain_with_anchor(self):
        # Given a server to scan that has its anchor certificate returned in its chain
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("www.verizon.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan, it succeeds
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # And the anchor certificate was detected
        assert plugin_result.certificate_deployments[0].received_chain_contains_anchor_certificate

    def test_not_trusted_by_mozilla_but_trusted_by_microsoft(self):
        # Given a server to scan that has a certificate chain valid for the Microsoft but not the Mozilla trust stores
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup(
            "webmail.russia.nasa.gov", 443
        )
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan, it succeeds
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # And the chain was correctly identified as valid with the Microsoft store
        found_microsoft_store = False
        for validation_result in plugin_result.certificate_deployments[0].path_validation_results:
            if validation_result.trust_store.name == "Windows":
                found_microsoft_store = True
                assert validation_result.was_validation_successful
                break
        assert found_microsoft_store

    def test_certificate_with_no_cn(self):
        # Given a server to scan that has a certificate with no CN
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup(
            "no-common-name.badssl.com", 443
        )
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan, it succeeds
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        assert plugin_result.certificate_deployments[0].verified_certificate_chain

    def test_certificate_with_no_subject(self):
        # Given a server to scan that has a certificate with no Subject
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("no-subject.badssl.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan, it succeeds
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        assert plugin_result.certificate_deployments[0].verified_certificate_chain

    def test_certificate_with_scts(self):
        # Given a server to scan that has a certificate with SCTS
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("www.apple.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan, it succeeds
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # And the SCTS were detected
        assert plugin_result.certificate_deployments[0].leaf_certificate_signed_certificate_timestamps_count > 1

    def test_multiple_certificates(self):
        # Given a server to scan that exposes multiple certificates for maximum compatibility
        server_location = ServerNetworkLocationViaDirectConnection.with_ip_address_lookup("www.facebook.com", 443)
        server_info = ServerConnectivityTester().perform(server_location)

        # When running the scan, it succeeds
        plugin_result = CertificateInfoImplementation.scan_server(server_info)

        # And multiple certificates were detected
        assert len(plugin_result.certificate_deployments) > 1

    @can_only_run_on_linux_64
    def test_succeeds_when_client_auth_failed(self):
        # Given a server that requires client authentication
        with ModernOpenSslServer(client_auth_config=ClientAuthConfigEnum.REQUIRED) as server:
            # And the client does NOT provide a client certificate
            server_location = ServerNetworkLocationViaDirectConnection(
                hostname=server.hostname, port=server.port, ip_address=server.ip_address
            )
            server_info = ServerConnectivityTester().perform(server_location)

            # When running the scan, it succeeds
            plugin_result = CertificateInfoImplementation.scan_server(server_info)
            assert plugin_result.certificate_deployments[0].received_certificate_chain


class SymantecDistructTestCase:
    def test_good(self):
        # Given a certificate chain unaffected by the Symantec deprecation
        cert_chain = [
            # www.google.com
            load_pem_x509_certificate(
                """-----BEGIN CERTIFICATE-----
MIIDxzCCAq+gAwIBAgIIPiCtWLuXgJ8wDQYJKoZIhvcNAQELBQAwVDELMAkGA1UE
BhMCVVMxHjAcBgNVBAoTFUdvb2dsZSBUcnVzdCBTZXJ2aWNlczElMCMGA1UEAxMc
R29vZ2xlIEludGVybmV0IEF1dGhvcml0eSBHMzAeFw0xODAyMjgyMzA0MTVaFw0x
ODA1MjMyMjA5MDBaMGgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlh
MRYwFAYDVQQHDA1Nb3VudGFpbiBWaWV3MRMwEQYDVQQKDApHb29nbGUgSW5jMRcw
FQYDVQQDDA53d3cuZ29vZ2xlLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IA
BNCoAa9TTYk7XhYNVADCSHNELcCGiHZyWA1PIUaanBwW2xAh+unTNrqJwPPoh2MI
9fs1TRvSHfq2Q3yOlIQm/g2jggFSMIIBTjATBgNVHSUEDDAKBggrBgEFBQcDATAO
BgNVHQ8BAf8EBAMCB4AwGQYDVR0RBBIwEIIOd3d3Lmdvb2dsZS5jb20waAYIKwYB
BQUHAQEEXDBaMC0GCCsGAQUFBzAChiFodHRwOi8vcGtpLmdvb2cvZ3NyMi9HVFNH
SUFHMy5jcnQwKQYIKwYBBQUHMAGGHWh0dHA6Ly9vY3NwLnBraS5nb29nL0dUU0dJ
QUczMB0GA1UdDgQWBBRlhs6xDR5Yuw6s3r6v51JLBx4L8zAMBgNVHRMBAf8EAjAA
MB8GA1UdIwQYMBaAFHfCuFCaZ3Z2sS3ChtCDoH6mfrpLMCEGA1UdIAQaMBgwDAYK
KwYBBAHWeQIFAzAIBgZngQwBAgIwMQYDVR0fBCowKDAmoCSgIoYgaHR0cDovL2Ny
bC5wa2kuZ29vZy9HVFNHSUFHMy5jcmwwDQYJKoZIhvcNAQELBQADggEBAH4jN7GJ
/akcN6Uj2v9k8LlxdG0XZihpfDoQz1T3GPGe3ouzvx5bihV9VntljEywiSXLM6dy
unjmXZzqywdk1Z3ss8Phkc1IoUB5fGo9Uslmqp1dhGns4jp9rnonIWb5STT64zBH
NEZl8uL0Zel5MaYLdmtPESRC7a4/Bg4yxrITVvYsMBGbOUPj7g9FkQTyfK7jNccF
F+IhhneyYPrtg+e1S8y7+qTdGVN40E6ByQfwCWcsngcW9zyuNY+cYQMr4DFoIZO/
t0IQ6jGEq2FeTREHAqcP0vRah5+GBwRDrUURBZOhE0AOuzuNhIANAd6STqRJdg3w
R7vu2UObYzI35CU=
-----END CERTIFICATE-----

                """.encode(
                    encoding="ascii"
                ),
                default_backend(),
            ),
            # Google Internet Authority G3
            load_pem_x509_certificate(
                """-----BEGIN CERTIFICATE-----
MIIEXDCCA0SgAwIBAgINAeOpMBz8cgY4P5pTHTANBgkqhkiG9w0BAQsFADBMMSAw
HgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEGA1UEChMKR2xvYmFs
U2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0xNzA2MTUwMDAwNDJaFw0yMTEy
MTUwMDAwNDJaMFQxCzAJBgNVBAYTAlVTMR4wHAYDVQQKExVHb29nbGUgVHJ1c3Qg
U2VydmljZXMxJTAjBgNVBAMTHEdvb2dsZSBJbnRlcm5ldCBBdXRob3JpdHkgRzMw
ggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDKUkvqHv/OJGuo2nIYaNVW
XQ5IWi01CXZaz6TIHLGp/lOJ+600/4hbn7vn6AAB3DVzdQOts7G5pH0rJnnOFUAK
71G4nzKMfHCGUksW/mona+Y2emJQ2N+aicwJKetPKRSIgAuPOB6Aahh8Hb2XO3h9
RUk2T0HNouB2VzxoMXlkyW7XUR5mw6JkLHnA52XDVoRTWkNty5oCINLvGmnRsJ1z
ouAqYGVQMc/7sy+/EYhALrVJEA8KbtyX+r8snwU5C1hUrwaW6MWOARa8qBpNQcWT
kaIeoYvy/sGIJEmjR0vFEwHdp1cSaWIr6/4g72n7OqXwfinu7ZYW97EfoOSQJeAz
AgMBAAGjggEzMIIBLzAOBgNVHQ8BAf8EBAMCAYYwHQYDVR0lBBYwFAYIKwYBBQUH
AwEGCCsGAQUFBwMCMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFHfCuFCa
Z3Z2sS3ChtCDoH6mfrpLMB8GA1UdIwQYMBaAFJviB1dnHB7AagbeWbSaLd/cGYYu
MDUGCCsGAQUFBwEBBCkwJzAlBggrBgEFBQcwAYYZaHR0cDovL29jc3AucGtpLmdv
b2cvZ3NyMjAyBgNVHR8EKzApMCegJaAjhiFodHRwOi8vY3JsLnBraS5nb29nL2dz
cjIvZ3NyMi5jcmwwPwYDVR0gBDgwNjA0BgZngQwBAgIwKjAoBggrBgEFBQcCARYc
aHR0cHM6Ly9wa2kuZ29vZy9yZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEA
HLeJluRT7bvs26gyAZ8so81trUISd7O45skDUmAge1cnxhG1P2cNmSxbWsoiCt2e
ux9LSD+PAj2LIYRFHW31/6xoic1k4tbWXkDCjir37xTTNqRAMPUyFRWSdvt+nlPq
wnb8Oa2I/maSJukcxDjNSfpDh/Bd1lZNgdd/8cLdsE3+wypufJ9uXO1iQpnh9zbu
FIwsIONGl1p3A8CgxkqI/UAih3JaGOqcpcdaCIzkBaR9uYQ1X4k2Vg5APRLouzVy
7a8IVk6wuy6pm+T7HT4LY8ibS5FEZlfAFLSW8NwsVz9SBK2Vqn1N0PIMn5xA6NZV
c7o835DLAFshEWfC7TIe3g==
-----END CERTIFICATE-----
                """.encode(
                    encoding="ascii"
                ),
                default_backend(),
            ),
            # GlobalSign Root CA
            load_pem_x509_certificate(
                """-----BEGIN CERTIFICATE-----
MIIDujCCAqKgAwIBAgILBAAAAAABD4Ym5g0wDQYJKoZIhvcNAQEFBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjIxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDYxMjE1MDgwMDAwWhcNMjExMjE1
MDgwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAKbPJA6+Lm8omUVCxKs+IVSbC9N/hHD6ErPL
v4dfxn+G07IwXNb9rfF73OX4YJYJkhD10FPe+3t+c4isUoh7SqbKSaZeqKeMWhG8
eoLrvozps6yWJQeXSpkqBy+0Hne/ig+1AnwblrjFuTosvNYSuetZfeLQBoZfXklq
tTleiDTsvHgMCJiEbKjNS7SgfQx5TfC4LcshytVsW33hoCmEofnTlEnLJGKRILzd
C9XZzPnqJworc5HGnRusyMvo4KD0L5CLTfuwNhv2GXqF4G3yYROIXJ/gkwpRl4pa
zq+r1feqCapgvdzZX99yqWATXgAByUr6P6TqBwMhAo6CygPCm48CAwEAAaOBnDCB
mTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUm+IH
V2ccHsBqBt5ZtJot39wZhi4wNgYDVR0fBC8wLTAroCmgJ4YlaHR0cDovL2NybC5n
bG9iYWxzaWduLm5ldC9yb290LXIyLmNybDAfBgNVHSMEGDAWgBSb4gdXZxwewGoG
3lm0mi3f3BmGLjANBgkqhkiG9w0BAQUFAAOCAQEAmYFThxxol4aR7OBKuEQLq4Gs
J0/WwbgcQ3izDJr86iw8bmEbTUsp9Z8FHSbBuOmDAGJFtqkIk7mpM0sYmsL4h4hO
291xNBrBVNpGP+DTKqttVCL1OmLNIG+6KYnX3ZHu01yiPqFbQfXf5WRDLenVOavS
ot+3i9DAgBkcRcAtjOj4LaR0VknFBbVPFd5uRHg5h6h+u/N5GJG79G+dwfCMNYxd
AfvDbbnvRG15RjF+Cv6pgsH/76tuIMRQyV+dTZsXjAzlAcmgQWpzU/qlULRuJQ/7
TBj0/VLZjmmx6BEP3ojY+x1J96relc8geMJgEtslQIxq/H5COEBkEveegeGTLg==
-----END CERTIFICATE-----
                """.encode(
                    encoding="ascii"
                ),
                default_backend(),
            ),
        ]

        # The class to check for Symantec CAs returns the right result
        assert SymantecDistructTester.get_distrust_timeline(cert_chain) is None

    # One of the deprecated Symantec CA certs
    _GEOTRUST_GLOBAL_CA_CERT = """-----BEGIN CERTIFICATE-----
MIIDVDCCAjygAwIBAgIDAjRWMA0GCSqGSIb3DQEBBQUAMEIxCzAJBgNVBAYTAlVT
MRYwFAYDVQQKEw1HZW9UcnVzdCBJbmMuMRswGQYDVQQDExJHZW9UcnVzdCBHbG9i
YWwgQ0EwHhcNMDIwNTIxMDQwMDAwWhcNMjIwNTIxMDQwMDAwWjBCMQswCQYDVQQG
EwJVUzEWMBQGA1UEChMNR2VvVHJ1c3QgSW5jLjEbMBkGA1UEAxMSR2VvVHJ1c3Qg
R2xvYmFsIENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2swYYzD9
9BcjGlZ+W988bDjkcbd4kdS8odhM+KhDtgPpTSEHCIjaWC9mOSm9BXiLnTjoBbdq
fnGk5sRgprDvgOSJKA+eJdbtg/OtppHHmMlCGDUUna2YRpIuT8rxh0PBFpVXLVDv
iS2Aelet8u5fa9IAjbkU+BQVNdnARqN7csiRv8lVK83Qlz6cJmTM386DGXHKTubU
1XupGc1V3sjs0l44U+VcT4wt/lAjNvxm5suOpDkZALeVAjmRCw7+OC7RHQWa9k0+
bw8HHa8sHo9gOeL6NlMTOdReJivbPagUvTLrGAMoUgRx5aszPeE4uwc2hGKceeoW
MPRfwCvocWvk+QIDAQABo1MwUTAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTA
ephojYn7qwVkDBF9qn1luMrMTjAfBgNVHSMEGDAWgBTAephojYn7qwVkDBF9qn1l
uMrMTjANBgkqhkiG9w0BAQUFAAOCAQEANeMpauUvXVSOKVCUn5kaFOSPeCpilKIn
Z57QzxpeR+nBsqTP3UEaBU6bS+5Kb1VSsyShNwrrZHYqLizz/Tt1kL/6cdjHPTfS
tQWVYrmm3ok9Nns4d0iXrKYgjy6myQzCsplFAMfOEVEiIuCl6rYVSAlk6l5PdPcF
PseKUgzbFbS9bZvlxrFUaKnjaZC2mqUPuLk/IH2uSrW4nOQdtqvmlKXBx4Ot2/Un
hw4EbNX/3aBd7YdStysVAq45pmp06drE57xNNB6pXE0zX5IJL4hmXXeXxx12E6nV
5fEWCRE11azbJHFwLJhWC9kXtNHjUStedejV0NxPNO3CBWaAocvmMw==
-----END CERTIFICATE-----"""

    def test_march_2018(self):
        # Given a certificate chain issued by a Symantec CA that will be distrusted in March 2018
        cert_chain = [
            # www.careergame.com
            load_pem_x509_certificate(
                """-----BEGIN CERTIFICATE-----
MIIF6zCCBNOgAwIBAgIDAgP0MA0GCSqGSIb3DQEBCwUAMGYxCzAJBgNVBAYTAlVT
MRYwFAYDVQQKEw1HZW9UcnVzdCBJbmMuMR0wGwYDVQQLExREb21haW4gVmFsaWRh
dGVkIFNTTDEgMB4GA1UEAxMXR2VvVHJ1c3QgRFYgU1NMIENBIC0gRzQwHhcNMTUw
ODI1MTc1NDE0WhcNMTgwOTI1MDcwNjE0WjCBljETMBEGA1UECxMKR1Q4NDM0MzI1
MzExMC8GA1UECxMoU2VlIHd3dy5nZW90cnVzdC5jb20vcmVzb3VyY2VzL2NwcyAo
YykxNTEvMC0GA1UECxMmRG9tYWluIENvbnRyb2wgVmFsaWRhdGVkIC0gUXVpY2tT
U0woUikxGzAZBgNVBAMTEnd3dy5jYXJlZXJnYW1lLmNvbTCCAiIwDQYJKoZIhvcN
AQEBBQADggIPADCCAgoCggIBAO2G7lKIgIpkCO673Xe6c3uO/GW6GX7TxTsBh1iw
+hGkefBs4dccMb6nynGb/nYEYwWj6vuQ/bxvZp7yBpEHpDvM9qxwaPeU3eOqEU8E
8iNNO0uL2t04r3tbkTK5eGh4/cCITta9fZzDeoqQ3Shpb5mRaAEsgPMurXoeBH3+
ZQDuAlsqHtOSG2leGf2moKnKbJzu/tLiNGsukjHfhdHtyePcBbmCg8mt5sru/5Jx
d66A5CtbMaLlME2VOzAaePT9HL397Wss9HiIwRdiMTpMm/Hgr6clSYIdsHXCZ9/V
8HmjXMgSLQzBIB/ntervBkZmmfEz/+tt8OUU7bG5RhJf2PGacu/VszgXia5ymhia
lIW+T2qdFjYwFHtKuPo33HeK03qiD9Q7RIIXzPUWkCiL1GNdZtKET3CPF/mL+tbr
zMa1cghPtSYP8URdaV1B0VsCFPlB930pTr104k59ogj099sXZI/Q5tqA+vOry3MH
9kvAul5sb8XW2zJ/Hvnmb3cuI+EWCKkUlHnYmvPvjvrt6jTCbYyG1toZ2CvWLJit
49Xh5CKMyN7STjAyeJ5qAGwZaJaHyUPlymT8g6SmtXoaf4XqyL29y+gbyZ/a3+If
ync1j3BDqoSvX6+7dXvsfPSJb8n85PSVQDYAlNKJN2Hb4uKbxvKnz9A5SFir32n8
H01rAgMBAAGjggFvMIIBazAfBgNVHSMEGDAWgBQLUOx37yqb/+wDoQr/rcbkKhjH
PjBXBggrBgEFBQcBAQRLMEkwHwYIKwYBBQUHMAGGE2h0dHA6Ly9ndS5zeW1jZC5j
b20wJgYIKwYBBQUHMAKGGmh0dHA6Ly9ndS5zeW1jYi5jb20vZ3UuY3J0MA4GA1Ud
DwEB/wQEAwIFoDAdBgNVHSUEFjAUBggrBgEFBQcDAQYIKwYBBQUHAwIwLQYDVR0R
BCYwJIISd3d3LmNhcmVlcmdhbWUuY29tgg5jYXJlZXJnYW1lLmNvbTArBgNVHR8E
JDAiMCCgHqAchhpodHRwOi8vZ3Uuc3ltY2IuY29tL2d1LmNybDAMBgNVHRMBAf8E
AjAAMFYGA1UdIARPME0wSwYGZ4EMAQIBMEEwPwYIKwYBBQUHAgEWM2h0dHBzOi8v
d3d3Lmdlb3RydXN0LmNvbS9yZXNvdXJjZXMvcmVwb3NpdG9yeS9sZWdhbDANBgkq
hkiG9w0BAQsFAAOCAQEAb3zs0ONhor2xgIvPEYklqGaO2Do3C1a74+tNMOREqW9G
kH5EPQu/w+tbzlpIaEihtenHLStTI+tHSimuGTeF0jm03t6J/bhgR2zgp6lmhQzv
k6babANTO4IyQckh9qtIKQ9RGUzva+YtKe3LauS6lxl3dQvytClZy36PX4TaV59i
EyCN38LY+4mzkddqNV4hm6+ON/7q9WG2zVoxFzDX8Kv/FogP4ivspFJUWtF5xZ2X
QzQuVEXo8FVfMP9wqDEQe1IeOePcYMFEBt4/evEneUvEX2MNLc+wMt8qf44pxryp
8NIYplnoidK7+W1YRQcFUhx/3xbyoBB2fEHCsvyYGw==
-----END CERTIFICATE-----
                """.encode(
                    encoding="ascii"
                ),
                default_backend(),
            ),
            # GeoTrust DV SSL
            load_pem_x509_certificate(
                """-----BEGIN CERTIFICATE-----
MIIERDCCAyygAwIBAgIDAjp4MA0GCSqGSIb3DQEBCwUAMEIxCzAJBgNVBAYTAlVT
MRYwFAYDVQQKEw1HZW9UcnVzdCBJbmMuMRswGQYDVQQDExJHZW9UcnVzdCBHbG9i
YWwgQ0EwHhcNMTQwODI5MjIyNDU4WhcNMjIwNTIwMjIyNDU4WjBmMQswCQYDVQQG
EwJVUzEWMBQGA1UEChMNR2VvVHJ1c3QgSW5jLjEdMBsGA1UECxMURG9tYWluIFZh
bGlkYXRlZCBTU0wxIDAeBgNVBAMTF0dlb1RydXN0IERWIFNTTCBDQSAtIEc0MIIB
IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA30GUetr35DFDtuoBG1zOY+r6
baPZau4tmnX51ZxbvTTf2BzJbdgEiNputbe18DCuQNZd+sRTwdQinQROEaaV1UV8
QQVY4Ezd+e5VvV9G3K0TCJ0s5PeC5gcrng6MNKHOxKHggXCGAAY/Lep8myiuGyiL
OQnT5/BFpLG6EWeQVXuP3u04XKHh44PEw3KRT5juHMKAqmSlPoNiHMzgnvhawBMS
faKni6PnnyrXm8rL7ZcBnCiEUQRQQby0/HjpG88U6h8P/C4BMo22NcsKGDvsWj48
G9OZQx4v973zWxK5B17tPtGph8x3cifU2XWiY0uTNr3lXNe/X3kNszKnC7JjIwID
AQABo4IBHTCCARkwHwYDVR0jBBgwFoAUwHqYaI2J+6sFZAwRfap9ZbjKzE4wHQYD
VR0OBBYEFAtQ7HfvKpv/7AOhCv+txuQqGMc+MBIGA1UdEwEB/wQIMAYBAf8CAQAw
DgYDVR0PAQH/BAQDAgEGMDUGA1UdHwQuMCwwKqAooCaGJGh0dHA6Ly9nLnN5bWNi
LmNvbS9jcmxzL2d0Z2xvYmFsLmNybDAuBggrBgEFBQcBAQQiMCAwHgYIKwYBBQUH
MAGGEmh0dHA6Ly9nLnN5bWNkLmNvbTBMBgNVHSAERTBDMEEGCmCGSAGG+EUBBzYw
MzAxBggrBgEFBQcCARYlaHR0cDovL3d3dy5nZW90cnVzdC5jb20vcmVzb3VyY2Vz
L2NwczANBgkqhkiG9w0BAQsFAAOCAQEAMyTVkKopDDW5L8PHQpPAxhBLAwh2hBCi
4OdTEifyCtp/Otz9XHlajxd0Q1Ox1dFdWbmmhGTK8ToKWZYQv6mBV4tch9x/4+S7
BXqgMgkTThCBKB+cA2K89AG1KYNGB7nnuF3I6dHdrTv4NNvB0ZWpkRjtPCw3EU3M
/lM+UEP5w1ZBrFObbAWymuLgWVcwMrYmThMlzfpIcA91VWAR9TvVXlo8i1sPD2JC
SGGFixD0wYi/f1+KwtfNK5RcHzRKCK/rromoSHVVlR27wJoBufQDIj7U5lIwDWe5
wJH9LUwwjr2MpQSRu6Srfw/Yb/BmAMmjXPWwj4PmnFrmtrnFvL7kAg==
-----END CERTIFICATE-----
                """.encode(
                    encoding="ascii"
                ),
                default_backend(),
            ),
            # GeoTrust Global CA
            load_pem_x509_certificate(self._GEOTRUST_GLOBAL_CA_CERT.encode(encoding="ascii"), default_backend()),
        ]

        # The class to check for Symantec CAs returns the right result
        assert SymantecDistructTester.get_distrust_timeline(cert_chain) == SymantecDistrustTimelineEnum.MARCH_2018

    def test_september_2018(self):
        # Given a certificate chain issued by a Symantec CA that will be distrusted in September 2018
        cert_chain = [
            # invalid-expected-sct.badssl.com
            load_pem_x509_certificate(
                """-----BEGIN CERTIFICATE-----
MIIFGDCCBACgAwIBAgIQGkTSlT8/2bAURo/J1C2/STANBgkqhkiG9w0BAQsFADBC
MQswCQYDVQQGEwJVUzEWMBQGA1UEChMNR2VvVHJ1c3QgSW5jLjEbMBkGA1UEAxMS
UmFwaWRTU0wgU0hBMjU2IENBMB4XDTE2MTExNzAwMDAwMFoXDTE4MTExNzIzNTk1
OVowKjEoMCYGA1UEAwwfaW52YWxpZC1leHBlY3RlZC1zY3QuYmFkc3NsLmNvbTCC
ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMIE7PiM7gTCs9hQ1XBYzJMY
61yoaEmwIrX5lZ6xKyx2PmzAS2BMTOqytMAPgLaw+XLJhgL5XEFdEyt/ccRLvOmU
LlA3pmccYYz2QULFRtMWhyefdOsKnRFSJiFzbIRMeVXk0WvoBj1IFVKtsyjbqv9u
/2CVSndrOfEk0TG23U3AxPxTuW1CrbV8/q71FdIzSOciccfCFHpsKOo3St/qbLVy
tH5aohbcabFXRNsKEqveww9HdFxBIuGa+RuT5q0iBikusbpJHAwnnqP7i/dAcgCs
kgjZjFeEU4EFy+b+a1SYQCeFxxC7c3DvaRhBB0VVfPlkPz0sw6l865MaTIbRyoUC
AwEAAaOCAiAwggIcMCoGA1UdEQQjMCGCH2ludmFsaWQtZXhwZWN0ZWQtc2N0LmJh
ZHNzbC5jb20wCQYDVR0TBAIwADArBgNVHR8EJDAiMCCgHqAchhpodHRwOi8vZ3Au
c3ltY2IuY29tL2dwLmNybDBvBgNVHSAEaDBmMGQGBmeBDAECATBaMCoGCCsGAQUF
BwIBFh5odHRwczovL3d3dy5yYXBpZHNzbC5jb20vbGVnYWwwLAYIKwYBBQUHAgIw
IAweaHR0cHM6Ly93d3cucmFwaWRzc2wuY29tL2xlZ2FsMB8GA1UdIwQYMBaAFJfC
J1CewsnsDIgyyHyt4qYBT9pvMA4GA1UdDwEB/wQEAwIFoDAdBgNVHSUEFjAUBggr
BgEFBQcDAQYIKwYBBQUHAwIwVwYIKwYBBQUHAQEESzBJMB8GCCsGAQUFBzABhhNo
dHRwOi8vZ3Auc3ltY2QuY29tMCYGCCsGAQUFBzAChhpodHRwOi8vZ3Auc3ltY2Iu
Y29tL2dwLmNydDAPBgMrZU0ECDAGAgEBAgEBMIGKBgorBgEEAdZ5AgQCBHwEegB4
AHYAp85KTmIH4K3e5f2qSx+GdodntdACpV1HMQ5+ZwqV6rIAAAFYb//OtAAABAMA
RzBFAiEAuAOtNPb8Dyz/hKCG5dfPWvAKB2Jqf7OmRGTxlaRIRRECIC9hjVMbb0q4
CmeyB+GPba3RBEpes4nvfGDCaFP5PR9tMA0GCSqGSIb3DQEBCwUAA4IBAQBIMHww
vuW8XOBdxw0Mq0z3NFsAW2XvkcXtTGmB5savCpRJ6LN0ub6NJX+KiFmDo9voMDro
YL7o9i+BrSAFo3hr8QNxLLJaXD54h8lJ0oCkzyZtzezM8p2PWsEjouePtdE0AIHn
RK0SnKBk9w0b3CMSbzObc1Cu8ATqZnE51d7xurim7qTZMhJM2hi9HeLPLVdEBiuC
zmYtNpRMMQqbQvvrXftAohq/W90rK42Ss8kYIf8FsVTa5VaqXW7lIh/3JmBNLZ1D
Aw5rmaztWlYO64YS7z4am5d9h2rrF1rfgv9Mc3caxAUO3sJZDRyhYaj+7BUgv8HR
otJHkjr2ASPp31Yf
-----END CERTIFICATE-----
                """.encode(
                    encoding="ascii"
                ),
                default_backend(),
            ),
            # RapidSSL SHA 256
            load_pem_x509_certificate(
                """-----BEGIN CERTIFICATE-----
MIIETTCCAzWgAwIBAgIDAjpxMA0GCSqGSIb3DQEBCwUAMEIxCzAJBgNVBAYTAlVT
MRYwFAYDVQQKEw1HZW9UcnVzdCBJbmMuMRswGQYDVQQDExJHZW9UcnVzdCBHbG9i
YWwgQ0EwHhcNMTMxMjExMjM0NTUxWhcNMjIwNTIwMjM0NTUxWjBCMQswCQYDVQQG
EwJVUzEWMBQGA1UEChMNR2VvVHJ1c3QgSW5jLjEbMBkGA1UEAxMSUmFwaWRTU0wg
U0hBMjU2IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1jBEgEu
l9h9GKrIwuWF4hdsYC7JjTEFORoGmFbdVNcRjFlbPbFUrkshhTIWX1SG5tmx2GCJ
a1i+ctqgAEJ2sSdZTM3jutRc2aZ/uyt11UZEvexAXFm33Vmf8Wr3BvzWLxmKlRK6
msrVMNI4/Bk7WxU7NtBDTdFlodSLwWBBs9ZwF8w5wJwMoD23ESJOztmpetIqYpyg
C04q18NhWoXdXBC5VD0tA/hJ8LySt7ecMcfpuKqCCwW5Mc0IW7siC/acjopVHHZD
dvDibvDfqCl158ikh4tq8bsIyTYYZe5QQ7hdctUoOeFTPiUs2itP3YqeUFDgb5rE
1RkmiQF1cwmbOwIDAQABo4IBSjCCAUYwHwYDVR0jBBgwFoAUwHqYaI2J+6sFZAwR
fap9ZbjKzE4wHQYDVR0OBBYEFJfCJ1CewsnsDIgyyHyt4qYBT9pvMBIGA1UdEwEB
/wQIMAYBAf8CAQAwDgYDVR0PAQH/BAQDAgEGMDYGA1UdHwQvMC0wK6ApoCeGJWh0
dHA6Ly9nMS5zeW1jYi5jb20vY3Jscy9ndGdsb2JhbC5jcmwwLwYIKwYBBQUHAQEE
IzAhMB8GCCsGAQUFBzABhhNodHRwOi8vZzIuc3ltY2IuY29tMEwGA1UdIARFMEMw
QQYKYIZIAYb4RQEHNjAzMDEGCCsGAQUFBwIBFiVodHRwOi8vd3d3Lmdlb3RydXN0
LmNvbS9yZXNvdXJjZXMvY3BzMCkGA1UdEQQiMCCkHjAcMRowGAYDVQQDExFTeW1h
bnRlY1BLSS0xLTU2OTANBgkqhkiG9w0BAQsFAAOCAQEANevhiyBWlLp6vXmp9uP+
bji0MsGj21hWID59xzqxZ2nVeRQb9vrsYPJ5zQoMYIp0TKOTKqDwUX/N6fmS/Zar
RfViPT9gRlATPSATGC6URq7VIf5Dockj/lPEvxrYrDrK3maXI67T30pNcx9vMaJR
BBZqAOv5jUOB8FChH6bKOvMoPF9RrNcKRXdLDlJiG9g4UaCSLT+Qbsh+QJ8gRhVd
4FB84XavXu0R0y8TubglpK9YCa81tGJUheNI3rzSkHp6pIQNo0LyUcDUrVNlXWz4
Px8G8k/Ll6BKWcZ40egDuYVtLLrhX7atKz4lecWLVtXjCYDqwSfC2Q7sRwrp0Mr8
2A==
-----END CERTIFICATE-----
                """.encode(
                    encoding="ascii"
                ),
                default_backend(),
            ),
            # GeoTrust Global CA
            load_pem_x509_certificate(self._GEOTRUST_GLOBAL_CA_CERT.encode(encoding="ascii"), default_backend()),
        ]

        # The class to check for Symantec CAs returns the right result
        assert SymantecDistructTester.get_distrust_timeline(cert_chain) == SymantecDistrustTimelineEnum.SEPTEMBER_2018
