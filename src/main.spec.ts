import { matchers } from '@remlify/jest-fp-ts';

import { User } from './main';

expect.extend(matchers);

test('user', () => {
  const user = {};

  const either = User.decode(user);

  expect(either).toBeEither();
});
