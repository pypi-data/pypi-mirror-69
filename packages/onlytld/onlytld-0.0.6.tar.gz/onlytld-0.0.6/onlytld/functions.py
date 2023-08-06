from typing import Optional

from .data import parse_list


def get_tld(domain: str) -> Optional[str]:
    """
    return domain's top-level-domain or None
    """
    normal, wildcard, exception = parse_list()
    result, is_punycode = None, False

    for i in range(domain.count(".") + 1):
        suffix = ".".join(domain.split(".")[i:])
        if "xn--" in suffix:  # convert punycode to utf8
            suffix = depunycode(suffix)
            is_punycode = True

        if suffix in exception:
            result = ".".join(suffix.split(".")[1:])
        elif ".".join(suffix.split(".")[1:]) in wildcard:
            result = suffix
        elif suffix in normal:
            result = suffix

        if is_punycode and result:  # restore punycode encoding
            result = enpunycode(result)

        if result:
            return result


def get_sld(domain: str) -> Optional[str]:
    """
    return domain's secondary-level-domain or None
    """
    domain = domain.strip(".")
    tld = get_tld(domain)
    if tld is None or tld.count(".") == domain.count("."):
        return None
    return ".".join(domain.split(".")[-tld.count(".") - 2 :])


def enpunycode(domain: str) -> str:
    """
    convert utf8 domain to punycode
    """
    result = []
    for _ in domain.split("."):
        try:
            _.encode("ascii")
            result.append(_)
        except UnicodeEncodeError:
            result.append("xn--" + _.encode("punycode").decode("ascii"))
    return ".".join(result)


def depunycode(domain: str) -> str:
    """
    convert punycode domain to utf8
    """
    result = []
    for _ in domain.split("."):
        if _.startswith("xn--"):
            result.append(_[len("xn--") :].encode("ascii").decode("punycode"))
        else:
            result.append(_)
    return ".".join(result)
