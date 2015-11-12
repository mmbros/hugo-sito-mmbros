+++
date = "2015-11-03T23:57:21+01:00"
draft = true
title = "Node.js"
tags = ["javascript", "nodejs", "programming language"]

+++
### Links

* [Node.js](http://nodejs.org/) homepage

## Build

### Links

* [Node.js Downloads](http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz)
* [Installing/Building Node.js](https://github.com/joyent/node/wiki/installation)


### Build instruction

1. download source code from [nodejs.org](http://nodejs.org/)

        $ wget http://nodejs.org/dist/v0.12.0/node-v0.12.0.tar.gz

2. extract and change directory

        $ tar -zxf node-v0.12.0.tar.gz
        $ cd node-v0.12.0

3. build and install (in a local folder)

        $ ./configure
        $ make
        $ make install PREFIX=$HOME/local

## package.json

### create
Interactively create a package.json file

    npn init
