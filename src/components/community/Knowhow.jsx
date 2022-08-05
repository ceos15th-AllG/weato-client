import styled from '@emotion/styled';

import BoardHeader from '@community/BoardHeader';
import BoardContent from '@community/BoardContentSmall';

const Layout = styled.div`
  width: 427px;

  display: flex;
  flex-direction: column;
`;

function Knowhow() {
  const posts = [
    {
      id: 0,
      category: '관리법',
      title: '현재는 아토피 완치된 사람의 관리경험 공유합니다.',
      view: '391',
      date: '2022-05-27',
    },
    {
      id: 1,
      category: '관리법',
      title: '생활습관과 함께 다른 부분에서 관리하는 경험 공유합니다.',
      view: '200',
      date: '24분전',
    },
    {
      id: 2,
      category: '관리법',
      title: '다시 재발한 아토피, 현재 어떻게 관리하는지 공유하고자 합니다.',
      view: '180',
      date: '2022-05-21',
    },
  ];

  return (
    <Layout>
      <BoardHeader title={'나만의 관리법'} link="knowhow" />
      <BoardContent posts={posts} />
    </Layout>
  );
}

export default Knowhow;
