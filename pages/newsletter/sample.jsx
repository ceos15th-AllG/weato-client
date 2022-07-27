import styled from '@emotion/styled';

import ProgressBar from '../../src/components/newsletter/ProgressBar';
import NewsletterForm from '../../src/components/newsletter/NewsletterForm';

import { Subhead3 } from '../../styles/FontStyle';
import { main, gray02, gray06, text_black } from '../../styles/Colors';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 83px 300px 160px;
`;

const ContentHeader = styled.header`
  width: 100%;

  margin-top: 83px;
  margin-bottom: 101px;
  padding-bottom: 23px;

  ${Subhead3}

  color : ${text_black};
  border-bottom: 3px solid ${gray06};
`;

function Sample(props) {
  return (
    <Layout>
      <ProgressBar />

      <Content>
        <ContentHeader>뉴스레터 &#xE001; 세면</ContentHeader>
        <NewsletterForm />
      </Content>
    </Layout>
  );
}

export default Sample;
