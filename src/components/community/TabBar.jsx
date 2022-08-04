/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Link from 'next/link';

import Button from '@common/ButtonContainer';

import { Headline1, Subhead4 } from '@styles/FontStyle';

import { main, gray02, gray05, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  border-bottom: 2px solid ${gray02};
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTextSelected = styled.span`
  ${Headline1}

  margin-top : 5px;
  padding-bottom: 9px;

  color: ${main};

  border-bottom: 4px solid ${main};
`;

const HeaderText = styled.span`
  ${Headline1}

  margin-top : 5px;
  padding-bottom: 9px;

  color: ${gray05};

  border-bottom: 4px solid transparent;
`;

const DropDown = styled.div`
  width: 92px;

  margin-left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Subhead4}

  color : ${text_black};
`;

function TabBar({ selected }) {
  if (selected === 'hot') {
    return (
      <Layout>
        <Box>
          <HeaderTextSelected
            css={css`
              margin-left: 11px;
            `}
          >
            <Link href="/community/hot">
              <a>핫토픽</a>
            </Link>
          </HeaderTextSelected>
          <HeaderText
            css={css`
              margin-left: 123px;
            `}
          >
            <Link href="/community/knowhow">
              <a>나만의 관리법</a>
            </Link>
          </HeaderText>
          <HeaderText
            css={css`
              margin-left: 132px;
            `}
          >
            <Link href="/community/questions">
              <a>질문</a>
            </Link>
          </HeaderText>
        </Box>
        <Box>
          <Button text="글쓰기" btnType="7" />
          <DropDown>
            <span>태그</span>
          </DropDown>
        </Box>
      </Layout>
    );
  } else if (selected === 'knowhow') {
    return (
      <Layout>
        <Box>
          <HeaderText
            css={css`
              margin-left: 11px;
            `}
          >
            <Link href="/community/hot">
              <a>핫토픽</a>
            </Link>
          </HeaderText>
          <HeaderTextSelected
            css={css`
              margin-left: 123px;
            `}
          >
            <Link href="/community/knowhow">
              <a>나만의 관리법</a>
            </Link>
          </HeaderTextSelected>
          <HeaderText
            css={css`
              margin-left: 132px;
            `}
          >
            <Link href="/community/questions">
              <a>질문</a>
            </Link>
          </HeaderText>
        </Box>
        <Box>
          <Button text="글쓰기" btnType="7" />
          <DropDown>
            <span>태그</span>
          </DropDown>
        </Box>
      </Layout>
    );
  } else if (selected === 'questions') {
    return (
      <Layout>
        <Box>
          <HeaderText
            css={css`
              margin-left: 11px;
            `}
          >
            <Link href="/community/hot">
              <a>핫토픽</a>
            </Link>
          </HeaderText>
          <HeaderText
            css={css`
              margin-left: 123px;
            `}
          >
            <Link href="/community/knowhow">
              <a>나만의 관리법</a>
            </Link>
          </HeaderText>
          <HeaderTextSelected
            css={css`
              margin-left: 132px;
            `}
          >
            <Link href="/community/questions">
              <a>질문</a>
            </Link>
          </HeaderTextSelected>
        </Box>
        <Box>
          <Button text="글쓰기" btnType="7" />
          <DropDown>
            <span>태그</span>
          </DropDown>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box>
        <HeaderText
          css={css`
            margin-left: 11px;
          `}
        >
          <Link href="/community/hot">
            <a>핫토픽</a>
          </Link>
        </HeaderText>
        <HeaderText
          css={css`
            margin-left: 123px;
          `}
        >
          <Link href="/community/knowhow">
            <a>나만의 관리법</a>
          </Link>
        </HeaderText>
        <HeaderText
          css={css`
            margin-left: 132px;
          `}
        >
          <Link href="/community/questions">
            <a>질문</a>
          </Link>
        </HeaderText>
      </Box>
      <Box>
        <Button text="글쓰기" btnType="7" />
        <DropDown>
          <span>태그</span>
        </DropDown>
      </Box>
    </Layout>
  );
}

export default TabBar;
