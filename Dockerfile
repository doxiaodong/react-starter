FROM ubuntu:16.04

COPY ./sources.list /etc/apt/sources.list
RUN apt-get update && apt-get install -y curl wget autoconf automake gcc nasm libtool libpng-dev pkg-config make

RUN wget http://cdn.npm.taobao.org/dist/node/v8.7.0/node-v8.7.0-linux-x64.tar.gz
RUN tar -zvxf node-v8.7.0-linux-x64.tar.gz
RUN ln -s /node-v8.7.0-linux-x64/bin/node /usr/local/bin/node
RUN ln -s /node-v8.7.0-linux-x64/bin/npm /usr/local/bin/npm
RUN node -v && npm -v

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN ls
RUN npm cache verify
RUN npm i --registry http://registry.npm.taobao.org
RUN sh build.sh

EXPOSE 4000
CMD ["node", "--experimental-modules", "/app/bin/www.mjs"]
