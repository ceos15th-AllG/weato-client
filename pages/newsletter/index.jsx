import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import axios from 'axios';

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

  if (!props.newsletterData) {
    return <span>로딩 에러</span>;
  }
  const { query, newsletterData } = props;

  const tag = !query.tag ? '전체' : koreanTags[query.tag];
  const page = !query.page ? 1 : query.page;

  console.log(query);

  return (
    <Layout>
      <TabGroup selected={tag} />

      <CardBox data={newsletterData.data} />

      <Row>
        <Pagenator min={1} max={5} current={1} />
      </Row>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  try {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxNzc4NTgyLCJpYXQiOjE2NjEzNDY1ODJ9.nX3hOm_LpPt5LEFisXvUHnTph3PKl7ZHDBhAP0KqaCKQRHuBnfGSJCrWYkPJzWbfY8OjY1qggyotLJixi7Qh8A`;

    const res = await axios.get(`https://www.weato.kro.kr/api/newsletters`);

    return {
      props: {
        query: query,
        newsletterData: res.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Newsletter;
