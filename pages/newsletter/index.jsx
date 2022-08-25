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

  console.log(props.newsletterData);

  const newsletterData = [
    {
      text: '새로운 대안, JAK 억제제?',
      date: '2022.06.08',
      tag: '약품',
    },
    {
      text: '아이, 어른 모두 아토피가 잠까지',
      date: '2022.06.08',
      tag: '수면',
    },
    {
      text: '샤워, 목욕... 세면 습관으로 아토피 관리',
      date: '2022.06.08',
      tag: '세면',
    },
    {
      text: '아토피... 안 먹으면서까지 관리?',
      date: '2022.06.08',
      tag: '음식',
    },
    {
      text: '늘고 있는 미세먼지와 아토피',
      date: '2022.06.08',
      tag: '환경',
    },
    {
      text: '설거지를 하는데 갑자기 증상이?',
      date: '2022.06.08',
      tag: '기타',
    },
    {
      text: '장에 좋다는 유익균, 아토피에도 도움을?',
      date: '2022.06.08',
      tag: '음식',
    },
  ];

  return (
    <Layout>
      <TabGroup selected={koreanTags[props.tag]} />

      <CardBox data={newsletterData} />

      <Row>
        <Pagenator path={router.pathname} {...props} />
      </Row>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  let defaultTag = 'all';
  let defaultPage = 1;
  let defaultNewsletterData = null;

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('tag')) {
    defaultTag = query.tag;
  }
  if (Object.keys(query).length !== 0 && query.hasOwnProperty('page')) {
    defaultPage = query.page;
  }

  try {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxNzc4NTgyLCJpYXQiOjE2NjEzNDY1ODJ9.nX3hOm_LpPt5LEFisXvUHnTph3PKl7ZHDBhAP0KqaCKQRHuBnfGSJCrWYkPJzWbfY8OjY1qggyotLJixi7Qh8A`;

    const res = await axios.get(`https://www.weato.kro.kr/api/newsletters`);

    defaultNewsletterData = res.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      tag: defaultTag,
      page: defaultPage,
      newsletterData: defaultNewsletterData,
    },
  };
};

export default Newsletter;
