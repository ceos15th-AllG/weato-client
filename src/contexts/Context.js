import { createContext } from 'react';

const Context = createContext({
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
  login: false,
  setLogin: () => {},
});

export default Context;
