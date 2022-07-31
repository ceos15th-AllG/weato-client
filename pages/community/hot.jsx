import styled from '@emotion/styled';

import TabBar from '../../src/components/community/TabBar';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fafafa;

  margin: 39px 300px 67px;
`;

const Row = styled.div`
  display: flex;
`;

function Hot() {
  return (
    <Layout>
      <TabBar selected="hot" />
      <Row>
        <span>메인 게시판</span>
        <span>실시간 추천글</span>
      </Row>
    </Layout>
  );
}

export default Hot;
