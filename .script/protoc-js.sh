#!/bin/bash

# This script installs protoc-gen-grpc-web for the given platform (defaults to linux-x86_64).
# See: https://github.com/grpc/grpc-web/releases

VERSION=1.0.4
PLATFORM=$1
if [ -z "$1" ] ; then
  PLATFORM=linux-x86_64
fi

mkdir -p build
OUT=build/protoc-gen-grpc-web
PLUGIN_EXE=protoc-gen-grpc-web-$VERSION-$PLATFORM
echo Downloading $PLUGIN_EXE to $OUT...
curl -L https://github.com/grpc/grpc-web/releases/download/$VERSION/$PLUGIN_EXE \
  -o $OUT

echo Setting plugin as executable...
chmod +x $OUT

echo Done!
