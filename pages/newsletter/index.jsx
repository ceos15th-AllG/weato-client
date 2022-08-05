/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import TabGroup from '@newsletter/TabGroup';
import CardBox from '@newsletter/CardBox';

import Pagenator from '@common/Pagenator';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 78px 300px 100px;
`;

const Row = styled.div`
  width: 100%;

  margin-top: 80px;

  display: flex;
  justify-content: center;
`;

function Newsletter(props) {
  const router = useRouter();
  const koreanTags = {
    all: '전체',
    medicine: '약품',
    sleep: '수면',
    water: '세면',
    food: '음식',
    env: '환경',
    etc: '기타',
  };

  return (
    <Layout>
      <TabGroup selected={koreanTags[props.tag]} />

      <CardBox />

      <Row>
        <Pagenator path={router.pathname} {...props} />
      </Row>
    </Layout>
  );
}

{
  /* <Pagenator path={router.pathname} {...props} /> */
}
export const getServerSideProps = async (context) => {
  const query = context.query;

  let defaultTag = 'all';
  let defaultPage = 1;

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('tag')) {
    defaultTag = query.tag;
  }

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('page')) {
    defaultPage = query.page;
  }

  return {
    props: {
      tag: defaultTag,
      page: defaultPage,
    },
  };
};

export default Newsletter;
