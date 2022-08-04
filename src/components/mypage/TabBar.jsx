/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Link from 'next/link';

import Button from '@common/ButtonContainer';

import { Headline1, Subhead3, Subhead4 } from '@styles/FontStyle';

import { main, gray02, gray05, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 100%;
  height: 88px;

  padding: 0px 300px;

  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid ${gray02};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.span`
  height: 100%;

  padding-top: 10px;

  display: flex;
  align-items: center;

  ${Headline1}

  color: ${gray05};
  border-bottom: 5px solid transparent;
`;

const MenuSelected = styled.span`
  height: 100%;

  padding-top: 10px;

  display: flex;
  align-items: center;

  ${Headline1}

  color: ${main};

  border-bottom: 5px solid ${main};
`;

const InviteCode = styled.span`
  ${Subhead3}

  color : ${gray05};
`;

function TabBar({ selected }) {
  if (selected === 'profile') {
    return (
      <Layout>
        <Row>
          <Box>
            <MenuSelected>
              <Link href="/mypage?tab=profile">
                <a>프로필</a>
              </Link>
            </MenuSelected>
            <Menu
              css={css`
                margin-left: 243px;
              `}
            >
              <Link href="/mypage?tab=bookmarks">
                <a>북마크</a>
              </Link>
            </Menu>
            <Menu
              css={css`
                margin-left: 243px;
              `}
            >
              <Link href="/mypage?tab=community">
                <a>커뮤니티</a>
              </Link>
            </Menu>
          </Box>
        </Row>

        <Box>
          <InviteCode>추천인코드: 0429812</InviteCode>
        </Box>
      </Layout>
    );
  } else if (selected === 'bookmarks') {
    return (
      <Layout>
        <Row>
          <Box>
            <Menu>
              <Link href="/mypage?tab=profile">
                <a>프로필</a>
              </Link>
            </Menu>
            <MenuSelected
              css={css`
                margin-left: 243px;
              `}
            >
              <Link href="/mypage?tab=bookmarks">
                <a>북마크</a>
              </Link>
            </MenuSelected>
            <Menu
              css={css`
                margin-left: 243px;
              `}
            >
              <Link href="/mypage?tab=community">
                <a>커뮤니티</a>
              </Link>
            </Menu>
          </Box>
        </Row>

        <Box>
          <InviteCode>추천인코드: 0429812</InviteCode>
        </Box>
      </Layout>
    );
  } else if (selected === 'community') {
    return (
      <Layout>
        <Row>
          <Box>
            <Menu>
              <Link href="/mypage?tab=profile">
                <a>프로필</a>
              </Link>
            </Menu>
            <Menu
              css={css`
                margin-left: 243px;
              `}
            >
              <Link href="/mypage?tab=bookmarks">
                <a>북마크</a>
              </Link>
            </Menu>
            <MenuSelected
              css={css`
                margin-left: 243px;
              `}
            >
              <Link href="/mypage?tab=community">
                <a>커뮤니티</a>
              </Link>
            </MenuSelected>
          </Box>
        </Row>

        <Box>
          <InviteCode>추천인코드: 0429812</InviteCode>
        </Box>
      </Layout>
    );
  }
}

export default TabBar;
