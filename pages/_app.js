/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

// import { RecoilRoot } from 'recoil';

import GlobalStyle from '@styles/GlobalStyle';

import Head from 'next/head';
import { useRouter } from 'next/router';

import ScreenLayout from '@main/ScreenLayout';
import ContentLayout from '@main/ContentLayout';
import TopNav from '@main/TopNav';
import Footerbar from '@main/Footerbar';

const MARGIN = styled.div`
  height: 100px;
`;

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <ScreenLayout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>WEATO : 당신만을 위한 아토피 맞춤 정보 서비스</title>
        </Head>

        <Global styles={GlobalStyle} />

        {router.asPath.startsWith(`/landing`) ? (
          <Component {...pageProps} />
        ) : (
          <>
            <TopNav />
            <ContentLayout>
              <MARGIN />
              <Component {...pageProps} />
              {router.asPath.startsWith(`/signup`) ? undefined : <Footerbar />}
            </ContentLayout>
          </>
        )}
      </ScreenLayout>
    </>
  );
};

export default App;
