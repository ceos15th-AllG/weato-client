import styled from '@emotion/styled';

import { Subhead4 } from '@styles/FontStyle';

import { text_black } from '@styles/Colors';

import TabBar from '@community/TabBar';
import BoardRow from '@community/BoardRow';
import BoardCard from '@community/BoardCard';
import Pagenator from '@common/Pagenator';

const Layout = styled.div`
  margin: 39px 300px 67px;

  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Board = styled.div`
  margin-top: 51px;

  display: flex;
  flex-direction: column;
`;

const BoardRecommend = styled.div`
  margin-top: 59px;

  width: 427px;

  display: flex;
  flex-direction: column;
`;

const BoardRecommendHeader = styled.span`
  ${Subhead4}

  color :${text_black};
`;

const BottomRow = styled.div`
  margin-top: 22px;

  display: flex;
  justify-content: center;
`;

function Knowhow() {
  const contents = [
    {
      id: '0',
      category: '관리법',
      title: '밖에 나갈 때 신경 쓰이는데 어떤 옷을 입어야 하나요?',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '1',
      category: '관리법',
      title: '다시 재발한 아토피, 현재 어떻게 관리하는지 공유하고자 합니다.',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '2',
      category: '관리법',
      title: '다시 재발한 아토피, 현재 어떻게 관리하는지 공유하고자 합니다.',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '3',
      category: '관리법',
      title: '스트레스 때문에 아토피도 같이 안 좋아지나요?',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '4',
      category: '관리법',
      title: '아토피 걸리면 고기도 먹지 말아야 하나요?',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
  ];

  const recommends = [
    {
      id: '0',
      title: '아토피 이제 괜찮아졌어요',
      content: '이 부분은 내용입니다.',
      view: '200',
      like: '200',
    },
    {
      id: '1',
      title: '아토피 이제 괜찮아졌어요',
      content:
        '이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. ',
      view: '200',
      like: '200',
    },
  ];

  return (
    <Layout>
      <TabBar selected="knowhow" />
      <Row>
        <Board>
          {contents.map(({ id, category, title, view, like, name, level }) => (
            <BoardRow
              key={id}
              category={category}
              title={title}
              view={view}
              like={like}
              name={name}
              level={level}
            />
          ))}

          <BottomRow>
            <Pagenator currnet={3} />
          </BottomRow>
        </Board>
        <BoardRecommend>
          <BoardRecommendHeader>실시간 추천글</BoardRecommendHeader>
          {recommends.map(({ id, title, content, view, like }) => (
            <BoardCard
              key={id}
              title={title}
              content={content}
              view={view}
              like={like}
            />
          ))}
        </BoardRecommend>
      </Row>
    </Layout>
  );
}

export default Knowhow;
