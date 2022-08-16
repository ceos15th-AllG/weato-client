import styled from '@emotion/styled';

import HotTopic from '@community/HotTopic';
import Knowhow from '@community/Knowhow';
import Questions from '@community/Question';

const Layout = styled.div`
  width: 873px;
  height: 723px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

function BoardGroup() {
  return (
    <Layout>
      <Row>
        <HotTopic />
      </Row>
      <Row>
        <Knowhow />
        <Questions />
      </Row>
    </Layout>
  );
}

export default BoardGroup;
