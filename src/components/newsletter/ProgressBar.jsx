import styled from '@emotion/styled';

import { main, gray02 } from '../../../styles/Colors';

const Layout = styled.div`
  height: 12px;

  display: flex;
  justify-content: flex-start;

  background-color: ${gray02};
`;

const Bar = styled.div`
  width: 500px;

  border-radius: 100px;

  background-color: ${main};
`;

function ProgressBar() {
  return (
    <Layout>
      <Bar />
    </Layout>
  );
}

export default ProgressBar;
