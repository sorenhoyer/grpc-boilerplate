// package: fooService
// file: foo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as foo_pb from "./foo_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IFooServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createFoos: IFooServiceService_ICreateFoos;
    getFoo: IFooServiceService_IGetFoo;
    listFoos: IFooServiceService_IListFoos;
}

interface IFooServiceService_ICreateFoos extends grpc.MethodDefinition<foo_pb.Foo, google_protobuf_empty_pb.Empty> {
    path: string; // "/fooService.FooService/CreateFoos"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<foo_pb.Foo>;
    requestDeserialize: grpc.deserialize<foo_pb.Foo>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFooServiceService_IGetFoo extends grpc.MethodDefinition<foo_pb.GetFooRequest, foo_pb.Foo> {
    path: string; // "/fooService.FooService/GetFoo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<foo_pb.GetFooRequest>;
    requestDeserialize: grpc.deserialize<foo_pb.GetFooRequest>;
    responseSerialize: grpc.serialize<foo_pb.Foo>;
    responseDeserialize: grpc.deserialize<foo_pb.Foo>;
}
interface IFooServiceService_IListFoos extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, foo_pb.ListFoosResponse> {
    path: string; // "/fooService.FooService/ListFoos"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<foo_pb.ListFoosResponse>;
    responseDeserialize: grpc.deserialize<foo_pb.ListFoosResponse>;
}

export const FooServiceService: IFooServiceService;

export interface IFooServiceServer {
    createFoos: grpc.handleClientStreamingCall<foo_pb.Foo, google_protobuf_empty_pb.Empty>;
    getFoo: grpc.handleUnaryCall<foo_pb.GetFooRequest, foo_pb.Foo>;
    listFoos: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, foo_pb.ListFoosResponse>;
}

export interface IFooServiceClient {
    createFoos(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foo_pb.Foo>;
    createFoos(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foo_pb.Foo>;
    createFoos(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foo_pb.Foo>;
    createFoos(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foo_pb.Foo>;
    getFoo(request: foo_pb.GetFooRequest, callback: (error: grpc.ServiceError | null, response: foo_pb.Foo) => void): grpc.ClientUnaryCall;
    getFoo(request: foo_pb.GetFooRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: foo_pb.Foo) => void): grpc.ClientUnaryCall;
    getFoo(request: foo_pb.GetFooRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: foo_pb.Foo) => void): grpc.ClientUnaryCall;
    listFoos(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: foo_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
    listFoos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: foo_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
    listFoos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: foo_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
}

export class FooServiceClient extends grpc.Client implements IFooServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createFoos(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foo_pb.Foo>;
    public createFoos(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foo_pb.Foo>;
    public createFoos(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foo_pb.Foo>;
    public createFoos(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foo_pb.Foo>;
    public getFoo(request: foo_pb.GetFooRequest, callback: (error: grpc.ServiceError | null, response: foo_pb.Foo) => void): grpc.ClientUnaryCall;
    public getFoo(request: foo_pb.GetFooRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: foo_pb.Foo) => void): grpc.ClientUnaryCall;
    public getFoo(request: foo_pb.GetFooRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: foo_pb.Foo) => void): grpc.ClientUnaryCall;
    public listFoos(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: foo_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
    public listFoos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: foo_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
    public listFoos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: foo_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
}
