FROM nginx:1.17-alpine
LABEL maintainer="vdovin.kr@gmail.com"

#

RUN apk --no-cache update
COPY build/* /usr/share/nginx/html/
