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
  const { min, max, result } = data;

  return (
    <Layout>
      <TabGroup selected={tag} />
      <CardBox data={result} />
      <Pagenator
        path={router.pathname}
        query={query}
        min={min}
        max={max}
        current={page}
      />
    </Layout>
  );
}

export default BookmarksTab;
