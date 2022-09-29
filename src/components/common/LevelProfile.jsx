import styled from '@emotion/styled';

import Image from 'next/image';

import level_1 from '@public/level/level_1.png';
import level_2 from '@public/level/level_2.png';
import level_3 from '@public/level/level_3.png';
import level_4 from '@public/level/level_4.png';
import level_1_big from '@public/level/level_1_big.png';
import level_2_big from '@public/level/level_2_big.png';
import level_3_big from '@public/level/level_3_big.png';
import level_4_big from '@public/level/level_4_big.png';

const Layout = styled.div`
  width: ${({ width }) => width}px;
  /* height: ${({ height }) => height}px; */
`;

const LevelProfile = ({ level, width, big }) => {
  return (
    // <Layout width={width} height={height}>
    <Layout width={width}>
      {level === 1 && big && <Image src={level_1_big} />}
      {level === 2 && big && <Image src={level_2_big} />}
      {level === 3 && big && <Image src={level_3_big} />}
      {level === 4 && big && <Image src={level_4_big} />}
      {level === 1 && !big && <Image src={level_1} />}
      {level === 2 && !big && <Image src={level_2} />}
      {level === 3 && !big && <Image src={level_3} />}
      {level === 4 && !big && <Image src={level_4} />}
    </Layout>
  );
};

export default LevelProfile;
