import styled from '@emotion/styled';

import PostContent from '@community/PostContent';
import PostComment from '@community/PostComment';

import { Subhead3 } from '@styles/FontStyle';
import { main, gray02, gray06, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 874px;

  margin: 79px 523px 115px;

  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.header`
  width: 100%;
  padding-bottom: 23px;

  ${Subhead3}

  color : ${text_black};
  border-bottom: 3px solid ${gray06};
`;

function Sample() {
  const post = {
    category: '관리법',
    title: '나아진 경험 공유해요!',
    tag: '기타',
    name: '아토랑',
    level: '새싹',
    view: '217',
    date: '2022.05.01',
    since: '8년',
    severity: '4',
    like: '104',
    content:
      '아토피를 얻은 지도 12년 째... 지겨웠던 아토피와의 싸움이 그래도 나아지기 시작하네요\n\n1주일에 3번 30분씩 밖에서 뛰고 온 지 벌써 1달, 전보다 확실히 피부 발진이 줄어든 게 느껴지네요.\n평소에 면역 억제제를 먹으면 피부는 가라앉아도 몸이 으슬으슬해지는 느낌이었는데, 이번에는 그런 거 없이 빈도가 줄어든 것 같아요!\n\n아직은 더 지켜봐야겠지만, 반드시 나아질 거라는 희망을 갖고 더 운동을 해 보려 합니다.\n\n다른 분들도 모두 화이팅하세요!',
  };
  const comment = {
    commentLength: 20,
    comments: [
      {
        id: 0,
        name: '토피토피',
        level: '새싹',
        content:
          '좋은 경험 공유 감사드려요~ 저도 아토피 10년차라 그런지 힘들다는 말투에서 공감 갔어요... 이번에는 꼭 나아질 거에요!',
        like: '18',
        date: '3일전',
      },
      {
        id: 1,
        name: '아토랑',
        level: '새싹',
        content: '감사합니다, 토피토피님!',
        like: '2',
        date: '1일전',
      },
      {
        id: 2,
        name: '아토랑',
        level: '새싹',
        content: '토피토피님도 곧 나아지길 겁니다!',
        like: '5',
        date: '1일전',
      },
      {
        id: 3,
        name: '토피토피',
        level: '새싹',
        content:
          '좋은 경험 공유 감사드려요~ 저도 아토피 10년차라 그런지 힘들다는 말투에서 공감 갔어요... 이번에는 꼭 나아질 거에요!',
        like: '3',
        date: '3일전',
      },
    ],
  };

  return (
    <Layout>
      <ContentHeader>커뮤니티 &#xE001; 나만의 관리법</ContentHeader>
      <PostContent post={post} />
      <PostComment comment={comment} />
    </Layout>
  );
}

export default Sample;
