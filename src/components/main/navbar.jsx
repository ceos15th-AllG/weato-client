/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';
import Link from 'next/link';

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

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.07);
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
        <Link href="/">
          <a>
            <Image src={logo_horizontal} width={239.5} height={58} />
          </a>
        </Link>
        <li
          css={[
            Subhead4,
            css`
              margin-left: 104.49px;
            `,
          ]}
        >
          <Link href="/newsletter">
            <a>뉴스레터</a>
          </Link>
        </li>
        <li
          css={[
            Subhead4,
            css`
              margin-left: 140px;
            `,
          ]}
        >
          <Link href="/community">
            <a>커뮤니티</a>
          </Link>
        </li>
        <li
          css={[
            Subhead4,
            css`
              margin-left: 140px;
            `,
          ]}
        >
          <Link href="/componentsample">
            <a>테스트</a>
          </Link>
        </li>
      </NavbarContent>

      <NavbarRightGroup>
        <NavbarRightGroupItem css={Subhead3}>
          <Link href="/login">
            <a>회원가입 / 로그인</a>
          </Link>
        </NavbarRightGroupItem>
        <Link href="/search">
          <a>
            <Image src={icon_search} width="28" height="28.84" />
          </a>
        </Link>
      </NavbarRightGroup>
    </NavbarLayout>
  );
}

export default Navbar;
