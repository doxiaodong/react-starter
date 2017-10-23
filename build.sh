#!/bin/bash

./node_modules/.bin/fec-builder clean
./node_modules/.bin/fec-builder -e production -f ./env/prod.json --ISOMORPHIC_TOOLS_FILE ./server/isomorphic.js generate
