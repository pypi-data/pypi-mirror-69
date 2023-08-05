# IGS: A multi-domain gemini server

This is a server implementing the Gemini protocol.

## What makes this special

* It doesn't deal with the SSL part, that's the job of the loadbalancer
* It supports multiple domains

## Installation

```shell-session
$ pip3 install internetgeminiserver
```

## Use

Make a config file based on `example.conf`, every section is a domain name.

```shell-session
$ igs example.conf
enjoy
```