import styled from '@emotion/styled';

import Image from 'next/image';

import level_1 from '@public/level/level_1.svg';
import level_2 from '@public/level/level_2.svg';
import level_3 from '@public/level/level_3.svg';
import level_4 from '@public/level/level_4.svg';
import level_100 from '@public/level/level_100.svg';
import level_1_big from '@public/level/level_1_big.png';
import level_2_big from '@public/level/level_2_big.png';
import level_3_big from '@public/level/level_3_big.png';
import level_4_big from '@public/level/level_4_big.png';
import level_100_big from '@public/level/level_100_big.png';

const Layout = styled.div`
  ${({ width }) => (width ? `width : ${width}px;` : ``)};
  ${({ height }) => (height ? `height : ${height}px;` : ``)};
`;

const LevelProfile = ({ level, width, height, big }) => {
  return (
    <Layout width={width} height={height}>
      {level === 1 && big && <Image src={level_1} />}
      {level === 2 && big && <Image src={level_2} />}
      {level === 3 && big && <Image src={level_3} />}
      {level === 4 && big && <Image src={level_4} />}
      {level === 100 && big && <Image src={level_100} />}
      {level === 1 && !big && <Image src={level_1_big} />}
      {level === 2 && !big && <Image src={level_2_big} />}
      {level === 3 && !big && <Image src={level_3_big} />}
      {level === 4 && !big && <Image src={level_4_big} />}
      {level === 100 && !big && <Image src={level_100_big} />}
    </Layout>
  );
};

export default LevelProfile;
