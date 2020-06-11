import db from './db';
import { Foo } from './proto/foo_pb';

export default (id: string): Foo | undefined => {
  const foo = new Foo();
  const foos = db.foos as Foo.AsObject[];
  const f = foos.find((f) => f.id === id);

  if (!f) return;

  foo.setId(f.id);
  foo.setName(f.name);

  return foo;
};
