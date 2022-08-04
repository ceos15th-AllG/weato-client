import styled from '@emotion/styled';

import { Headline1 } from '@styles/FontStyle';

import { gray05, text_black, tag_etc } from '@styles/Colors';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.span`
  margin: 0px 8px;

  color: ${tag_etc};
`;

const Page = styled.span`
  margin: 0px 8px;

  ${Headline1}

  color : ${gray05};
`;

const CurrentPage = styled.span`
  margin: 0px 8px;

  ${Headline1}

  color : ${text_black};
`;

function Pagenator({ current }) {
  return (
    <Layout>
      <Arrow>&#xE000;</Arrow>
      <Page>1</Page>
      <Page>2</Page>
      <CurrentPage>3</CurrentPage>
      <Page>4</Page>
      <Page>5</Page>
      <Arrow>&#xE001;</Arrow>
    </Layout>
  );
}

export default Pagenator;
