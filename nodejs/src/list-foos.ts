import db from './db';
import { Foo } from './proto/foo_pb';

export default (): Foo[] => {
  const foos = db.foos as Foo.AsObject[];

  return foos.map((f) => {
    const foo = new Foo();

    foo.setId(f.id);

    foo.setName(f.name);

    return foo;
  });
};
