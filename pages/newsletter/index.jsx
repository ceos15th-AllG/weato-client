import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import axios from 'axios';

import TabGroup from '@newsletter/TabGroup';
import CardBox from '@common/CardBox';

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

  if (!props.newsletterData) {
    return <span>로딩 에러</span>;
  }
  const { query, newsletterData } = props;
  const { data, min, max } = newsletterData;
  const { tag, page } = query;

  return (
    <Layout>
      <TabGroup selected={koreanTags[tag]} />

      <CardBox data={data} />

      <Row>
        <Pagenator
          path={router.pathname}
          query={query}
          min={min}
          max={max}
          current={page}
        />
      </Row>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const tag = !query.tag ? 'all' : query.tag;
  const page = !query.page ? 1 : parseInt(query.page);
  const toAPITags = {
    all: 'all',
    medicine: 'drug',
    sleep: 'sleep',
    water: 'cleaning',
    food: 'food',
    env: 'environment',
    etc: 'otherwise',
  };

  try {
    const res = await axios.get(
      `https://www.weato.kro.kr/api/newsletters?tag=${toAPITags[tag]}&page=${page}`
    );

    return {
      props: {
        query: { ...query, tag: tag, page: page },
        newsletterData: res.data,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      query: { ...query, tag: tag, page: page },
      newsletterData: null,
    },
  };
};

export default Newsletter;
