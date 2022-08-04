import styled from '@emotion/styled';

import HeaderBox from '@mypage/HeaderBox';
import TabBar from '@mypage/TabBar';
import ProfileTab from '@mypage/ProfileTab';
import BookmarksTab from '@mypage/BookmarksTab';
import CommunityTab from '@mypage/CommunityTab';

import { gray01 } from '@styles/Colors';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

function Mypage(props) {
  const userData = {
    level: '새싹',
    name: '아토랑',
    email: 'abcdef000@naver.com',
  };

  return (
    <Layout>
      <HeaderBox userData={userData} />
      <TabBar selected={props.tab} />

      {props.tab === 'profile' ? <ProfileTab /> : undefined}
      {props.tab === 'bookmarks' ? <BookmarksTab tag={props.tag} /> : undefined}
      {props.tab === 'community' ? <CommunityTab /> : undefined}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  let defaultTab = 'profile';
  let defaultTag = 'all';
  const koreanTags = {
    all: '전체',
    medicine: '약품',
    sleep: '수면',
    water: '세면',
    food: '음식',
    env: '환경',
    etc: '기타',
  };

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('tab')) {
    defaultTab = query.tab;
  }

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('tag')) {
    defaultTag = query.tag;
  }

  return {
    props: {
      tab: defaultTab,
      tag: koreanTags[defaultTag],
    },
  };
};

export default Mypage;
