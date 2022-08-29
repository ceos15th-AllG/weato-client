import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import TabGroup from '@mypage/TabGroup';
import CardBox from '@common/CardBox';
import Pagenator from '@common/Pagenator';

const Layout = styled.div`
  margin: 58px 300px 104px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BookmarksTab({ query, data }) {
  const router = useRouter();
  const { tag, page } = query;

  return (
    <Layout>
      <TabGroup selected={tag} />
      <CardBox data={data.scrapedPosts} />
      <Pagenator
        path={router.pathname}
        query={query}
        min={1}
        max={5}
        current={page}
      />
    </Layout>
  );
}

export default BookmarksTab;
