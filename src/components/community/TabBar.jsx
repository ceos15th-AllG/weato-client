import styled from '@emotion/styled';

import Link from 'next/link';

import TagDropdown from '@community/TagDropdown';
import Button from '@common/ButtonContainer';

import { Headline1, Subhead4 } from '@styles/FontStyle';
import { main, gray02, gray05, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-bottom: 2px solid ${gray02};
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.span`
  ${Headline1}

  margin-top : 5px;
  margin-right: 123px;
  padding-bottom: 9px;

  color: ${({ menu, selected }) => (menu === selected ? main : gray05)};
  border-bottom: 4px solid
    ${({ menu, selected }) => (menu === selected ? main : `transparent`)};

  transition: all 0.3s ease;
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

function TabBar({ query }) {
  const { tab, page, tag } = query;
  const tagTypes = ['all', 'medicine', 'sleep', 'water', 'food', 'env', 'etc'];

  return (
    <Layout>
      <Box>
        <HeaderText menu="hot" selected={tab}>
          <Link href="/community/board?tab=hot">
            <a>핫토픽</a>
          </Link>
        </HeaderText>

        <HeaderText menu="knowhow" selected={tab}>
          <Link href="/community/board?tab=knowhow">
            <a>나만의 관리법</a>
          </Link>
        </HeaderText>

        <HeaderText menu="questions" selected={tab}>
          <Link href="/community/board?tab=questions">
            <a>질문</a>
          </Link>
        </HeaderText>
      </Box>
      <Box>
        <Button text="글쓰기" btnType="7" href="/community/post/new" />
        <TagDropdown query={query} selected={tag} options={tagTypes} />
      </Box>
    </Layout>
  );
}

export default TabBar;
