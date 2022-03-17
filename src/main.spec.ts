import { User } from './main';

test('user', () => {
  const user = {};

  const either = User.decode(user);

  expect(either).toBeEither();
});
