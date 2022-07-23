/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import Image from 'next/image';

import logo from '../../../public/logo.png';
import icon_instagram from '../../../public/icon_instagram.png';
import icon_twitter from '../../../public/icon_twitter.png';
import icon_facebook from '../../../public/icon_facebook.png';

const FooterStyle = css`
  height: 120px;

  margin: 0px 300px;

  display: flex;
  justify-content: space-between;

  background-color: red;
`;

const FooterLeftContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const FooterLeftTopContainerStyle = css``;

const FooterLeftBottomContainerStyle = css``;

const FooterRightContainerStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  margin-bottom: 24px;

  background-color: green;
`;

const FooterRightContainerIconStyle = css`
  margin-left: 12px;
`;

function Footer() {
  return (
    <footer css={FooterStyle}>
      <div css={FooterLeftContainerStyle}>
        <div css={FooterLeftTopContainerStyle}>
          <Image src={logo} width="128" height="30" />
        </div>
        <div css={FooterLeftBottomContainerStyle}>
          <div>위아토 소개 | 제휴제안 | 이용약관 | FAQ</div>
          <div>대표 박재민 Email | qujaemwin@gmail.com</div>
        </div>
      </div>
      <div css={FooterRightContainerStyle}>
        <div css={FooterRightContainerIconStyle}>
          <Image src={icon_instagram} width="24" height="24" />
        </div>
        <div css={FooterRightContainerIconStyle}>
          <Image src={icon_twitter} width="24" height="24" />
        </div>
        <div css={FooterRightContainerIconStyle}>
          <Image src={icon_facebook} width="24" height="24" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
