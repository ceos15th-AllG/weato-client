/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState, useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import LevelProfile from '@common/LevelProfile';
import Modal from '@common/Modal';
import SearchModal from '@search/SearchModal';

import { Headline1, Subhead3, Subhead4 } from '@styles/FontStyle';
import { main, gray04, gray05, text_black, text_white } from '@styles/Colors';

import logo_horizontal from '@public/logo_horizontal.png';
import icon_search from '@public/icon_search.png';
import default_profile from '@public/topnav/default_profile.png';

const NavbarLayout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0px 300px;

  width: 100%;
  height: 100px;

  background-color: white;

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.07);
`;

const NavbarExtendedLayout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;

  display: flex;
  flex-direction: column;

  width: 100%;

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.07);
`;

const Row = styled.div`
  width: 100%;
  height: ${({ visible }) => (!visible ? `0px` : `100px`)};

  transition: height 0.6s ease;

  display: flex;
  justify-content: ${({ centered }) =>
    !centered ? `space-between` : `center`};
  background-color: ${({ centered }) => (!centered ? `white` : main)};
  padding: ${({ centered }) => (!centered ? `0px 300px` : 0)};
  align-items: center;

  .top-alert {
    ${Headline1}
    color : ${text_white};
  }
`;

const NavbarCenterLayout = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;

  display: flex;

  justify-content: center;
  align-items: center;

  padding: 0px 300px;

  width: 100%;
  height: 100px;

  background-color: white;

  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.07);
`;

const NavbarContent = styled.ul`
  height: 100%;

  display: flex;
  align-items: center;

  padding: 0px;
`;

const NavbarItem = styled.li`
  width: 92px;
  height: 100%;

  padding-top: 5px;

  ${Subhead4}

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 5px solid
    ${(props) =>
      `${props.currentPath.startsWith(props.menu) ? main : 'transparent'}`};
  color: ${(props) =>
    `${props.currentPath.startsWith(props.menu) ? main : text_black}`};

  transition: border-bottom 0.3s ease;
  transition: color 0.3s ease;
`;

const NavbarRightGroup = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRightGroupItem = styled.div`
  display: flex;
  align-items: center;

  margin-right: 64px;

  color: ${gray04};

  a {
    display: flex;
    align-items: center;
  }
`;

const ProfileBox = styled.div`
  margin-right: 12px;
`;

const TopNav = () => {
  const router = useRouter();
  const { login, user } = useContext(Context);

  const [modalActive, setModalActive] = useState(false);

  const onClickModalOn = () => {
    setModalActive(true);
  };

  if (router.pathname.startsWith(`/signup`)) {
    return (
      <NavbarCenterLayout>
        <Link href="/">
          <a>
            <Image src={logo_horizontal} width={239.5} height={58} alt="" />
          </a>
        </Link>
      </NavbarCenterLayout>
    );
  }

  return (
    <>
      <NavbarExtendedLayout>
        <Row centered visible={router.asPath === `/`}>
          <span className="top-alert">
            {`화면 크기 1920px에 최적화 되어 있습니다 :)`}
          </span>
        </Row>
        <Row visible={true}>
          <NavbarContent>
            <Link href="/">
              <a>
                <Image src={logo_horizontal} width={239.5} height={58} alt="" />
              </a>
            </Link>
            <NavbarItem
              menu={'/newsletter'}
              currentPath={router.pathname}
              css={css`
                margin-left: 95px;
              `}
            >
              <Link href="/newsletter">
                <a>뉴스레터</a>
              </Link>
            </NavbarItem>
            <NavbarItem
              menu={'/community'}
              currentPath={router.pathname}
              css={css`
                margin-left: 130px;
              `}
            >
              <Link href="/community">
                <a>커뮤니티</a>
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarRightGroup>
            {!login ? (
              <NavbarRightGroupItem css={Subhead3}>
                <Link href="/login">
                  <a>회원가입 / 로그인</a>
                </Link>
              </NavbarRightGroupItem>
            ) : (
              <NavbarRightGroupItem css={Subhead3}>
                <Link href="/mypage">
                  <a>
                    <ProfileBox>
                      <LevelProfile level={user.level} width={38} />
                    </ProfileBox>
                    <span className="profile-text">{user.name} 님</span>
                  </a>
                </Link>
              </NavbarRightGroupItem>
            )}

            <div onClick={onClickModalOn}>
              <Image src={icon_search} width="34" height="35.02" alt="" />
            </div>
          </NavbarRightGroup>
        </Row>
      </NavbarExtendedLayout>

      <Modal active={modalActive}>
        <SearchModal setIsActive={setModalActive} router={router} />
      </Modal>
    </>
  );
};

export default TopNav;
