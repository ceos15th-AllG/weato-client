import styled from '@emotion/styled';

import BoardGroup from '../../src/components/community/BoardGroup';
import Banner from '../../src/components/community/Banner';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  margin: 83px 300px 119px;

  background-color: blue;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Community() {
  return (
    <Layout>
      <Row>
        <BoardGroup />
        <Banner />
      </Row>
      <Row></Row>
    </Layout>
  );
}

export default Community;
