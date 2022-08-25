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
  if (!props.userData) {
    return <span>로딩 에러</span>;
  }

  const { tab, tag, userData, userProfile } = props;

  return (
    <Layout>
      <HeaderBox userData={userData} />
      <TabBar selected={tab} />

      {tab === 'profile' ? <ProfileTab userProfile={userProfile} /> : undefined}
      {/* {tab === 'bookmarks' ? <BookmarksTab tag={tag} /> : undefined} */}
      {/* {tab === 'community' ? <CommunityTab /> : undefined} */}
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
    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxODUwOTg2LCJpYXQiOjE2NjE0MTg5ODZ9.0AEJbNrMjFoR69sKIJ2MZTn5RSiYmNjl18ig-CScMffheE6IrLoedy-MBw19KFCVG55fsJ3_kDAVZnB3drsmKA`;
    const getUser = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/members`,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxODUwOTg2LCJpYXQiOjE2NjE0MTg5ODZ9.0AEJbNrMjFoR69sKIJ2MZTn5RSiYmNjl18ig-CScMffheE6IrLoedy-MBw19KFCVG55fsJ3_kDAVZnB3drsmKA`,
      },
    });
    defaultUserData = getUser.data;
    const memberId = getUser.data.id;
    const getUserProfile = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/members/${memberId}/profile`,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxODUwOTg2LCJpYXQiOjE2NjE0MTg5ODZ9.0AEJbNrMjFoR69sKIJ2MZTn5RSiYmNjl18ig-CScMffheE6IrLoedy-MBw19KFCVG55fsJ3_kDAVZnB3drsmKA`,
      },
    });
    defaultUserProfile = getUserProfile.data;
  } catch (error) {
    console.log(error);

    defaultUserData = null;
    defaultUserProfile = null;
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
