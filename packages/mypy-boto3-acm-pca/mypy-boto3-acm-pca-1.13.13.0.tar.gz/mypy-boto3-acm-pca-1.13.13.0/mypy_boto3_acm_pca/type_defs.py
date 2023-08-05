"""
Main interface for acm-pca service type definitions.

Usage::

    from mypy_boto3.acm_pca.type_defs import ASN1SubjectTypeDef

    data: ASN1SubjectTypeDef = {...}
"""
from datetime import datetime
import sys
from typing import List

if sys.version_info >= (3, 8):
    from typing import Literal
else:
    from typing_extensions import Literal
if sys.version_info >= (3, 8):
    from typing import TypedDict
else:
    from typing_extensions import TypedDict


__all__ = (
    "ASN1SubjectTypeDef",
    "CertificateAuthorityConfigurationTypeDef",
    "CreateCertificateAuthorityAuditReportResponseTypeDef",
    "CreateCertificateAuthorityResponseTypeDef",
    "DescribeCertificateAuthorityAuditReportResponseTypeDef",
    "CrlConfigurationTypeDef",
    "RevocationConfigurationTypeDef",
    "CertificateAuthorityTypeDef",
    "DescribeCertificateAuthorityResponseTypeDef",
    "GetCertificateAuthorityCertificateResponseTypeDef",
    "GetCertificateAuthorityCsrResponseTypeDef",
    "GetCertificateResponseTypeDef",
    "IssueCertificateResponseTypeDef",
    "ListCertificateAuthoritiesResponseTypeDef",
    "PermissionTypeDef",
    "ListPermissionsResponseTypeDef",
    "TagTypeDef",
    "ListTagsResponseTypeDef",
    "PaginatorConfigTypeDef",
    "ValidityTypeDef",
    "WaiterConfigTypeDef",
)

ASN1SubjectTypeDef = TypedDict(
    "ASN1SubjectTypeDef",
    {
        "Country": str,
        "Organization": str,
        "OrganizationalUnit": str,
        "DistinguishedNameQualifier": str,
        "State": str,
        "CommonName": str,
        "SerialNumber": str,
        "Locality": str,
        "Title": str,
        "Surname": str,
        "GivenName": str,
        "Initials": str,
        "Pseudonym": str,
        "GenerationQualifier": str,
    },
    total=False,
)

CertificateAuthorityConfigurationTypeDef = TypedDict(
    "CertificateAuthorityConfigurationTypeDef",
    {
        "KeyAlgorithm": Literal["RSA_2048", "RSA_4096", "EC_prime256v1", "EC_secp384r1"],
        "SigningAlgorithm": Literal[
            "SHA256WITHECDSA",
            "SHA384WITHECDSA",
            "SHA512WITHECDSA",
            "SHA256WITHRSA",
            "SHA384WITHRSA",
            "SHA512WITHRSA",
        ],
        "Subject": ASN1SubjectTypeDef,
    },
)

CreateCertificateAuthorityAuditReportResponseTypeDef = TypedDict(
    "CreateCertificateAuthorityAuditReportResponseTypeDef",
    {"AuditReportId": str, "S3Key": str},
    total=False,
)

CreateCertificateAuthorityResponseTypeDef = TypedDict(
    "CreateCertificateAuthorityResponseTypeDef", {"CertificateAuthorityArn": str}, total=False
)

DescribeCertificateAuthorityAuditReportResponseTypeDef = TypedDict(
    "DescribeCertificateAuthorityAuditReportResponseTypeDef",
    {
        "AuditReportStatus": Literal["CREATING", "SUCCESS", "FAILED"],
        "S3BucketName": str,
        "S3Key": str,
        "CreatedAt": datetime,
    },
    total=False,
)

_RequiredCrlConfigurationTypeDef = TypedDict("_RequiredCrlConfigurationTypeDef", {"Enabled": bool})
_OptionalCrlConfigurationTypeDef = TypedDict(
    "_OptionalCrlConfigurationTypeDef",
    {"ExpirationInDays": int, "CustomCname": str, "S3BucketName": str},
    total=False,
)


class CrlConfigurationTypeDef(_RequiredCrlConfigurationTypeDef, _OptionalCrlConfigurationTypeDef):
    pass


RevocationConfigurationTypeDef = TypedDict(
    "RevocationConfigurationTypeDef", {"CrlConfiguration": CrlConfigurationTypeDef}, total=False
)

CertificateAuthorityTypeDef = TypedDict(
    "CertificateAuthorityTypeDef",
    {
        "Arn": str,
        "CreatedAt": datetime,
        "LastStateChangeAt": datetime,
        "Type": Literal["ROOT", "SUBORDINATE"],
        "Serial": str,
        "Status": Literal[
            "CREATING", "PENDING_CERTIFICATE", "ACTIVE", "DELETED", "DISABLED", "EXPIRED", "FAILED"
        ],
        "NotBefore": datetime,
        "NotAfter": datetime,
        "FailureReason": Literal["REQUEST_TIMED_OUT", "UNSUPPORTED_ALGORITHM", "OTHER"],
        "CertificateAuthorityConfiguration": CertificateAuthorityConfigurationTypeDef,
        "RevocationConfiguration": RevocationConfigurationTypeDef,
        "RestorableUntil": datetime,
    },
    total=False,
)

DescribeCertificateAuthorityResponseTypeDef = TypedDict(
    "DescribeCertificateAuthorityResponseTypeDef",
    {"CertificateAuthority": CertificateAuthorityTypeDef},
    total=False,
)

GetCertificateAuthorityCertificateResponseTypeDef = TypedDict(
    "GetCertificateAuthorityCertificateResponseTypeDef",
    {"Certificate": str, "CertificateChain": str},
    total=False,
)

GetCertificateAuthorityCsrResponseTypeDef = TypedDict(
    "GetCertificateAuthorityCsrResponseTypeDef", {"Csr": str}, total=False
)

GetCertificateResponseTypeDef = TypedDict(
    "GetCertificateResponseTypeDef", {"Certificate": str, "CertificateChain": str}, total=False
)

IssueCertificateResponseTypeDef = TypedDict(
    "IssueCertificateResponseTypeDef", {"CertificateArn": str}, total=False
)

ListCertificateAuthoritiesResponseTypeDef = TypedDict(
    "ListCertificateAuthoritiesResponseTypeDef",
    {"CertificateAuthorities": List[CertificateAuthorityTypeDef], "NextToken": str},
    total=False,
)

PermissionTypeDef = TypedDict(
    "PermissionTypeDef",
    {
        "CertificateAuthorityArn": str,
        "CreatedAt": datetime,
        "Principal": str,
        "SourceAccount": str,
        "Actions": List[Literal["IssueCertificate", "GetCertificate", "ListPermissions"]],
        "Policy": str,
    },
    total=False,
)

ListPermissionsResponseTypeDef = TypedDict(
    "ListPermissionsResponseTypeDef",
    {"Permissions": List[PermissionTypeDef], "NextToken": str},
    total=False,
)

_RequiredTagTypeDef = TypedDict("_RequiredTagTypeDef", {"Key": str})
_OptionalTagTypeDef = TypedDict("_OptionalTagTypeDef", {"Value": str}, total=False)


class TagTypeDef(_RequiredTagTypeDef, _OptionalTagTypeDef):
    pass


ListTagsResponseTypeDef = TypedDict(
    "ListTagsResponseTypeDef", {"Tags": List[TagTypeDef], "NextToken": str}, total=False
)

PaginatorConfigTypeDef = TypedDict(
    "PaginatorConfigTypeDef", {"MaxItems": int, "PageSize": int, "StartingToken": str}, total=False
)

ValidityTypeDef = TypedDict(
    "ValidityTypeDef",
    {"Value": int, "Type": Literal["END_DATE", "ABSOLUTE", "DAYS", "MONTHS", "YEARS"]},
)

WaiterConfigTypeDef = TypedDict(
    "WaiterConfigTypeDef", {"Delay": int, "MaxAttempts": int}, total=False
)
