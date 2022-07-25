/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';

import banner_login from '../public/banner_login.png';
import Button from '../src/components/common/button';

import { main, text_black } from '../styles/Colors';

import { Display1, Headline2 } from '../styles/FontStyle';

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

  border-radius: 4px;

  background-color: #03c75a;
  color: white;
`;

const BASE_URL =
  'http://ec2-3-37-94-86.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/naver';

export default function Login() {
  return (
    <Layout>
      <Row>
        <Image src={banner_login} width={872} height={388} />
        <Column>
          <TopText>
            아토피와의 긴 여정,
            <br />
            이제는 위아토와 함께해요!
          </TopText>

          <MidText>회원가입 | 로그인</MidText>

          <NaverLoginBtn onClick={() => console.log()} />
        </Column>
      </Row>
    </Layout>
  );
}
