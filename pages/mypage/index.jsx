import styled from '@emotion/styled';

import axios from 'axios';

import HeaderBox from '@mypage/HeaderBox';
import TabBar from '@mypage/TabBar';
import ProfileTab from '@mypage/ProfileTab';
import BookmarksTab from '@mypage/BookmarksTab';
import CommunityTab from '@mypage/CommunityTab';

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

  // console.log(props.userData);

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
  let defaultUserData = null;
  const koreanTags = {
    all: '전체',
    medicine: '약품',
    sleep: '수면',
    water: '세면',
    food: '음식',
    env: '환경',
    etc: '기타',
  };

  // const access_token = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYwMTExNjkxLCJpYXQiOjE2NTk2Nzk2OTF9.MC1yvok5zZ0F2AxTOnwrYhy3xMmk7WqIEabBD0m4j0H1gpTd7BDcNMZDqnIDE-gwxJzRqC2zVeLAE-iaMm8kRw`;
  // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

  try {
    // const res = await axios.get('https://api.github.com/users/poodlepoodle');
    const res = await axios.get('http://3.37.94.86/api/posts');

    if (res.status === 200) {
      defaultUserData = res.data;
      // return { props: { user } };
    }
    // return { props: {} };
  } catch (error) {
    console.log(error);
    // return { props: {} };
  }

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
      userData: defaultUserData,
    },
  };
};

export default Mypage;
