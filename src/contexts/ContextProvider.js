import { useState, useEffect } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const setToken = (newToken) => {
    setState((prevState) => ({
      ...prevState,
      token: newToken,
    }));
    document.cookie = `access_token=${newToken}; path=/`;
  };
  const setUser = async (newUser) => {
    setState((prevState) => ({
      ...prevState,
      user: newUser,
    }));
    document.cookie = `id=${newUser.id}; path=/`;
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

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('state'))) {
      setState(JSON.parse(localStorage.getItem('state')));
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem('state', JSON.stringify(state));
    }
  }, [state]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default ContextProvider;
