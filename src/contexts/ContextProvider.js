import { useState } from 'react';
import Context from './Context';

import axios from 'axios';

const ContextProvider = ({ children }) => {
  const setToken = (newToken) => {
    setState((prevState) => ({
      ...prevState,
      token: newToken,
    }));
    localStorage.setItem('access_token', newToken);
  };
  const setUser = async (newUser) => {
    setState((prevState) => ({
      ...prevState,
      user: newUser,
    }));
  };
  const setLogin = (newLogin) => {
    setState((prevState) => ({
      ...prevState,
      login: newLogin,
    }));
  };
  const initialState = {
    token: null,
    setToken: setToken,
    user: {},
    setUser: setUser,
    login: false,
    setLogin: setLogin,
  };

  const [state, setState] = useState(initialState);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default ContextProvider;
