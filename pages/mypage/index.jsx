import styled from '@emotion/styled';

import axios from 'axios';
import cookie from 'cookie';

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
  if (!props.profileData) {
    return <span>로딩 에러</span>;
  }

  const { query } = props;
  const { tab } = query;

  return (
    <Layout>
      <HeaderBox data={props.profileData} />
      <TabBar selected={tab} />

      {tab === 'profile' ? (
        <ProfileTab userProfile={props.profileData} />
      ) : undefined}
      {tab === 'bookmarks' ? (
        <BookmarksTab query={query} data={props.bookmarksData} />
      ) : undefined}
      {tab === 'community' ? (
        <CommunityTab
          query={query}
          basicData={props.userData}
          data={props.communityData}
        />
      ) : undefined}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  const toQueryTags = {
    all: 'all',
    medicine: 'drug',
    sleep: 'sleep',
    water: 'cleaning',
    food: 'food',
    env: 'environment',
    etc: 'otherwise',
  };

  const tab = !query.tab ? 'profile' : query.tab;
  const tag = !query.tag ? 'all' : query.tag;
  const page = !query.page ? 1 : parseInt(query.page);

  try {
    const { id, token } = cookie.parse(context.req.headers.cookie);

    if (tab === 'profile') {
      const responseProfile = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/${id}/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          profileData: responseProfile.data,
        },
      };
    } else if (tab === 'bookmarks') {
      const responseProfile = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/${id}/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseBookmarks = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/${id}/bookmarks?tag=${toQueryTags[tag]}&page=${page}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          profileData: responseProfile.data,
          bookmarksData: responseBookmarks.data,
        },
      };
    } else if (tab === 'community') {
      const responseUser = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseProfile = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/${id}/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responseCommunity = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/${id}/owned-posts?page=${page}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          userData: responseUser.data,
          profileData: responseProfile.data,
          communityData: responseCommunity.data,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    // redirect: {
    //   destination: '/login',
    //   permanent: false,
    // },
    props: {},
  };
};

export default Mypage;
