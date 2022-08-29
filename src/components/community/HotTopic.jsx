import styled from '@emotion/styled';

import BoardHeader from '@community/BoardHeader';
import BoardContentLarge from '@community/BoardContentLarge';

const Layout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

function HotTopic({ posts }) {
  return (
    <Layout>
      <BoardHeader title={'핫토픽'} link="hot" />
      <BoardContentLarge posts={posts} />
    </Layout>
  );
}

export default HotTopic;
