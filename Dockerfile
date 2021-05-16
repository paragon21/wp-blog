FROM nginx:1.17-alpine
LABEL maintainer="Vdovin Konstantin"

RUN apk --no-cache update
COPY build/* /usr/share/nginx/html
