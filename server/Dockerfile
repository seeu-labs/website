FROM alpine:latest

WORKDIR /app
COPY dist .
ENV GIN_MODE=release
EXPOSE 80

ENTRYPOINT [ "./app" ]