import styled from '@emotion/styled';

import BoardHeader from './BoardHeader';
import BoardContent from './BoardContentSmall';

const Layout = styled.div`
  width: 427px;

  display: flex;
  flex-direction: column;
`;

function Knowhow() {
  const posts = [
    {
      category: '관리법',
      title: '최근 아이에게 유산균을 먹이기 시작 했어요',
      comments: '100',
      tag: '음식',
      view: '127',
      date: '2022-05-27',
    },
    {
      category: '관리법',
      title: '최근 아이에게 유산균을 먹이기 시작 했어요',
      comments: '67',
      tag: '기타',
      view: '45',
      date: '24분전',
    },
    {
      category: '질문',
      title: '최근 아이에게 유산균을 먹이기 시작 했어요',
      comments: '88',
      tag: '수면',
      view: '68',
      date: '2022-05-21',
    },
  ];

  return (
    <Layout>
      <BoardHeader title={'나만의 관리법'} />
      <BoardContent posts={posts} />
    </Layout>
  );
}

export default Knowhow;
