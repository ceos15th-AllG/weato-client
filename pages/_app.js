/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';

import GlobalStyle from '../styles/GlobalStyle';

import Head from 'next/head';

import ScreenLayout from '../src/components/main/ScreenLayout';
import ContentLayout from '../src/components/main/ContentLayout';
import TopNav from '../src/components/main/TopNav';
import Footerbar from '../src/components/main/Footerbar';

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
