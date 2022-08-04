import styled from '@emotion/styled';

import { useScrollPercentage } from 'react-scroll-percentage';

import ProgressBar from '@newsletter/ProgressBar';
import NewsletterForm from '@newsletter/NewsletterForm';
import Button from '@newsletter/ButtonContainer';

import { Subhead3 } from '@styles/FontStyle';
import { main, gray02, gray06, text_black } from '@styles/Colors';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 83px 300px 0px;
`;

const ContentHeader = styled.header`
  width: 100%;

  margin-bottom: 101px;
  padding-bottom: 23px;

  ${Subhead3}

  color : ${text_black};
  border-bottom: 3px solid ${gray06};
`;

const ButtonRow = styled.div`
  margin: 16px 635px 160px;

  display: flex;
  justify-content: right;
`;

function Sample(props) {
  const [ref, percentage] = useScrollPercentage({
    // rootMargin: '100px',
    threshold: 0.5,
  });

  return (
    <Layout ref={ref}>
      <ProgressBar percentage={percentage * 100} />

      <Content>
        <ContentHeader>뉴스레터 &#xE001; 세면</ContentHeader>
        <NewsletterForm />
      </Content>
      <ButtonRow>
        <Button value={200} btnType="heart" />
        <Button value={200} btnType="save" />
      </ButtonRow>
    </Layout>
  );
}

export default Sample;
