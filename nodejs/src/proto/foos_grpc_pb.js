// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var foos_pb = require('./foos_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_foos_Foo(arg) {
  if (!(arg instanceof foos_pb.Foo)) {
    throw new Error('Expected argument of type foos.Foo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_foos_Foo(buffer_arg) {
  return foos_pb.Foo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_foos_GetFooRequest(arg) {
  if (!(arg instanceof foos_pb.GetFooRequest)) {
    throw new Error('Expected argument of type foos.GetFooRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_foos_GetFooRequest(buffer_arg) {
  return foos_pb.GetFooRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_foos_ListFoosResponse(arg) {
  if (!(arg instanceof foos_pb.ListFoosResponse)) {
    throw new Error('Expected argument of type foos.ListFoosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_foos_ListFoosResponse(buffer_arg) {
  return foos_pb.ListFoosResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var FoosService = exports.FoosService = {
  createFoos: {
    path: '/foos.Foos/CreateFoos',
    requestStream: true,
    responseStream: false,
    requestType: foos_pb.Foo,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_foos_Foo,
    requestDeserialize: deserialize_foos_Foo,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getFoo: {
    path: '/foos.Foos/GetFoo',
    requestStream: false,
    responseStream: false,
    requestType: foos_pb.GetFooRequest,
    responseType: foos_pb.Foo,
    requestSerialize: serialize_foos_GetFooRequest,
    requestDeserialize: deserialize_foos_GetFooRequest,
    responseSerialize: serialize_foos_Foo,
    responseDeserialize: deserialize_foos_Foo,
  },
  listFoos: {
    path: '/foos.Foos/ListFoos',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: foos_pb.ListFoosResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_foos_ListFoosResponse,
    responseDeserialize: deserialize_foos_ListFoosResponse,
  },
};

exports.FoosClient = grpc.makeGenericClientConstructor(FoosService);
