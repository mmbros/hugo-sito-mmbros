---
title: "Encrypt"
subtitle: ""
description: ""
date: 2020-05-04T15:41:20+02:00
# lastmod: 
categories: [Linux]
# tags: []
draft: true
---
## How to encrypt a file or directory in Linux

[Source](https://superuser.com/questions/249497/how-to-encrypt-a-file-or-directory-in-linux)

###  GPG

The syntax for files and directories differs though.

**Encryption**

For files (outputs filename.gpg):

    gpg -c filename

For dirs:

    gpg-zip -c -o file.gpg dirname

**Decryption**

For files (outputs filename.gpg):

    gpg filename.gpg

For dirs:

    gpg-zip -d file.gpg

### OpenSSL


**Encryption**

    openssl des3 -salt -in unencrypted-data.tar -out encrypted-data.tar.des3

**Decryption**

    openssl des3 -d -salt -in encrypted-data.tar.des3 -out unencrypted-data.tar

### AES

**Encryption**

    aescrypt -e -p password  file.jpg

**Decryption**

    aescrypt -d -p password file.jpg.aes


## Client and Server certificate how-to

### Setting a custom Certificate Autority in Firefox

1. Preferences > Privacy & Security > Certificates 
2. press View Certificates
3. select tab Authorities
4. press Import
5. select `ca-chain.cert.pem`
