
const host = 'http://10.2.1.192:8000/api';

export default {
  signUp: () => [host, 'auth/user/register'].join('/'),
  verify: (id) => [host, `auth/user/verify/${id}`].join('/'),
};
