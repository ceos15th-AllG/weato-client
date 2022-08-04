import styled from '@emotion/styled';

import BoardHeader from './BoardHeader';
import BoardContent from './BoardContentSmall';

const Layout = styled.div`
  width: 427px;

  display: flex;
  flex-direction: column;
`;

function Questions() {
  const posts = [
    {
      id: 0,
      category: '관리법',
      title: '잘 때마다 가려워서 미치겠어요',
      comments: '100',
      tag: '음식',
      view: '127',
      date: '2022-05-27',
    },
    {
      id: 1,
      category: '관리법',
      title: '잘 때마다 가려워서 미치겠어요',
      comments: '67',
      tag: '기타',
      view: '45',
      date: '24분전',
    },
    {
      id: 2,
      category: '질문',
      title: '잘 때마다 가려워서 미치겠어요',
      comments: '88',
      tag: '수면',
      view: '68',
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
