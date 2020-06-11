// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var foo_pb = require('./foo_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_foo_Foo(arg) {
  if (!(arg instanceof foo_pb.Foo)) {
    throw new Error('Expected argument of type foo.Foo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_foo_Foo(buffer_arg) {
  return foo_pb.Foo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_foo_GetFooRequest(arg) {
  if (!(arg instanceof foo_pb.GetFooRequest)) {
    throw new Error('Expected argument of type foo.GetFooRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_foo_GetFooRequest(buffer_arg) {
  return foo_pb.GetFooRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_foo_ListFoosResponse(arg) {
  if (!(arg instanceof foo_pb.ListFoosResponse)) {
    throw new Error('Expected argument of type foo.ListFoosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_foo_ListFoosResponse(buffer_arg) {
  return foo_pb.ListFoosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FooService = exports.FooService = {
  createFoos: {
    path: '/foo.Foo/CreateFoos',
    requestStream: true,
    responseStream: false,
    requestType: foo_pb.Foo,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_foo_Foo,
    requestDeserialize: deserialize_foo_Foo,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getFoo: {
    path: '/foo.Foo/GetFoo',
    requestStream: false,
    responseStream: false,
    requestType: foo_pb.GetFooRequest,
    responseType: foo_pb.Foo,
    requestSerialize: serialize_foo_GetFooRequest,
    requestDeserialize: deserialize_foo_GetFooRequest,
    responseSerialize: serialize_foo_Foo,
    responseDeserialize: deserialize_foo_Foo,
  },
  listFoos: {
    path: '/foo.Foo/ListFoos',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: foo_pb.ListFoosResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_foo_ListFoosResponse,
    responseDeserialize: deserialize_foo_ListFoosResponse,
  },
};

exports.FooClient = grpc.makeGenericClientConstructor(FooService);
