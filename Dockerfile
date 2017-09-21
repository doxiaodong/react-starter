FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm i --registry https://registry.npm.taobao.org
RUN npm run build
RUN ls

EXPOSE 4000
CMD ["npm", "run", "ssr:server"]
