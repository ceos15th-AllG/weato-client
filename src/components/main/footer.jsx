/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

import { Body1, Body2 } from '../../../styles/FontStyle';
import { gray02, gray05, text_black } from '../../../styles/Colors';

import Image from 'next/image';

import Logo from '../common/Logo';

import icon_instagram from '../../../public/icon_instagram.png';
import icon_twitter from '../../../public/icon_twitter.png';
import icon_facebook from '../../../public/icon_facebook.png';

const FooterLayout = styled.footer`
  height: 160px;

  padding: 0px 224px;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid ${gray02};
`;

const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterCowDogList = styled.section`
  display: flex;
  flex-direction: column;
`;

const FooterCowDog = styled.ul`
  color: ${text_black};
  padding: 0;

  display: flex;
  padding-top: 20px;
`;

const FooterCowDogItem = styled.li`
  color: ${text_black};
  margin-right: 10px;
`;

const FooterCEOText = styled.article`
  display: flex;

  margin-top: 4px;
  color: ${gray05};
`;

const FooterCEOMail = styled.div`
  margin-right: 35px;
`;

const FooterContactBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  margin-bottom: 32px;
`;

const FooterIconLayout = styled.div`
  margin-left: 12px;
`;

function Footer() {
  return (
    <FooterLayout>
      <FooterInfoBox>
        <div>
          <Logo />
        </div>
        <FooterCowDogList>
          <FooterCowDog>
            <FooterCowDogItem css={Body2}>위아토 소개</FooterCowDogItem>
            <FooterCowDogItem css={Body2}>|</FooterCowDogItem>
            <FooterCowDogItem css={Body2}>제휴제안</FooterCowDogItem>
            <FooterCowDogItem css={Body2}>|</FooterCowDogItem>
            <FooterCowDogItem css={Body2}>이용약관</FooterCowDogItem>
            <FooterCowDogItem css={Body2}>|</FooterCowDogItem>
            <FooterCowDogItem css={Body2}>FAQ</FooterCowDogItem>
          </FooterCowDog>
          <FooterCEOText css={Body1}>
            <FooterCEOMail>대표 박재민</FooterCEOMail>
            <FooterCEOMail>Email | qujaemwin@gmail.com</FooterCEOMail>
          </FooterCEOText>
        </FooterCowDogList>
      </FooterInfoBox>

      <FooterContactBox>
        <FooterIconLayout>
          <Image src={icon_instagram} width="24" height="24" />
        </FooterIconLayout>
        <FooterIconLayout>
          <Image src={icon_twitter} width="24" height="24" />
        </FooterIconLayout>
        <FooterIconLayout>
          <Image src={icon_facebook} width="24" height="24" />
        </FooterIconLayout>
      </FooterContactBox>
    </FooterLayout>
  );
}

export default Footer;
