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
        <>
          <link
            href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
            rel="stylesheet"
          />
          <link rel="icon" href="/images/favicon.ico" />

          {/* Facebook Meta Tags */}
          <meta property="og:url" content="https://www.weato.net" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="WEATO" />
          <meta
            property="og:description"
            content="당신만을 위한 아토피 맞춤 정보 서비스"
          />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/6462456/187125688-b9860df0-000f-4c09-bebe-381c17067dce.png"
          />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
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
          />
        </>
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}
