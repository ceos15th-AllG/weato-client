/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import TabGroup from '@newsletter/TabGroup';
import CardBox from '@newsletter/CardBox';

import Button from '@common/ButtonContainer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 78px 300px 86px;
`;

function Newsletter(props) {
  return (
    <Layout>
      <TabGroup selected={props.tag} />

      <CardBox />

      <Button text={'더보기'} btnType={'4'} />
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
