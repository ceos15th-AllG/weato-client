import styled from '@emotion/styled';

import { Html, Head, Main, NextScript } from 'next/document';

const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}
