// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var foo_pb = require('./foo_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_fooService_Foo(arg) {
  if (!(arg instanceof foo_pb.Foo)) {
    throw new Error('Expected argument of type fooService.Foo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fooService_Foo(buffer_arg) {
  return foo_pb.Foo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fooService_GetFooRequest(arg) {
  if (!(arg instanceof foo_pb.GetFooRequest)) {
    throw new Error('Expected argument of type fooService.GetFooRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fooService_GetFooRequest(buffer_arg) {
  return foo_pb.GetFooRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fooService_ListFoosResponse(arg) {
  if (!(arg instanceof foo_pb.ListFoosResponse)) {
    throw new Error('Expected argument of type fooService.ListFoosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fooService_ListFoosResponse(buffer_arg) {
  return foo_pb.ListFoosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var FooServiceService = exports.FooServiceService = {
  createFoos: {
    path: '/fooService.FooService/CreateFoos',
    requestStream: true,
    responseStream: false,
    requestType: foo_pb.Foo,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_fooService_Foo,
    requestDeserialize: deserialize_fooService_Foo,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getFoo: {
    path: '/fooService.FooService/GetFoo',
    requestStream: false,
    responseStream: false,
    requestType: foo_pb.GetFooRequest,
    responseType: foo_pb.Foo,
    requestSerialize: serialize_fooService_GetFooRequest,
    requestDeserialize: deserialize_fooService_GetFooRequest,
    responseSerialize: serialize_fooService_Foo,
    responseDeserialize: deserialize_fooService_Foo,
  },
  listFoos: {
    path: '/fooService.FooService/ListFoos',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: foo_pb.ListFoosResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_fooService_ListFoosResponse,
    responseDeserialize: deserialize_fooService_ListFoosResponse,
  },
};

exports.FooServiceClient = grpc.makeGenericClientConstructor(FooServiceService);
