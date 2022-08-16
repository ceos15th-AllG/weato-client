import styled from '@emotion/styled';

import BoardHeader from '@community/BoardHeader';
import BoardContentLarge from '@community/BoardContentLarge';

const Layout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

function HotTopic() {
  const posts = [
    {
      id: '0',
      category: '관리법',
      title: '현재는 아토피 완치된 사람의 관리경험 공유합니다.',
      comments: '32',
      tag: '기타',
      view: '391',
      date: '2022-05-27',
    },
    {
      id: '1',
      category: '관리법',
      title: '생활습관과 함께 다른 부분에서 관리하는 경험 공유합니다.',
      comments: '20',
      tag: '기타',
      view: '200',
      date: '24분전',
    },
    {
      id: '2',
      category: '질문',
      title: '다시 재발한 아토피, 현재 어떻게 관리하는지 공유하고자 합니다.',
      comments: '18',
      tag: '기타',
      view: '180',
      date: '2022-05-21',
    },
    {
      id: '3',
      category: '질문',
      title: '배포 스트레스 때문에 아토피도 같이 안 좋아지나요?',
      comments: '12',
      tag: '기타',
      view: '82',
      date: '2022-05-21',
    },
    {
      id: '4',
      category: '질문',
      title: '아토피 걸리면 고기도 먹지 말아야 하나요?',
      comments: '9',
      tag: '음식',
      view: '56',
      date: '2022-05-21',
    },
    {
      id: '5',
      category: '질문',
      title: '밖에 나갈 때 신경 쓰이는데 어떤 옷을 입어야 하나요?',
      comments: '17',
      tag: '기타',
      view: '40',
      date: '2022-05-21',
    },
  ];

  return (
    <Layout>
      <BoardHeader title={'핫토픽'} link="hot" />
      <BoardContentLarge posts={posts} />
    </Layout>
  );
}

export default HotTopic;
