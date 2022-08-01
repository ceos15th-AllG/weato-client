import styled from '@emotion/styled';

import HotTopic from './HotTopic';
import Knowhow from './Knowhow';
import Questions from './Question';

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
