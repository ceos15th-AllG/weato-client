import styled from '@emotion/styled';

import { useEffect } from 'react';

import Button from '@common/ButtonContainer';
import TabBar from '@community/TabBar';
import BoardRow from '@community/BoardRow';
import BoardCard from '@community/BoardCard';

import { Display1, Subhead4 } from '@styles/FontStyle';
import { text_black } from '@styles/Colors';

const Layout = styled.div`
  margin: 39px 300px 67px;

  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoardLayout = styled.div`
  width: 762px;

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

const BlurBox = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  position: fixed;
  bottom: 0;
  z-index: 1000;

  display: flex;
  align-items: flex-end;

  .content {
    z-index: 1100;

    width: 100%;
    height: 74%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    backdrop-filter: blur(12px);

    background: linear-gradient(to bottom, transparent 0%, #666666 100%);
  }

  .text {
    margin: 216px 0px 25px;

    ${Display1}

    color : ${text_black};
  }
`;

function JoinUs() {
  const sampleData = [
    {
      id: 0,
      title: '아토피 이제 괜찮아졌어요',
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 1,
      title: '아토피 이제 괜찮아졌어요',
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 2,
      title: '아토피 이제 괜찮아졌어요',
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 3,
      title: '아토피 이제 괜찮아졌어요',
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 4,
      title: '아토피 이제 괜찮아졌어요',
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 5,
      title: '아토피 이제 괜찮아졌어요',
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
  ];
  const recommends = [
    {
      id: '0',
      title: '아토피 이제 괜찮아졌어요',
      content:
        '아토피 이제 괜찮아졌어요. 아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.',
      view: '200',
      like: '200',
    },
    {
      id: '1',
      title: '아토피 이제 괜찮아졌어요',
      content:
        '아토피 이제 괜찮아졌어요. 아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.아토피 이제 괜찮아졌어요.',
      view: '200',
      like: '200',
    },
  ];

  // 스크롤 방지
  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed;
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = '';
  //     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  //   };
  // }, []);

  return (
    <>
      <BlurBox>
        <div className="content">
          <span className="text">
            위아토 회원이 되어 더 많은 정보를 얻어보세요!
          </span>
          <Button text="회원가입 하러가기" btnType="4" href={`/login`} />
        </div>
      </BlurBox>

      <Layout>
        <TabBar selected="hot" />
        <Row>
          <BoardLayout>
            {sampleData.map(
              ({ id, title, author, views, likeCounter, boardType }) => (
                <BoardRow
                  key={id}
                  id={id}
                  title={title}
                  boardType={boardType}
                  views={views}
                  likeCounter={likeCounter}
                  author={author}
                  // level={level}
                />
              )
            )}
          </BoardLayout>

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
    </>
  );
}

export default JoinUs;
