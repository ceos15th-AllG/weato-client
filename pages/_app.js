/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';

import GlobalStyle from '../styles/GlobalStyle';

import Head from 'next/head';

import ScreenLayout from '../src/components/main/ScreenLayout';
import ContentLayout from '../src/components/main/ContentLayout';
import Navbar from '../src/components/main/Navbar';
import FooterBar from '../src/components/main/FooterBar';

const App = ({ Component, pageProps }) => {
  return (
    <ScreenLayout>
      <Head>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Global styles={GlobalStyle} />

      <Navbar />
      <ContentLayout>
        <Component {...pageProps} />
        <FooterBar />
      </ContentLayout>
    </ScreenLayout>
  );
};

export default App;
