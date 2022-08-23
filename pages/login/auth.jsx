import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { main } from '@styles/Colors';

// import { loginState } from 'states';

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
  const { token } = props;
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('access_token', token);
    console.log(`new access token : `, localStorage.getItem('access_token'));

    router.push(`/signup`);
  }, []);

  return (
    <Layout>
      <span>로그인 정보를 저장 중입니다...</span>
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
