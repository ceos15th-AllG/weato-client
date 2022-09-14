import { useState, useEffect } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const setLogin = (newLogin) => {
    setState((prevState) => ({
      ...prevState,
      login: newLogin,
    }));
  };
  const setToken = (newToken) => {
    setState((prevState) => ({
      ...prevState,
      token: newToken,
    }));
    document.cookie = `access_token=${newToken}; path=/`;
  };
  const setUser = (newUser) => {
    setState((prevState) => ({
      ...prevState,
      user: newUser,
    }));
    document.cookie = `id=${newUser.id}; path=/`;
  };
  const setLogOut = () => {
    // setState(initialState);
    // localStorage.clear();
    // document.cookie = `access_token=no_exist; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    // document.cookie = `id=no_exist; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    alert('로그아웃');
  };
  const initialState = {
    login: false,
    setLogin: setLogin,
    token: null,
    setToken: setToken,
    user: {},
    setUser: setUser,
    setLogOut: setLogOut,
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
