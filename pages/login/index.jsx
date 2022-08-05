import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import Image from 'next/image';

import banner_login from '@public/banner_login.png';
import icon_naver_n from '@public/icon_naver_n.png';

import { main, text_black } from '@styles/Colors';

import { Display1, Headline2 } from '@styles/FontStyle';

const Layout = styled.div`
  margin: 164px 300px 188px;
`;

const Row = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopText = styled.span`
  ${Headline2};

  color: ${main};
`;

const MidText = styled.span`
  ${Display1};

  margin: 40px 0px;

  color: ${text_black};
`;

const NaverLoginBtn = styled.div`
  width: 315px;
  height: 84px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 52px;

  border-radius: 4px;

  span {
    ${Headline2};

    padding-top: 3px;

    color: white;
  }

  background-color: #03c75a;
`;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import useSWR from 'swr';

function Login(props) {
  const router = useRouter();
  const REDIRECT_URI = `http://localhost:3000/login/auth`;
  const REQUEST_PATH = `http://3.37.94.86/oauth2/authorization/naver?redirect_uri=${REDIRECT_URI}`;

  return (
    <Layout>
      <Row>
        <Image src={banner_login} width={872} height={388} alt="" />
        <Column>
          <TopText>
            아토피와의 긴 여정,
            <br />
            이제는 위아토와 함께해요!
          </TopText>

          <MidText>회원가입 | 로그인</MidText>

          <NaverLoginBtn onClick={() => router.push(REQUEST_PATH)}>
            <Image src={icon_naver_n} width={25.41} height={25.2} />
            <span>네이버 로그인</span>
          </NaverLoginBtn>
        </Column>
      </Row>
    </Layout>
  );
}

export default Login;
