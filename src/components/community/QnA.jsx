import styled from '@emotion/styled';

import BoardHeader from './BoardHeader';

const Layout = styled.div`
  width: 100%;

  margin-top: 80px;

  display: flex;
  flex-direction: column;

  background-color: red;
`;

function QnA() {
  const posts = [
    {
      category: '관리법',
      title: '잘 때마다 가려워서 미치겠어요',
      comments: '100',
      tag: '음식',
      view: '127',
      date: '2022-05-27',
    },
    {
      category: '관리법',
      title: '잘 때마다 가려워서 미치겠어요',
      comments: '67',
      tag: '기타',
      view: '45',
      date: '24분전',
    },
    {
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
      <BoardHeader title={'Q&A'} />
      {/* <BoardContent posts={posts} /> */}
    </Layout>
  );
}

export default QnA;
