import styled from '@emotion/styled';

import BoardHeader from './BoardHeader';
import BoardContentLarge from './BoardContentLarge';

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
      title: '최근 아이에게 유산균을 먹이기 시작 했어요',
      comments: '100',
      tag: '음식',
      view: '127',
      date: '2022-05-27',
    },
    {
      id: '1',
      category: '관리법',
      title: '매일 저녁마다 30분씩 유산소 운동',
      comments: '67',
      tag: '기타',
      view: '45',
      date: '24분전',
    },
    {
      id: '2',
      category: '질문',
      title: '잘 때마다 가려워서 미치겠어요',
      comments: '88',
      tag: '수면',
      view: '68',
      date: '2022-05-21',
    },
    {
      id: '3',
      category: '질문',
      title:
        '구현해야 할 페이지가 너무 많아서 미치겠어요.. 그런데 만약 이모지나 글이 너무 길면 어떻게될까요...?',
      comments: '9',
      tag: '수면',
      view: '12',
      date: '2022-05-21',
    },
    {
      id: '4',
      category: '질문',
      title: '데모데이가 점점 다가와서 미치겠어요',
      comments: '35',
      tag: '수면',
      view: '359',
      date: '2022-05-21',
    },
    {
      id: '5',
      category: '질문',
      title: 'Vercel 배포 때문에 미치겠어요',
      comments: '257',
      tag: '수면',
      view: '898',
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
