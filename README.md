# whois-ux 

node.js whois utility to retrive whois infromation

[![NPM](https://nodei.co/npm/whois-ux.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/whois-ux/)

The module uses the whois tool. That is not available on windows by default.
If you are on windows you can get it here http://technet.microsoft.com/en-us/sysinternals/bb897435.aspx
For linux whois is generally installed at /usr/bin/whois
 
## Install

Install with [npm](http://github.com/xreader/whois):

    npm install whois-ux
    
  **Linux**
  
  If you get exception check if whois is installed on your system
  
  e.g. Ubuntu

```    
  apt-get install whois
```
   
  **Windows users**
  
  On windows whois executable is not installed also you need to install it from here http://technet.microsoft.com/en-us/sysinternals/bb897435.aspx

## Usage

```
var whois = require('whois-ux');

whois.whois('139.130.4.5', function (err, data){
	console.log(JSON.stringify(data));
});
```
output of this call

```
{
    "NetRange": "139.130.0.0 - 139.130.255.255",
    "CIDR": "139.130.0.0/16",
    "OriginAS": "",
    "NetName": "APNIC-ERX-139-130-0-0",
    "NetHandle": "NET-139-130-0-0-1",
    "Parent": "NET-139-0-0-0-0",
    "NetType": "Early Registrations, Transferred to APNIC",
    "Comment": [
        "This IP address range is not registered in the ARIN database.",
        "This range was transferred to the APNIC Whois Database as",
        "part of the ERX (Early Registration Transfer) project.",
        "For details, refer to the APNIC Whois Database via",
        "",
        "for the Asia Pacific region.  APNIC does not operate networks",
        "using this IP address range and is not able to investigate",
        "spam or abuse reports relating to these addresses.  For more"
    ],
    "RegDate": [
        "2004-03-03",
        ""
    ],
    "Updated": [
        "2009-10-08",
        "2012-01-24"
    ],
    "OrgName": "Asia Pacific Network Information Centre",
    "OrgId": "APNIC",
    "Address": "PO Box 3646",
    "City": "South Brisbane",
    "StateProv": "QLD",
    "PostalCode": "4101",
    "Country": "AU",
    "OrgAbuseHandle": "AWC12-ARIN",
    "OrgAbuseName": "APNIC Whois Contact",
    "OrgAbusePhone": "+61 7 3858 3188",
    "OrgAbuseEmail": "search-apnic-not-arin@apnic.net",
    "OrgTechHandle": "AWC12-ARIN",
    "OrgTechName": "APNIC Whois Contact",
    "OrgTechPhone": "+61 7 3858 3188",
    "OrgTechEmail": "search-apnic-not-arin@apnic.net",
    "inetnum": "139.130.0.0 - 139.130.255.255",
    "netname": "TELSTRAINTERNET35-AU",
    "descr": [
        "Telstra Internet",
        "Locked Bag 5744",
        "Canberra",
        "ACT 2601"
    ],
    "country": "AU",
    "admin-c": "TIAR-AP",
    "tech-c": "TIAR-AP",
    "mnt-by": [
        "APNIC-HM",
        "MAINT-AU-TIAR-AP",
        "MAINT-AU-TIAR-AP"
    ],
    "mnt-lower": "MAINT-AU-TIAR-AP",
    "remarks": [
        "-----",
        "All reports regarding SPAM or security breaches",
        "should be addressed to abuse@telstra.net",
        "------",
        "Telstra Internet Address Registry Role Object"
    ],
    "status": "ALLOCATED PORTABLE",
    "mnt-irt": "IRT-TELSTRA-AU",
    "changed": [
        "hostmaster@arin.net 20020131",
        "hm-changed@apnic.net 20040224",
        "hm-changed@apnic.net 20040301",
        "hm-changed@apnic.net 20041214",
        "IRT@team.telstra.com 20101117",
        "nobody@aunic.net 19951128",
        "aunic-transfer@apnic.net 20010523",
        "aunic-transfer@apnic.net 20020115",
        "Kushnil@apnic.net 20020813",
        "hm-changed@apnic.net 20050310"
    ],
    "source": "APNIC",
    "irt": "IRT-TELSTRA-AU",
    "address": [
        "Telstra Internet",
        "Locked Bag 5744",
        "Canberra",
        "ACT 2601"
    ],
    "e-mail": [
        "IRT@team.telstra.com",
        "addressing@telstra.net"
    ],
    "abuse-mailbox": "IRT@team.telstra.com",
    "auth": "# Filtered",
    "person": "Telstra Internet Address Registry",
    "phone": "+61 3 9815 5923",
    "nic-hdl": "TIAR-AP"
}
```

##Testing

```
node test.js
```
