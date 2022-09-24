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
  console.log(props);
  const router = useRouter();
  const { setToken, setUser, setLogin } = useContext(Context);

  const requestLogin = async () => {
    if (props.newMember) {
      router.replace(`/signup?token=${props.token}`);
    } else {
      setToken(props.token);
      setUser(props.userData);
      setLogin(true);
      router.replace(`/`);
    }
  };

  useEffect(() => {
    requestLogin();
  }, []);

  return (
    <Layout>
      <span>네이버 소셜 로그인 연결 중입니다...</span>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query;

  try {
    const response = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/members`,
      headers: {
        Authorization: `Bearer ${query.token}`,
      },
    });

    // 이미 회원인 경우
    if (!response.data.newMemberChecker) {
      return {
        props: {
          token: query.token,
          newMember: false,
          userData: response.data,
        },
      };
    }
    // 새로 가입해야 하는 경우
    else {
      return {
        props: {
          token: query.token,
          newMember: true,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
    props: {},
  };
};

export default Auth;
