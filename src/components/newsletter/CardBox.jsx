import styled from '@emotion/styled';

import Card from '@common/CardContainer';

const Layout = styled.div`
  width: 1320px;
  height: 670px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardRow = styled.div`
  display: flex;

  justify-content: space-between;
`;

export default function CardBox(props) {
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
    {
      text: '일부 환자들에게 보험 적용되기 시작한 JAK 억제제들',
      date: '2022.06.08',
      tag: '약품',
    },
  ];

  return (
    <Layout>
      <CardRow>
        {newsletterData.slice(0, 4).map(({ text, date, tag, index }) => (
          <Card key={index} text={text} date={date} tag={tag} />
        ))}
      </CardRow>
      <CardRow>
        {newsletterData.slice(4).map(({ text, date, tag, index }) => (
          <Card key={index} text={text} date={date} tag={tag} />
        ))}
      </CardRow>
    </Layout>
  );
}
