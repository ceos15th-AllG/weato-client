import styled from '@emotion/styled';

import axios from 'axios';

import HeaderBox from '@mypage/HeaderBox';
import TabBar from '@mypage/TabBar';
import ProfileTab from '@mypage/ProfileTab';
import BookmarksTab from '@mypage/BookmarksTab';
import CommunityTab from '@mypage/CommunityTab';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

function Mypage(props) {
  const { tab, tag, userData, userProfile } = props;

  return (
    <Layout>
      <HeaderBox userData={userData} />
      <TabBar selected={tab} />

      {tab === 'profile' ? <ProfileTab userProfile={userProfile} /> : undefined}
      {tab === 'bookmarks' ? <BookmarksTab tag={tag} /> : undefined}
      {tab === 'community' ? <CommunityTab /> : undefined}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  let defaultTab = 'profile';
  let defaultTag = 'all';
  let defaultUserData = null;
  let defaultUserProfile = null;

  const koreanTags = {
    all: '전체',
    medicine: '약품',
    sleep: '수면',
    water: '세면',
    food: '음식',
    env: '환경',
    etc: '기타',
  };

  const access_token = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxMzUwNjE4LCJpYXQiOjE2NjA5MTg2MTh9.zAZVUEvNFngArcveTVSFqR0Cxy1Xsgy5YMQtZN29iE5W1fzES-5GNH2si_9lbNI_7itWCjmrZDsNIJtD0Bofzg`;
  axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

  // props 준비 - Tab 쿼리
  if (Object.keys(query).length !== 0 && query.hasOwnProperty('tab')) {
    defaultTab = query.tab;
  }

  // props 준비 - Tag 쿼리
  if (Object.keys(query).length !== 0 && query.hasOwnProperty('tag')) {
    defaultTag = query.tag;
  }

  // props 준비 - 유저 데이터 api
  try {
    const res = await axios.get(`http://3.37.94.86/api/members`);

    if (res.status === 200) {
      defaultUserData = res.data;
    }
  } catch (error) {
    console.log(error);
  }

  // props 준비 - 유저 데이터 api
  try {
    const res = await axios.get(`http://3.37.94.86/api/members/1/profile`);

    if (res.status === 200) {
      defaultUserProfile = res.data;
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      tab: defaultTab,
      tag: koreanTags[defaultTag],
      userData: defaultUserData,
      userProfile: defaultUserProfile,
    },
  };
};

export default Mypage;
