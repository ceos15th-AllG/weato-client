import { createContext } from 'react';

const Context = createContext({
  login: false,
  setLogin: () => {},
  token: null,
  setToken: () => {},
  user: {
    id: -1,
    name: '',
    email: '',
    gender: '',
    birthYear: '',
    createdAT: '',
  },
  setUser: () => {},
});

export default Context;
