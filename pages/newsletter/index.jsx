/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import TabGroup from '@newsletter/TabGroup';
import CardBox from '@newsletter/CardBox';

import Pagenator from '@common/Pagenator';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 78px 300px 86px;
`;

const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

function Newsletter(props) {
  return (
    <Layout>
      <TabGroup selected={props.tag} />

      <CardBox />

      <Row>
        <Pagenator />
      </Row>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const koreanTags = {
    all: '전체',
    medicine: '약품',
    sleep: '수면',
    water: '세면',
    food: '음식',
    env: '환경',
    etc: '기타',
  };

  if (Object.keys(query).length === 0 || !query.hasOwnProperty('tag')) {
    return {
      props: {
        tag: koreanTags['all'],
      },
    };
  }

  return {
    props: {
      tag: koreanTags[query.tag],
    },
  };
};

export default Newsletter;
