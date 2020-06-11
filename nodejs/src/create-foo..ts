import db from './db';
import { Foo } from './proto/foo_pb';

export default (foo: Foo): void => {
  const foos = db.foos as Foo.AsObject[];

  foo.setId(`${foos.length + 1}`);

  foos.push(foo.toObject());
};
