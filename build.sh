#!/bin/bash

npm i --registry https://registry.npm.taobao.org
./node_modules/.bin/fec-builder --verbose -e production  -f ./env/prod.json generate

