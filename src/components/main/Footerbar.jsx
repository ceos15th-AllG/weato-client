/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

import { Body1, Body2 } from '../../../styles/FontStyle';
import { gray02, gray05, text_black } from '../../../styles/Colors';

import Image from 'next/image';

import logo_horizontal from '../../../public/logo_horizontal.png';
import icon_instagram from '../../../public/icon_instagram.png';
import icon_twitter from '../../../public/icon_twitter.png';
import icon_facebook from '../../../public/icon_facebook.png';

const FooterLayout = styled.footer`
  height: 240px;

  padding: 0px 300px;

  display: flex;
  justify-content: space-between;

  border-top: 2px solid ${gray02};
`;

const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-bottom: 41px;
`;

const FooterInfoList = styled.section`
  display: flex;
  flex-direction: column;
`;

const FooterInfo = styled.ul`
  color: ${text_black};
  padding: 0;

  display: flex;
  padding-top: 34px;
`;

const FooterInfoItem = styled.li`
  margin-right: 16px;

  color: ${text_black};
`;

const FooterCEOText = styled.article`
  display: flex;
  margin-top: 12px;

  color: ${gray05};
`;

const FooterCEOMail = styled.div`
  margin-right: 43px;
`;

const FooterContactBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  margin-bottom: 65px;
`;

const FooterIconLayout = styled.div`
  margin-left: 16px;
`;

function FooterBar() {
  return (
    <FooterLayout>
      <FooterInfoBox>
        <div>
          <Image src={logo_horizontal} width={239} height={58} alt="" />
        </div>
        <FooterInfoList>
          <FooterInfo>
            <FooterInfoItem css={Body2}>위아토 소개</FooterInfoItem>
            <FooterInfoItem css={Body2}>|</FooterInfoItem>
            <FooterInfoItem css={Body2}>제휴제안</FooterInfoItem>
            <FooterInfoItem css={Body2}>|</FooterInfoItem>
            <FooterInfoItem css={Body2}>이용약관</FooterInfoItem>
            <FooterInfoItem css={Body2}>|</FooterInfoItem>
            <FooterInfoItem css={Body2}>FAQ</FooterInfoItem>
          </FooterInfo>
          <FooterCEOText css={Body1}>
            <FooterCEOMail>대표 박재민</FooterCEOMail>
            <FooterCEOMail>
              Email | <a href="naver.com">qujaemwin@gmail.com</a>
            </FooterCEOMail>
          </FooterCEOText>
        </FooterInfoList>
      </FooterInfoBox>

      <FooterContactBox>
        <FooterIconLayout>
          <Image src={icon_instagram} width="40" height="40" alt="" />
        </FooterIconLayout>
        <FooterIconLayout>
          <Image src={icon_twitter} width="40" height="40" alt="" />
        </FooterIconLayout>
        <FooterIconLayout>
          <Image src={icon_facebook} width="40" height="40" alt="" />
        </FooterIconLayout>
      </FooterContactBox>
    </FooterLayout>
  );
}

export default FooterBar;
