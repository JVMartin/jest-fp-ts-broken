import * as t from 'io-ts';

export const User = t.type({
  name: t.string,
});
export type User = t.TypeOf<typeof User>;
