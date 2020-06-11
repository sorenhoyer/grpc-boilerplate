#!/bin/bash
BASEDIR=$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")
cd "${BASEDIR}"

PROTOC_GEN_TS_PATH="${BASEDIR}node_modules/.bin/protoc-gen-ts.cmd"
GRPC_TOOLS_NODE_PROTOC_PLUGIN="${BASEDIR}node_modules/.bin/grpc_tools_node_protoc_plugin.cmd"
GRPC_TOOLS_NODE_PROTOC="${BASEDIR}node_modules/.bin/grpc_tools_node_protoc.cmd"

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

# JavaScript code generating
${GRPC_TOOLS_NODE_PROTOC} \
  --js_out=import_style=commonjs,binary:${PROTO_DEST} \
  --grpc_out=${PROTO_DEST} \
  --plugin=protoc-gen-grpc=${GRPC_TOOLS_NODE_PROTOC_PLUGIN} \
  -I ${BASEDIR}proto \
  ${BASEDIR}proto/*.proto

# TypeScript code generation
${GRPC_TOOLS_NODE_PROTOC} \
  --plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
  --ts_out=${PROTO_DEST} \
  -I ${BASEDIR}proto \
  ${BASEDIR}proto/*.proto
