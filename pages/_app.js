/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

import GlobalStyle from '@styles/GlobalStyle';

import Head from 'next/head';

import ScreenLayout from '@main/ScreenLayout';
import ContentLayout from '@main/ContentLayout';
import TopNav from '@main/TopNav';
import Footerbar from '@main/Footerbar';

const MARGIN = styled.div`
  height: 100px;
`;

const App = ({ Component, pageProps }) => {
  return (
    <ScreenLayout>
      <Global styles={GlobalStyle} />

      <TopNav />

      <ContentLayout>
        <MARGIN />
        <Component {...pageProps} />
        <Footerbar />
      </ContentLayout>
    </ScreenLayout>
  );
};

export default App;
