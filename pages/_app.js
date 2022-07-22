/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';

import GlobalStyle from '../styles/GlobalStyle';

import Head from 'next/head';

import Navbar from '../src/components/main/Navbar';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Global styles={GlobalStyle} />

      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
