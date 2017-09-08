FROM nginx:alpine
RUN mkdir -p /app
WORKDIR /app
COPY dist/ /app
RUN ls
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 4000
