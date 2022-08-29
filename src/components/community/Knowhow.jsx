import styled from '@emotion/styled';

import BoardHeader from '@community/BoardHeader';
import BoardContent from '@community/BoardContentSmall';

const Layout = styled.div`
  width: 427px;

  display: flex;
  flex-direction: column;
`;

function Knowhow({ posts }) {
  return (
    <Layout>
      <BoardHeader title={'나만의 관리법'} link="knowhow" />
      <BoardContent posts={posts} />
    </Layout>
  );
}

export default Knowhow;
