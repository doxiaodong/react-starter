FROM ubuntu:16.04

COPY ./sources.list /etc/apt/sources.list
RUN apt-get update && apt-get install -y curl wget autoconf automake gcc nasm libtool libpng-dev pkg-config make
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install --yes build-essential

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN ls
RUN npm cache verify
RUN npm i --registry https://registry.npm.taobao.org
RUN sh build.sh

EXPOSE 4000
CMD ["node", "--experimental-modules", "/app/bin/www.mjs"]
