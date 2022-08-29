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
  height: 100px;
`;

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ContextProvider>
      <ScreenLayout>
        <Head>
          <title>WEATO : 당신만을 위한 아토피 맞춤 정보 서비스</title>

          {/* Facebook Meta Tags */}
          {/* <meta property="og:url" content="https://www.weato.net" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="WEATO" />
          <meta
            property="og:description"
            content="당신만을 위한 아토피 맞춤 정보 서비스"
          />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/6462456/187125688-b9860df0-000f-4c09-bebe-381c17067dce.png"
          /> */}

          {/* Twitter Meta Tags */}
          {/* <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="weato.net" />
          <meta property="twitter:url" content="https://www.weato.net" />
          <meta name="twitter:title" content="WEATO" />
          <meta
            name="twitter:description"
            content="당신만을 위한 아토피 맞춤 정보 서비스"
          />
          <meta
            name="twitter:image"
            content="https://user-images.githubusercontent.com/6462456/187125688-b9860df0-000f-4c09-bebe-381c17067dce.png"
          /> */}

          {/* Meta Tags Generated via https://www.opengraph.xyz */}
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
    </ContextProvider>
  );
};

export default App;
