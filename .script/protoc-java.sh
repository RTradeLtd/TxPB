#!/bin/bash

# This script installs protoc-gen-grpc-java for the given platform (defaults to linux-x86_64).
# See: https://search.maven.org/search?q=g:io.grpc%20a:protoc-gen-grpc-java

VERSION=1.19.0
PLATFORM=$1
if [ -z "$1" ] ; then
  PLATFORM=linux-x86_64
fi

mkdir -p build
PLUGIN_EXE=protoc-gen-grpc-java-$VERSION-$PLATFORM.exe
OUT=build/protoc-gen-grpc-java
echo Downloading $PLUGIN_EXE to $OUT...
curl https://search.maven.org/remotecontent?filepath=io/grpc/protoc-gen-grpc-java/$VERSION/$PLUGIN_EXE \
  -o $OUT

echo Setting plugin as executable...
chmod +x $OUT

echo Done!
