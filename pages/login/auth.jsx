// import { loginState } from 'states';

const Auth = () => {
  return <h1>소셜 로그인 시도 중....</h1>;
};

export const getServerSideProps = async (context) => {
  const query = context.query;

  // 토큰 일치하지 않을 시.. -> 로그인 상태 아님
  if (Object.keys(query).length === 0 || !query.hasOwnProperty('token')) {
    return {
      props: {
        login: false,
        token: null,
      },
    };
  }

  // const [login, setLogin] = useRecoilState(loginState);

  return {
    redirect: {
      destination: '/signup',
      permanent: false,
    },
    props: {},
  };

  // return {
  //   props: {
  //     token: query.token,
  //   },
  // };
};

export default Auth;
