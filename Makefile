.PHONY: proto
proto: proto-gen tidy

# -I are the import paths, because we're using some plugins, we need to import the gogo protobuf helpers
.PHONY: proto-gen
proto-gen:
	# generate golang bindings (dag)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		dag.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (dag)
	python3 -m grpc_tools.protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		dag.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (dag)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--js_out=import_style=commonjs:js \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		dag.proto
	# generate java bindings (dag)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		dag.proto


	# generate golang bindings (file)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		file.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (file)
	python3 -m grpc_tools.protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		file.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (file)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--js_out=import_style=commonjs:js \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		file.proto
	# generate java bindings (file)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		file.proto

	# generate golang bindings (util)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		util.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (util)  no grpc bindings for this so --grpc_python_out is omitted
	python3 -m grpc_tools.protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		util.proto \
		--python_out=py
	# generate js bindings (util)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--js_out=import_style=commonjs:js \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		util.proto
	# generate java bindings (util)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		dag.proto

	# generate golang bindings (node)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		node.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (node)
	python3 -m grpc_tools.protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		node.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (node)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--js_out=import_style=commonjs:js \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		node.proto
	# generate java bindings (node)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		node.proto

	# generate golang bindings (status)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		status.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (status)
	python3 -m grpc_tools.protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		status.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (status)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--js_out=import_style=commonjs:js \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		status.proto
	# generate java bindings (status)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		status.proto

	# generate golang bindings (pubsub)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pubsub.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (pubsub)
	python3 -m grpc_tools.protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		pubsub.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (pubsub)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--js_out=import_style=commonjs:js \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		pubsub.proto
	# generate java bindings (pubsub)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		pubsub.proto

	# generate golang bindings (admin)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		admin.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (admin)
	python3 -m grpc_tools.protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		admin.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (admin)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--js_out=import_style=commonjs:js \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		admin.proto
	# generate java bindings (admin)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		admin.proto

	# generate golang bindings (namesys)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		namesys.proto \
		--gogofaster_out=plugins=grpc:go
	# generate python bindings (namesys)
	python3 -m grpc_tools.protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		namesys.proto \
		--python_out=py \
		--grpc_python_out=py
	# generate js bindings (namesys)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--js_out=import_style=commonjs:js \
		--plugin=protoc-gen-grpc-web=build/protoc-gen-grpc-web \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
		namesys.proto
	# generate java bindings (namesys)
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--plugin=protoc-gen-grpc-java=build/protoc-gen-grpc-java \
  		--grpc-java_out=java \
		namesys.proto

	# generate documentation
	protoc \
		-I=. \
		-I=${GOPATH}/src \
		-I=${GOPATH}/src/github.com/gogo/protobuf/protobuf \
		--doc_out=doc \
		--doc_opt=html,index.html \
		*.proto

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