import styled from '@emotion/styled';

import Image from 'next/image';

import level_1 from '@public/level/level_1.png';
import level_2 from '@public/level/level_2.png';
import level_3 from '@public/level/level_3.png';
import level_4 from '@public/level/level_4.png';

const Layout = styled.div`
  width: ${({ width }) => width}px;
  /* height: ${({ height }) => height}px; */
`;

const LevelProfile = ({ level, width }) => {
  return (
    // <Layout width={width} height={height}>
    <Layout width={width}>
      {level === 1 && <Image src={level_1} />}
      {level === 2 && <Image src={level_2} />}
      {level === 3 && <Image src={level_3} />}
      {level === 4 && <Image src={level_4} />}
    </Layout>
  );
};

export default LevelProfile;
