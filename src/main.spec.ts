import { toBeEither } from '@relmify/jest-fp-ts';

import { User } from './main';

expect.extend({ toBeEither });

test('user', () => {
  const user = {};

  const either = User.decode(user);

  expect(either).toBeEither();
});
