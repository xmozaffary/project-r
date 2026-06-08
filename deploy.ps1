docker buildx create --use --name mp-builder 2>$null
docker buildx build --platform linux/amd64,linux/arm64 --no-cache -t mozaffary/ditt-foretag:latest --push .
