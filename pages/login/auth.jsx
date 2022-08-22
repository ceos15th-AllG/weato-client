// import { loginState } from 'states';

const Auth = (props) => {
  const { token } = props;

  if (!token) {
    return <h1>토큰 에러...</h1>;
  }

  return (
    <>
      <h1>새롭게 얻은 토큰 정보</h1>
      <span>{token}</span>
      <hr />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query;

  if (Object.keys(query).length === 0 || !query.hasOwnProperty('token')) {
    return {
      props: {
        token: null,
      },
    };
  }

  // const [login, setLogin] = useRecoilState(loginState);

  // return {
  //   // redirect: {
  //   //   destination: '/signup',
  //   //   permanent: false,
  //   // },
  //   props: {},
  // };

  return {
    props: {
      token: query.token,
    },
  };
};

export default Auth;
