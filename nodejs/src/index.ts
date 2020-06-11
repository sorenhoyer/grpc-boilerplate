import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { sendUnaryData, Server, ServerCredentials, ServerReadableStream, ServerUnaryCall } from 'grpc';
import createFoo from './create-foo.';
import getFoo from './get-foo';
import listFoos from './list-foos';
import { Foo, GetFooRequest, ListFoosResponse } from './proto/foos_pb';
import { IFoosServer, FoosService } from './proto/foos_grpc_pb';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5000;

class FoosServer implements IFoosServer {
  createFoos(call: ServerReadableStream<Foo>, callback: sendUnaryData<Empty>): void {
    console.log(`${new Date().toISOString()}    createFoos`);
    call.on('data', (foo: Foo) => {
      createFoo(foo);
    });
    call.on('end', () => callback(null, new Empty()));
  }

  getFoo(call: ServerUnaryCall<GetFooRequest>, callback: sendUnaryData<Foo>): void {
    console.log(`${new Date().toISOString()}    getFoo`);

    const foo = getFoo(call.request.getId());

    if (!foo) return;

    callback(null, foo);
  }

  listFoos(call: ServerUnaryCall<Empty>, callback: sendUnaryData<ListFoosResponse>): void {
    console.log(`${new Date().toISOString()}    listFoos`);

    const response = new ListFoosResponse();

    const foos = listFoos();

    if (!foos) return;

    response.setFoosList(foos);

    callback(null, response);
  }
}

function serve(): void {
  const server = new Server();

  server.addService<IFoosServer>(FoosService, new FoosServer());

  // console.log(`Listening on ${process.env.PORT}`);

  // server.bind(`${HOST}:${PORT}`, ServerCredentials.createInsecure());

  server.bindAsync(`${HOST}:${PORT}`, ServerCredentials.createInsecure(), (err, port) => {
    if (err != null) return console.error(err);

    console.log(`Listening on ${HOST}:${port}`);
  });
  server.start();
}

serve();
