FROM node:8.7.0

COPY ./sources.list /etc/apt/sources.list
RUN apt-get update && apt-get install -y curl wget autoconf automake gcc nasm libtool libpng-dev pkg-config make

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN ls
RUN npm cache verify
RUN npm i --registry http://registry.npm.taobao.org
RUN sh build.sh prod false

EXPOSE 4000
# client side render
CMD ["node", "--experimental-modules", "/app/bin/www.mjs"]
