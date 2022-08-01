import styled from '@emotion/styled';

import HeaderBox from '../../src/components/mypage/HeaderBox';
import TabBar from '../../src/components/mypage/TabBar';
import ProfileTab from '../../src/components/mypage/ProfileTab';
import BookmarksTab from '../../src/components/mypage/BookmarksTab';
import CommunityTab from '../../src/components/mypage/CommunityTab';

import { gray01 } from '../../styles/Colors';

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
      {props.tab === 'bookmarks' ? <BookmarksTab /> : undefined}
      {props.tab === 'community' ? <CommunityTab /> : undefined}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  if (Object.keys(query).length === 0 || !query.hasOwnProperty('tab')) {
    return {
      props: {
        tab: 'profile',
      },
    };
  }

  return {
    props: {
      tab: query.tab,
    },
  };
};

export default Mypage;
