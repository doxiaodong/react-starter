FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY dist/ /app
COPY node_modules/ /app/node_modules
COPY bin/ /app/bin
RUN ls

EXPOSE 4000
CMD ["node", "app/bin/www"]
