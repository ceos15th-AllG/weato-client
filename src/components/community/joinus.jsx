import styled from '@emotion/styled';

import { useState, useEffect } from 'react';

import Button from '@common/ButtonContainer';
import TabBar from '@community/TabBarMockup';
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
  row-gap: 24px;

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
    height: 72.5%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    backdrop-filter: blur(10px);

    background: linear-gradient(to bottom, transparent 0%, #666666 100%);
  }

  .text {
    margin: 216px 0px 25px;

    ${Display1}

    color : ${text_black};
  }
`;

function JoinUs() {
  const [tagSelected, setTagSelected] = useState('태그');
  const tagTypes = ['전체', '약품', '수면', '세면', '음식', '환경', '기타'];

  const sampleData = [
    {
      id: 0,
      title: '아토피 이제 괜찮아졌어요',
      level: 1,
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 1,
      title: '아토피 이제 괜찮아졌어요',
      level: 1,
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 2,
      title: '아토피 이제 괜찮아졌어요',
      level: 1,
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 3,
      title: '아토피 이제 괜찮아졌어요',
      level: 1,
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 4,
      title: '아토피 이제 괜찮아졌어요',
      level: 1,
      author: '아토랑',
      views: 200,
      likeCounter: 200,
      boardType: 'MANAGEMENT',
    },
    {
      id: 5,
      title: '아토피 이제 괜찮아졌어요',
      level: 1,
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'scroll');
  }, []);

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
        <TabBar
          selected="hot"
          tagSelected={tagSelected}
          tagTypes={tagTypes}
          setTagSelected={setTagSelected}
        />
        <Row>
          <BoardLayout>
            {sampleData.map(
              ({ id, title, level, author, views, likeCounter, boardType }) => (
                <BoardRow
                  key={id}
                  id={id}
                  title={title}
                  boardType={boardType}
                  views={views}
                  likeCounter={likeCounter}
                  level={level}
                  author={author}
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
