import styled from '@emotion/styled';

import { Subhead3, Subhead4 } from '../../../styles/FontStyle';
import { gray04 } from '../../../styles/Colors';

import Logo from '../common/logo';

import Image from 'next/image';
import icon_search from '../../../public/icon_search.png';

const NavbarLayout = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0px 224px;

  height: 70px;
`;

const NavbarContent = styled.ul`
  display: flex;
  align-items: center;

  padding: 0px;
`;

const NavbarItem = styled.li`
  margin-left: 112px;
`;

const NavbarRightGroup = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRightGroupItem = styled.div`
  margin-right: 32px;

  color: ${gray04};
`;

function Navbar() {
  return (
    <NavbarLayout>
      <NavbarContent>
        <Logo />
        <NavbarItem css={Subhead4}>뉴스레터</NavbarItem>
        <NavbarItem css={Subhead4}>커뮤니티</NavbarItem>
      </NavbarContent>

      <NavbarRightGroup>
        <NavbarRightGroupItem css={Subhead3}>
          회원가입 / 로그인
        </NavbarRightGroupItem>
        <Image src={icon_search} width="28" height="28" />
      </NavbarRightGroup>
    </NavbarLayout>
  );
}

export default Navbar;
