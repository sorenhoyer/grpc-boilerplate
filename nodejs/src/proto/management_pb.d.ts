// package: foo
// file: foo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Foo extends jspb.Message { 
    getId(): string;
    setId(value: string): Foo;

    getName(): string;
    setName(value: string): Foo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Foo.AsObject;
    static toObject(includeInstance: boolean, msg: Foo): Foo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Foo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Foo;
    static deserializeBinaryFromReader(message: Foo, reader: jspb.BinaryReader): Foo;
}

export namespace Foo {
    export type AsObject = {
        id: string,
        name: string,
    }
}

export class GetFooRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetFooRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFooRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFooRequest): GetFooRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFooRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFooRequest;
    static deserializeBinaryFromReader(message: GetFooRequest, reader: jspb.BinaryReader): GetFooRequest;
}

export namespace GetFooRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListFoosResponse extends jspb.Message { 
    clearFoosList(): void;
    getFoosList(): Array<Foo>;
    setFoosList(value: Array<Foo>): ListFoosResponse;
    addFoos(value?: Foo, index?: number): Foo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFoosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFoosResponse): ListFoosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFoosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFoosResponse;
    static deserializeBinaryFromReader(message: ListFoosResponse, reader: jspb.BinaryReader): ListFoosResponse;
}

export namespace ListFoosResponse {
    export type AsObject = {
        foosList: Array<Foo.AsObject>,
    }
}
