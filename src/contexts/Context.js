import { createContext } from 'react';

const Context = createContext({
  login: false,
  setLogin: () => {},
  token: null,
  setToken: () => {},
  user: {},
  setUser: () => {},
});

export default Context;
