/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Link from 'next/link';
import { useRouter } from 'next/router';

import BoardRow from '@community/BoardRow';
import Pagenator from '@common/Pagenator';

import { Display1, Headline1, Subhead4, Body3 } from '@styles/FontStyle';
import { gray04, gray06, text_black } from '@styles/Colors';

const Level = { 1: '새싹', 2: '일반', 3: '우수', 4: '베스트' };

const toBoardType = {
  MANAGEMENT: '관리법',
  QUESTION: '질문',
};

const Layout = styled.div`
  margin: 42px 300px 151px;

  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  margin-bottom: 43px;

  ${Display1}

  color : ${text_black};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SubHeader = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;

  ${Headline1}

  color : ${text_black};

  border-top: 3px solid ${gray06};
  border-bottom: 1px solid ${gray04};
`;

const InfoBox = styled.section`
  margin-top: 38px;

  display: flex;
  align-items: center;
`;

const InfoName = styled.div`
  width: 224px;

  display: flex;
  justify-content: flex-start;

  ${Body3}

  color : ${text_black};
`;

const InfoData = styled.div`
  ${Subhead4}

  color : ${text_black};

  display: flex;
`;

const Board = styled.div`
  margin: 23px 0px 23px;

  display: flex;
  flex-direction: column;
`;

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
`;

function CommunityTab({ query, basicData, data }) {
  const router = useRouter();

  const { page } = query;
  const { min, max } = data;

  return (
    <Layout>
      <Row>
        <Header>커뮤니티 정보</Header>
      </Row>

      <SubHeader>기본 정보</SubHeader>
      <InfoBox>
        <InfoName>레벨</InfoName>
        <InfoData>{Level[basicData.level]}</InfoData>
      </InfoBox>
      <InfoBox>
        <InfoName>포인트</InfoName>
        <InfoData>
          {basicData.currentExp}/{basicData.requiredExp}
        </InfoData>
      </InfoBox>

      <SubHeader
        css={css`
          margin-top: 149px;
        `}
      >
        나의 작성글 ({data.data.length})
      </SubHeader>
      <Board>
        {data.data.map(
          (
            { id, boardType, title, level, author, views, likeCounter },
            index
          ) => (
            <BoardRow
              key={index}
              id={id}
              boardType={boardType}
              title={title}
              level={level}
              author={author}
              views={views}
              likeCounter={likeCounter}
            />
          )
        )}
      </Board>

      <CenterBox>
        <Pagenator
          path={router.pathname}
          query={query}
          min={min}
          max={max}
          current={page}
        />
      </CenterBox>
    </Layout>
  );
}

export default CommunityTab;
