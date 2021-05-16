FROM nginx:1.17-alpine
LABEL maintainer="Vdovin Konstantin"

RUN apk --no-cache update
COPY publish/* /usr/share/nginx/html
