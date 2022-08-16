import styled from '@emotion/styled';

import Image from 'next/image';
import Link from 'next/link';

import banner_1 from '@public/banner_community.png';

const Layout = styled.div`
  width: 315px;
  height: 640px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Banner() {
  return (
    <Layout>
      <Link href="/newsletter">
        <a>
          <Image src={banner_1} alt="" />
        </a>
      </Link>
    </Layout>
  );
}

export default Banner;
