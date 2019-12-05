PROTOC_GEN_TS_PATH=${HOME}/.npm_modules/bin/protoc-gen-ts

.PHONY: proto
proto: proto-gen tidy

# -I are the import paths, because we're using some plugins, we need to import the gogo protobuf helpers
.PHONY: proto-gen
proto-gen: gen-dag gen-file gen-util gen-status gen-pubsub gen-admin gen-namesys gen-keystore gen-node gen-docs


# run standard go tooling for better readability
.PHONY: tidy
tidy: imports fmt
	go vet ./...
	golint ./...

# automatically add missing imports
.PHONY: imports
imports:
	find . -type f -name '*.go' -exec goimports -w {} \;

# format code and simplify if possible
.PHONY: fmt
fmt:
	find . -type f -name '*.go' -exec gofmt -s -w {} \;

# install supplementary tooling
.PHONY: install
install:
	go get -u github.com/gogo/protobuf/protoc-gen-gogoslick
	go get -u github.com/gogo/protobuf/protoc-gen-gogofaster
	go get -u github.com/gogo/protobuf/protoc-gen-gogofast
	go get -u github.com/gogo/protobuf/protoc-gen-gogo
	go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
	go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
	go get -u github.com/mwitkow/go-proto-validators/protoc-gen-govalidators
	go get -u github.com/gogo/protobuf/proto
	go get -u github.com/gogo/protobuf/gogoproto
	go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc
	npm install -g ts-protoc-gen
	python3 -m pip install grpcio-tools
	bash .script/protoc-js.sh
	bash .script/protoc-java.sh

# protocol buffer generation targets

gen-dag:
	# generate golang bindings (dag)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/dag.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (dag)
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/dag.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (dag)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/dag.proto
	# generate typescript bindings (dag)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/dag.proto
	# generate java bindings (dag)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/dag.proto

gen-file:
	# generate golang bindings (file)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/file.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (file)
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/file.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (file)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/file.proto
	# generate typescript bindings (file)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/file.proto

	# generate java bindings (file)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/file.proto

gen-util:
	# generate golang bindings (util)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/util.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (util)  no grpc bindings for this so --grpc_python_out is omitted
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/util.proto \
		--python_out=py
	# generate js bindings (util)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/util.proto
	# generate typescript bindings (util)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/util.proto
	# generate java bindings (util)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/dag.proto

gen-node:
	# generate golang bindings (node)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/node.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (node)
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/node.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (node)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/node.proto
	# generate typescript bindings (node)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/node.proto
	# generate java bindings (node)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/node.proto

gen-status:
	# generate golang bindings (status)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/status.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (status)
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/status.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (status)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/status.proto
	# generate typescript bindings (status)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/status.proto
	# generate java bindings (status)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/status.proto

gen-pubsub:
	# generate golang bindings (pubsub)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/pubsub.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (pubsub)
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/pubsub.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (pubsub)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/file.proto
	# generate typescript bindings (pubsub)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/file.proto
	# generate java bindings (pubsub)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/pubsub.proto

gen-admin:
	# generate golang bindings (admin)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/admin.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (admin)
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/admin.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (admin)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/admin.proto
	# generate typescript bindings (admin)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/admin.proto
	# generate java bindings (admin)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/admin.proto

gen-namesys:
	# generate golang bindings (namesys)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/namesys.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (namesys)
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/namesys.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (namesys)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/namesys.proto
	# generate typescript bindings (namesys)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/namesys.proto
	# generate java bindings (namesys)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/namesys.proto

gen-keystore:
	# generate golang bindings (keystore)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/keystore.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (keystore)
	python3 -m grpc_tools.protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pb/keystore.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (keystore)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		--js_out=import_style=commonjs,binary:js \
		--grpc_out=js \
		pb/keystore.proto
	# generate typescript bindings (keystore)
	protoc \
		--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--ts_out=service=grpc:ts \
		--js_out=import_style=commonjs,binary:ts \
		--grpc_out=ts \
		pb/keystore.proto
	# generate java bindings (keystore)
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pb/keystore.proto

gen-docs:
		# generate documentation
	protoc \
		-I=pb \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--doc_out=doc \
		--doc_opt=markdown,PROTO.md \
		pb/*.proto