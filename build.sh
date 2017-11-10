#!/bin/sh

BUILD_ENV=$1
SSR=$2

echo "build env: ${BUILD_ENV}"
echo "is SSR: ${SSR}"

# prepare
if [ -f build-config.json ]; then
    rm build-config.json
fi

publicUrl="\/"
if [ $BUILD_ENV = "beta" ]; then
    publicUrl="https:\/\/beta-static.darlin.me"
elif [ $BUILD_ENV = "prod" ]; then
    publicUrl="\/"
fi

if [ $SSR = "true" ]; then
    htmlname="index.ssr.html"
else
    htmlname="index.html"
fi

render_template() {
    sed -e "s/\${publicUrl}/$publicUrl/" -e "s/\${htmlname}/$htmlname/" $1 > $2
}
render_template build-config.tpl.json build-config.json

if [ -f server/env.json ]; then
    rm server/env.json
fi
cp env/${BUILD_ENV}.json server/env.json

# build
alias fec-builder=./node_modules/.bin/fec-builder
fec-builder clean
fec-builder -e production -f ./env/${BUILD_ENV}.json --ISOMORPHIC_TOOLS_FILE ./server/isomorphic.js generate
