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
  const dict = {
    ALL: 'all',
    DRUG: 'medicine',
    SLEEP: 'sleep',
    CLEANING: 'water',
    FOOD: 'food',
    ENVIRONMENT: 'env',
    OTHERWISE: 'etc',
  };

  const data = [
    {
      id: 1,
      title: '샤워, 목욕, 세면, 습관으로 아토피 관리',
      createdAt: '2022-10-02',
      tagType: 'CLEANING',
    },
    {
      id: 2,
      title: '새로운 대안, JAK 억제제?',
      createdAt: '2022-10-02',
      tagType: 'DRUG',
    },
    {
      id: 3,
      title: '늘고 있는 미세먼지와 아토피',
      createdAt: '2022-10-02',
      tagType: 'ENVIRONMENT',
    },
    {
      id: 4,
      title: '설거지를 하는데 갑자기 증상이?',
      createdAt: '2022-10-02',
      tagType: 'OTHERWISE',
    },
    {
      id: 5,
      title: '장에 좋다는 유익균, 아토피에도 도움을?',
      createdAt: '2022-10-02',
      tagType: 'FOOD',
    },
    {
      id: 6,
      title: '일부 환자들에게 보험 적용되기 시작한 JAK억제제들',
      createdAt: '2022-10-02',
      tagType: 'DRUG',
    },
    {
      id: 7,
      title: '플라스틱, 잘 신경 써서 아토피 예방을',
      createdAt: '2022-10-09',
      tagType: 'ENVIRONMENT',
    },
    {
      id: 8,
      title: '잘 때 쓰는 침대 시트는 어떤 게 좋지?',
      createdAt: '2022-10-09',
      tagType: 'SLEEP',
    },
    {
      id: 9,
      title: '쓸 수 있는 클렌저는 어떤 것들이?',
      createdAt: '2022-10-09',
      tagType: 'CLEANING',
    },
    {
      id: 10,
      title: '환경_내가 지금 쓰는 헤어 제품, 이런 성분들 있나?',
      createdAt: '2022-10-09',
      tagType: 'ENVIRONMENT',
    },
    {
      id: 11,
      title: '약품_듀피젠트 해외에서는 어떻게 관리할까',
      createdAt: '2022-10-09',
      tagType: 'DRUG',
    },
    {
      id: 12,
      title: '기타_광선 치료도 받는 아토피, 그 효과는?',
      createdAt: '2022-10-09',
      tagType: 'OTHERWISE',
    },
    {
      id: 13,
      title: '셀러리 주스에 대해 들어보신 적 있나요?',
      createdAt: '2022-10-16',
      tagType: 'FOOD',
    },
    {
      id: 14,
      title: 'P&G 사에서 투자한 아토피 크림',
      createdAt: '2022-10-16',
      tagType: 'CLEANING',
    },
    {
      id: 15,
      title: 'EASI 점수가 어떤 거죠?',
      createdAt: '2022-10-16',
      tagType: 'OTHERWISE',
    },
    {
      id: 16,
      title: '“스테로이드제”에 대해서',
      createdAt: '2022-10-16',
      tagType: 'DRUG',
    },
    {
      id: 17,
      title: '주위 환경이 변하는 환절기, 습도는 어떻게 확인하고 계신가요?',
      createdAt: '2022-10-23',
      tagType: 'ENVIRONMENT',
    },
    {
      id: 18,
      title: '전문가와의 문의 : 수면(1)',
      createdAt: '2022-10-23',
      tagType: 'SLEEP',
    },
    {
      id: 19,
      title: '글루텐 프리, 아토피는?',
      createdAt: '2022-10-23',
      tagType: 'FOOD',
    },
    {
      id: 20,
      title: '월마다 여성분들이 아토피가 심해지는 것 같은 이유!',
      createdAt: '2022-10-23',
      tagType: 'OTHERWISE',
    },
    {
      id: 21,
      title: '“스테로이드제”에 대해서(2)',
      createdAt: '2022-10-27',
      tagType: 'DRUG',
    },
    {
      id: 22,
      title: '전문가와의 문의 : 수면(2)',
      createdAt: '2022-10-27',
      tagType: 'SLEEP',
    },
    {
      id: 23,
      title: 'MD크림, 들어보셨나요?',
      createdAt: '2022-10-27',
      tagType: 'CLEANING',
    },
    {
      id: 24,
      title: '키토 식단, 아토피에는 도움되나요?',
      createdAt: '2022-10-27',
      tagType: 'FOOD',
    },
    {
      id: 25,
      title: '가을철 아토피 환자들에게 좋은 소재의 옷들',
      createdAt: '2022-10-27',
      tagType: 'OTHERWISE',
    },
    {
      id: 26,
      title: '대한민국 사람들과 잘 안 맞는 유제품, 아토피에는 어떨까',
      createdAt: '2022-11-03',
      tagType: 'FOOD',
    },
    {
      id: 27,
      title: '애드트랄자, 이건 또 어떤 약품이야?',
      createdAt: '2022-11-03',
      tagType: 'DRUG',
    },
    {
      id: 28,
      title: '코넬 의대 출신이 이야기하는 바디워시',
      createdAt: '2022-11-03',
      tagType: 'CLEANING',
    },
    {
      id: 29,
      title: '아토피 증상과 심혈관의 관계?',
      createdAt: '2022-11-03',
      tagType: 'OTHERWISE',
    },
    {
      id: 30,
      title: 'Winter is coming, 아토피도 준비',
      createdAt: '2022-11-03',
      tagType: 'ENVIRONMENT',
    },
    {
      id: 31,
      title: '달콤한 꿀, 피부에 바르기도 한다고?',
      createdAt: '2022-11-10',
      tagType: 'FOOD',
    },
    {
      id: 32,
      title: '자기 전 젖은 드레싱으로 피부 둘러싸기',
      createdAt: '2022-11-10',
      tagType: 'SLEEP',
    },
    {
      id: 33,
      title: '아토피 후 남는 흉터… 없앨 수 있을까?',
      createdAt: '2022-11-10',
      tagType: 'OTHERWISE',
    },
    {
      id: 34,
      title: '일광욕, 피부에 안 좋은 영향을 줄까?',
      createdAt: '2022-11-10',
      tagType: 'ENVIRONMENT',
    },
    {
      id: 35,
      title: '세면 제품 살 때, 이 성분들은 주의!',
      createdAt: '2022-11-10',
      tagType: 'CLEANING',
    },
  ];

  const { query } = props;
  const { tag, page } = query;

  const min = 1;
  const categorizedData = [...data]
    .reverse()
    .filter(({ tagType }) => tag === 'all' || dict[tagType] === tag);
  const max = Math.ceil(categorizedData.length / 8);
  const pagedData = categorizedData.slice((page - 1) * 8, (page - 1) * 8 + 8);

  return (
    <Layout>
      <TabGroup selected={koreanTags[tag]} />

      <CardBox data={pagedData} />

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

  return {
    props: {
      query: { ...query, tag: tag, page: page },
    },
  };
};

export default Newsletter;
