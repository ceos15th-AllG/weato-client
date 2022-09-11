/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import GlobalStyle from '@styles/GlobalStyle';

import Head from 'next/head';
import { useRouter } from 'next/router';

import ContextProvider from '@contexts/ContextProvider';

import ScreenLayout from '@main/ScreenLayout';
import ContentLayout from '@main/ContentLayout';
import TopNav from '@main/TopNav';
import Footerbar from '@main/Footerbar';

const MARGIN = styled.div`
  height: ${({ extended }) => (!extended ? `100px` : `200px`)};

  transition: height 0.6s ease;
`;

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ContextProvider>
      <ScreenLayout>
        <Head>
          <title>WEATO : 당신만을 위한 아토피 맞춤 정보 서비스</title>
        </Head>

        <Global styles={GlobalStyle} />

        {router.asPath.startsWith(`/landing`) ? (
          <Component {...pageProps} />
        ) : (
          <>
            <TopNav />
            <ContentLayout>
              <MARGIN extended={router.asPath === `/`} />
              <Component {...pageProps} />
              {router.asPath.startsWith(`/signup`) ? undefined : <Footerbar />}
            </ContentLayout>
          </>
        )}
      </ScreenLayout>
    </ContextProvider>
  );
};

export default App;
