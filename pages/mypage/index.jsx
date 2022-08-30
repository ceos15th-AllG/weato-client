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
  if (!props.data) {
    return <span>로딩 에러</span>;
  }

  const { data, query } = props;
  const { tab, tag, page } = query;

  return (
    <Layout>
      <HeaderBox />
      <TabBar selected={tab} />

      {tab === 'profile' ? <ProfileTab userProfile={data} /> : undefined}
      {tab === 'bookmarks' ? (
        <BookmarksTab query={query} data={data} />
      ) : undefined}
      {/* {tab === 'community' ? <CommunityTab /> : undefined} */}
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
    const { id, access_token } = cookie.parse(context.req.headers.cookie);

    if (tab === 'profile') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/${id}/profile`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          data: response.data,
        },
      };
    } else if (tab === 'bookmarks') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/${id}/bookmarks?tag=${toQueryTags[tag]}&page=${page}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          data: response.data,
        },
      };
    } else if (tab === 'community') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/${id}/profile`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          data: response.data,
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
