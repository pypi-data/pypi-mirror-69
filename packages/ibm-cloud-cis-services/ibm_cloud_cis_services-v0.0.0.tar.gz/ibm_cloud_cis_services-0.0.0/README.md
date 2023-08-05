# IBM Cloud Internet Services Python SDK Version 0.0.1

[![Build Status](https://travis.ibm.com/ibmcloud/cis-python-sdk.svg?token=rbgzvDpUs1FYz2haTgpg&branch=master)](https://travis.ibm.com/ibmcloud/cis-python-sdk)

Python client library to interact with various [IBM Cloud Networking Service APIs](https://cloud.ibm.com/apidocs?category=network).

## Table of Contents

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Authentication](#authentication)
* [Usage](#using-the-sdk)
* [Sample Code](#sample-code)
* [License](#license)

## Overview

The CIS Python SDK allows developers to programmatically interact with the following IBM Cloud services:

Service Name | Imported Class Name
--- | ---
[Cache](https://cloud.ibm.com/apidocs/cis/cache) | CachingApiV1
[IP](https://cloud.ibm.com/apidocs/cis/ip) | CisIpApiV1
[Custom Pages](https://cloud.ibm.com/apidocs/cis) | CustomPagesV1
[DNS Records Bulk](https://cloud.ibm.com/apidocs/cis/dnsrecords) | DnsRecordBulkV1
[DNS Records](https://cloud.ibm.com/apidocs/cis/dnsrecords) | DnsRecordsV1
[Firewall Access Rules](https://cloud.ibm.com/apidocs/cis/firewall-access-rule) | FirewallAccessRulesV1
[Security Level Settings](https://cloud.ibm.com/apidocs/cis/security-level-settings) | FirewallApiV1
[GLB Events](https://cloud.ibm.com/apidocs/cis/glb-events) | GlobalLoadBalancerEventsV1
[GLB Monitor](https://cloud.ibm.com/apidocs/cis/glb-monitor) | GlobalLoadBalancerMonitorV1
[GLB Pools](https://cloud.ibm.com/apidocs/cis/glb-pool) | GlobalLoadBalancerPoolsV0
[GLB Service](https://cloud.ibm.com/apidocs/cis/glb) | GlobalLoadBalancerV1
[Page Rules](https://cloud.ibm.com/apidocs/cis/page-rules) | PageRuleApiV1
[Range Application](https://cloud.ibm.com/apidocs/cis/range) | RangeApplicationsV1
[Routing](https://cloud.ibm.com/apidocs/cis/routing) | RoutingV1
[Security Events](https://cloud.ibm.com/apidocs/cis) | SecurityEventsApiV1
[SSL/TLS](https://cloud.ibm.com/apidocs/cis/tls) | SslCertificateApiV1
[User Agent Blocking Rules](https://cloud.ibm.com/apidocs/cis/user-agent-rules) | UserAgentBlockingRulesV1
[WAF Settings](https://cloud.ibm.com/apidocs/cis/waf) | WafApiV1
[WAF Rule Groups](https://cloud.ibm.com/apidocs/cis/waf-groups) | WafRuleGroupsApiV1
[WAF Rule Packages](https://cloud.ibm.com/apidocs/cis/waf-packages) | WafRulePackagesApiV1
[WAF Rules](https://cloud.ibm.com/apidocs/cis/waf-rules) | WafRulesApiV1
[Zone Firewall Access Rules](https://cloud.ibm.com/apidocs/cis/zone-firewall-access-rule) | ZoneFirewallAccessRulesV1
[Zone Lockdown](https://cloud.ibm.com/apidocs/cis/zone-lockdown) | ZoneLockdownV1
[Zone Rate Limits](https://cloud.ibm.com/apidocs/cis) | ZoneRateLimitsV1
[Zone Settings](https://cloud.ibm.com/apidocs/cis/zonesettings) | ZonesSettingsV1
[Zones](https://cloud.ibm.com/apidocs/cis/zones) | ZonesV1

## Prerequisites

[ibm-cloud-onboarding]: https://cloud.ibm.com/registration?target=%2Fdeveloper%2Fwatson&

* An [IBM Cloud][ibm-cloud-onboarding] account.
* An IAM API key to allow the SDK to access your account. Create one [here](https://cloud.ibm.com/iam/apikeys).
* An installation of Python >=3.5 on your local machine.

## Installation

To install, use `pip` or `easy_install`:

```bash
pip install --upgrade "ibm-cloud-cis-services>=0.0.1"
```

or

```bash
easy_install --upgrade "ibm-cloud-cis-services>=0.0.1"
```

## Using the SDK

For general SDK usage information, please see [this link](https://github.com/IBM/ibm-cloud-sdk-common/blob/master/README.md)

## Sample Code

See [Samples](Samples).

## License

The CIS Python SDK is released under the Apache 2.0 license. The license's full text can be found in [LICENSE](LICENSE).
