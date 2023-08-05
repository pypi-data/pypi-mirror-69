# wmgraph python library

This library aids with the Microsoft graph API for Office 365 business

## Configuration

Register an application in Azure AD

Prepare a config.json and certificates for a MS Application

config.json
```
{
  "authority": "https://login.microsoftonline.com/TENANT_ID",
  "client_id": "CLIENT_ID",
  "scope": [ "https://graph.microsoft.com/.default" ],
  "thumbprint": "SRERVER.CRT.FINGERPRINT",
  "private_key_file": "PATH_TO_CERTS/server.pem",
  "endpoint": "https://graph.microsoft.com/v1.0"
}
```

Create Certificates:
call this script with a path to the certificates:
```
#!/bin/sh
PATH_TO_CERTS = $1
mkdir -p $PATH_TO_CERTS
cd $PATH_TO_CERTS
openssl genrsa -out server.pem 2048
openssl req -new -key server.pem -out server.csr
openssl x509 -req -days 3365 -in server.csr -signkey server.pem -out server.crt

openssl x509 -noout -fingerprint -sha1 -inform pem -in server.crt |sed -e 's=:==g' > server.fpr
```

## Usage

import

connect

use

## Development requirements

twine
wheel