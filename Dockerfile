FROM node:alpine

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN ls
RUN npm i --registry https://registry.npm.taobao.org
RUN sh build.sh

EXPOSE 4000
CMD ["node", "--experimental-modules", "/app/bin/www.mjs"]
