import styled from '@emotion/styled';

import BoardGroup from '../../src/components/community/BoardGroup';
import Banner from '../../src/components/community/Banner';
import QnA from '../../src/components/community/QnA';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  margin: 83px 300px 119px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 53px;

  background-color: red;
`;

function Community() {
  return (
    <Layout>
      <Row>
        <BoardGroup />
        <BannerBox>
          <Banner />
        </BannerBox>
      </Row>
      <Row>
        <QnA />
      </Row>
    </Layout>
  );
}

export default Community;
