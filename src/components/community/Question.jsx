import styled from '@emotion/styled';

import BoardHeader from '@community/BoardHeader';
import BoardContent from '@community/BoardContentSmall';

const Layout = styled.div`
  width: 427px;

  display: flex;
  flex-direction: column;
`;

function Questions({ posts }) {
  return (
    <Layout>
      <BoardHeader title={'질문'} link="questions" />
      <BoardContent posts={posts} />
    </Layout>
  );
}

export default Questions;
