#!/bin/sh

BUILD_ENV=$1
SSR=$2

BUILD_CONFIG_FILE=build-config/base.json

if [ SSR = true ]; then
    if [ -f build-config/${BUILD_ENV}.ssr.json ]; then
        BUILD_CONFIG_FILE=build-config/${BUILD_ENV}.ssr.json
    else
        BUILD_CONFIG_FILE=build-config/base.ssr.json
    fi
else
    if [ -f build-config/${BUILD_ENV}.json ]; then
        BUILD_CONFIG_FILE=build-config/${BUILD_ENV}.json
    else
        BUILD_CONFIG_FILE=build-config/base.json
    fi
fi

echo "build env: ${BUILD_ENV}"
echo "is SSR: ${SSR}"
echo "build-config file: ${BUILD_CONFIG_FILE}"

# prepare
if [ -f server/env.json ]; then
    rm server/env.json
fi
cp env/${BUILD_ENV}.json server/env.json

# build
alias fec-builder=./node_modules/.bin/fec-builder

fec-builder clean -c ${BUILD_CONFIG_FILE}
fec-builder -e production -c ${BUILD_CONFIG_FILE} -f ./env/${BUILD_ENV}.json --ISOMORPHIC_TOOLS_FILE ./server/isomorphic.js generate
