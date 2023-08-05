# -------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
# --------------------------------------------------------------------------
"""domain_utilstes extract test class."""
import os

import pytest

from ..msticpy.sectools import domain_utils


def test_validate_domain():
    test_dom_val = domain_utils.DomainValidator()
    valid_tld = test_dom_val.validate_tld("www.microsoft.com")
    resolvable = test_dom_val.is_resolvable("www.microsoft.com")
    blacklisted = test_dom_val.ssl_blacklisted("www.microsoft.com")
    assert valid_tld
    assert resolvable
    assert not blacklisted[0]


def test_validate_domain_fail():
    test_dom_val = domain_utils.DomainValidator()
    valid_tld = test_dom_val.validate_tld("www.contoso.garbage")
    resolvable = test_dom_val.is_resolvable("www.contoso.garbage")
    blacklisted = test_dom_val.ssl_blacklisted("www.contoso.garbage")
    assert not valid_tld
    assert not resolvable
    assert not blacklisted[0]
    assert blacklisted[1] is None


def test_TLD_file():
    test_dom_val = domain_utils.DomainValidator()
    tlds = test_dom_val._get_tlds()
    assert "COM" in tlds
    assert len(tlds) > 0
