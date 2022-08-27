import { useState } from 'react';
import Context from './Context';

import axios from 'axios';

const ContextProvider = ({ children }) => {
  const initialState = {
    token: 'aa',
    setToken: (token) => {
      setState((prevState) => ({
        ...prevState,
        token: token,
      }));
    },
    user: {},
    login: false,
    setLogin: async (token) => {
      console.log('로그인 시도...');

      try {
        const response = await axios({
          method: 'get',
          url: `https://www.weato.kro.kr/api/members`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setState((prevState) => ({
          ...prevState,
          user: response.data,
          login: true,
        }));
      } catch (error) {
        console.log(error);
      }
    },
  };

  const [state, setState] = useState(initialState);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default ContextProvider;
