import { createContext } from 'react';

const Context = createContext({
  token: null,
  setToken: () => {},
  user: {
    // id: -1,
    // name: '',
    // email: '',
    // gender: '',
    // birthYear: '',
    // createdAT: '',
  },
  login: false,
  setLogin: () => {},
});

export default Context;
