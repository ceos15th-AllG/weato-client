import styled from '@emotion/styled';

import BoardHeader from '@community/BoardHeader';
import BoardContent from '@community/BoardContentSmall';

const Layout = styled.div`
  width: 427px;

  display: flex;
  flex-direction: column;
`;

function Questions() {
  const posts = [
    {
      id: 0,
      category: '질문',
      title: '배포 스트레스 때문에 아토피도 같이 안 좋아지나요?',
      view: '82',
      date: '2022-05-27',
    },
    {
      id: 1,
      category: '질문',
      title: '아토피 걸리면 고기도 먹지 말아야 하나요?',
      view: '56',
      date: '24분전',
    },
    {
      id: 2,
      category: '질문',
      title: '밖에 나갈 때 신경 쓰이는데 어떤 옷을 입어야 하나요?',
      view: '40',
      date: '2022-05-21',
    },
  ];

  return (
    <Layout>
      <BoardHeader title={'질문'} link="questions" />
      <BoardContent posts={posts} />
    </Layout>
  );
}

export default Questions;
