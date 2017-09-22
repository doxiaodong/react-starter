FROM node

RUN apt-get update && apt-get install -y wget autoconf automake gcc nasm libtool libpng-dev pkg-config make
RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN ls
RUN npm i --registry https://registry.npm.taobao.org
RUN sh build.sh

EXPOSE 4000
CMD ["node", "--experimental-modules", "/app/bin/www.mjs"]
