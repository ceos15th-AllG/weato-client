import styled from '@emotion/styled';

import { useEffect, useContext } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

import Context from '@contexts/Context';

import { main } from '@styles/Colors';

const Layout = styled.div`
  height: calc(100vh - 340px);

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 36px;
    font-weight: 700;
    color: ${main};
  }
`;

const Auth = (props) => {
  const router = useRouter();
  const { setToken, setUser, setLogin } = useContext(Context);

  const requestLogin = async (token) => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setToken(token);
      setUser(response.data);
      setLogin(true);
      router.push(`/signup?token=${token}`);
    } catch (error) {
      console.log(error);
      alert('잘못된 로그인 정보입니다.');
      setToken(null);
      setUser({});
      setLogin(false);
      router.push(`/login`);
    }
  };

  useEffect(() => {
    requestLogin(props.token);
  }, []);

  return (
    <Layout>
      <span>회원가입 페이지로 연결 중입니다...</span>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query;

  if (Object.keys(query).length === 0 || !query.hasOwnProperty('token')) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {
      token: query.token,
    },
  };
};

export default Auth;
