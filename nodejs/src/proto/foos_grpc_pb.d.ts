// package: foos
// file: foos.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as foos_pb from "./foos_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IFoosService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createFoos: IFoosService_ICreateFoos;
    getFoo: IFoosService_IGetFoo;
    listFoos: IFoosService_IListFoos;
}

interface IFoosService_ICreateFoos extends grpc.MethodDefinition<foos_pb.Foo, google_protobuf_empty_pb.Empty> {
    path: string; // "/foos.Foos/CreateFoos"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<foos_pb.Foo>;
    requestDeserialize: grpc.deserialize<foos_pb.Foo>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IFoosService_IGetFoo extends grpc.MethodDefinition<foos_pb.GetFooRequest, foos_pb.Foo> {
    path: string; // "/foos.Foos/GetFoo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<foos_pb.GetFooRequest>;
    requestDeserialize: grpc.deserialize<foos_pb.GetFooRequest>;
    responseSerialize: grpc.serialize<foos_pb.Foo>;
    responseDeserialize: grpc.deserialize<foos_pb.Foo>;
}
interface IFoosService_IListFoos extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, foos_pb.ListFoosResponse> {
    path: string; // "/foos.Foos/ListFoos"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<foos_pb.ListFoosResponse>;
    responseDeserialize: grpc.deserialize<foos_pb.ListFoosResponse>;
}

export const FoosService: IFoosService;

export interface IFoosServer {
    createFoos: grpc.handleClientStreamingCall<foos_pb.Foo, google_protobuf_empty_pb.Empty>;
    getFoo: grpc.handleUnaryCall<foos_pb.GetFooRequest, foos_pb.Foo>;
    listFoos: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, foos_pb.ListFoosResponse>;
}

export interface IFoosClient {
    createFoos(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foos_pb.Foo>;
    createFoos(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foos_pb.Foo>;
    createFoos(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foos_pb.Foo>;
    createFoos(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foos_pb.Foo>;
    getFoo(request: foos_pb.GetFooRequest, callback: (error: grpc.ServiceError | null, response: foos_pb.Foo) => void): grpc.ClientUnaryCall;
    getFoo(request: foos_pb.GetFooRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: foos_pb.Foo) => void): grpc.ClientUnaryCall;
    getFoo(request: foos_pb.GetFooRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: foos_pb.Foo) => void): grpc.ClientUnaryCall;
    listFoos(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: foos_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
    listFoos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: foos_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
    listFoos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: foos_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
}

export class FoosClient extends grpc.Client implements IFoosClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createFoos(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foos_pb.Foo>;
    public createFoos(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foos_pb.Foo>;
    public createFoos(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foos_pb.Foo>;
    public createFoos(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<foos_pb.Foo>;
    public getFoo(request: foos_pb.GetFooRequest, callback: (error: grpc.ServiceError | null, response: foos_pb.Foo) => void): grpc.ClientUnaryCall;
    public getFoo(request: foos_pb.GetFooRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: foos_pb.Foo) => void): grpc.ClientUnaryCall;
    public getFoo(request: foos_pb.GetFooRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: foos_pb.Foo) => void): grpc.ClientUnaryCall;
    public listFoos(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: foos_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
    public listFoos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: foos_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
    public listFoos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: foos_pb.ListFoosResponse) => void): grpc.ClientUnaryCall;
}
