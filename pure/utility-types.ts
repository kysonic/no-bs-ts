interface MyUser {
  name: string;
  id: string;
  email?: string;
}

type RequiredMyUser = Required<MyUser>;
type PickMyUser = Pick<MyUser, 'email' | 'id'>;
type OmitIdMyUser = Pick<MyUser, 'id'>;
type UserCollection = Record<MyUser['id'], OmitIdMyUser>;

const merge = (user: MyUser, overrides: Partial<MyUser>): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

const jack: MyUser = {
  name: 'Jack',
  id: 'a',
  email: 'jackharrington@gmail.com',
};
const anton: MyUser = {
  name: 'Anton',
  id: 'c',
  email: 'anton@gmail.com',
};
console.log(
  merge(jack, {
    id: 'b',
  }),
);

function mapById(users: MyUser[]): UserCollection {
  return users.reduce((a, v) => {
    const { id, ...user } = v;
    return {
      ...a,
      [v.id]: user,
    };
  }, {});
}

const users = [jack, anton];

console.log(mapById(users));
