import styled from '@emotion/styled';

import { main, gray02 } from '@styles/Colors';

const Layout = styled.main`
  position: fixed;
  top: 100px;
  z-index: 900px;

  width: 1920px;
  height: 12px;

  display: flex;
  justify-content: flex-start;

  background-color: ${gray02};
`;

const Bar = styled.section`
  width: ${(props) => `${props.percentage}%`};

  border-radius: 100px;

  background-color: ${main};
`;

function ProgressBar({ percentage }) {
  return (
    <Layout>
      {/* <Bar percentage={updatedWidth} /> */}
      <Bar percentage={percentage} />
    </Layout>
  );
}

export default ProgressBar;
