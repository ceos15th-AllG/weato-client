/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';

import { Subhead3, Subhead4 } from '../../../styles/FontStyle';
import { gray04 } from '../../../styles/Colors';

import icon_search from '../../../public/icon_search.png';
import logo_horizontal from '../../../public/logo_horizontal.png';

const NavbarLayout = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0px 300px;

  height: 100px;
`;

const NavbarContent = styled.ul`
  display: flex;
  align-items: center;

  padding: 0px;
`;

const NavbarRightGroup = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRightGroupItem = styled.div`
  margin-right: 64px;

  color: ${gray04};
`;

function Navbar() {
  return (
    <NavbarLayout>
      <NavbarContent>
        <Image src={logo_horizontal} width={239.5} height={58} />
        <li
          css={[
            Subhead4,
            css`
              margin-left: 104.49px;
            `,
          ]}
        >
          뉴스레터
        </li>
        <li
          css={[
            Subhead4,
            css`
              margin-left: 140px;
            `,
          ]}
        >
          커뮤니티
        </li>
      </NavbarContent>

      <NavbarRightGroup>
        <NavbarRightGroupItem css={Subhead3}>
          회원가입 / 로그인
        </NavbarRightGroupItem>
        <Image src={icon_search} width="28" height="28.84" />
      </NavbarRightGroup>
    </NavbarLayout>
  );
}

export default Navbar;
