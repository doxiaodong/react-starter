FROM node

RUN echo "deb http://mirrors.aliyun.com/debian stretch main\n\
deb http://mirrors.aliyun.com/debian stretch-updates main\n\
deb http://mirrors.aliyun.com/debian-security stretch/updates main" > /etc/apt/sources.list
RUN apt-get update && apt-get install -y wget autoconf automake gcc nasm libtool libpng-dev pkg-config make

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN ls
RUN npm cache verify
RUN npm i --registry https://registry.npm.taobao.org
RUN sh build.sh

EXPOSE 4000
CMD ["node", "--experimental-modules", "/app/bin/www.mjs"]
