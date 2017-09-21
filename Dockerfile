FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY dist/ /app
COPY node_modules/ /app
RUN ls

EXPOSE 4000
CMD ["node", "bin/www"]
