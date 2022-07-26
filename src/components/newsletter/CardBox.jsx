import styled from '@emotion/styled';

import Card from '../common/CardContainer';

const Layout = styled.div`
  width: 1320px;
  height: 670px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 65px;
`;

const CardRow = styled.div`
  display: flex;

  justify-content: space-between;
`;

export default function CardBox(props) {
  return (
    <Layout>
      <CardRow>
        <Card
          text={
            '샤워부터 시작하는 아토피 관리 샤워부터 시작하는 시작하는 시작하는 시작하는 시작하는'
          }
          date={'2022.07.21'}
          tag={'약품'}
        />
        <Card
          text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
          date={'2022.07.21'}
          tag={'수면'}
        />
        <Card
          text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
          date={'2022.07.21'}
          tag={'세면'}
        />
        <Card
          text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
          date={'2022.07.21'}
          tag={'음식'}
        />
      </CardRow>
      <CardRow>
        <Card
          text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
          date={'2022.07.21'}
          tag={'환경'}
        />
        <Card
          text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
          date={'2022.07.21'}
          tag={'기타'}
        />
        <Card
          text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
          date={'2022.07.21'}
          tag={'기타'}
        />
        <Card
          text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
          date={'2022.07.21'}
          tag={'기타'}
        />
      </CardRow>
    </Layout>
  );
}
