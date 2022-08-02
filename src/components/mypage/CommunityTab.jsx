/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Link from 'next/link';

import BoardRow from './BoardRow';
import Pagenator from '../common/Pagenator';

import {
  Display1,
  Headline1,
  Subhead4,
  Body3,
} from '../../../styles/FontStyle';

import { gray04, gray06, text_black } from '../../../styles/Colors';

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
  margin-top: 23px;

  display: flex;
  flex-direction: column;
`;

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
`;

function CommunityTab() {
  const basicData = {
    level: '새싹',
    currentPoint: 20,
    nextLevel: 100,
  };

  const communityData = [
    {
      id: '0',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '1',
      category: '질문',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '2',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '3',
      category: '질문',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '4',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
  ];

  return (
    <Layout>
      <Row>
        <Header>회원정보</Header>
      </Row>

      <SubHeader>기본 정보</SubHeader>
      <InfoBox>
        <InfoName>레벨</InfoName>
        <InfoData>{basicData.level}</InfoData>
      </InfoBox>
      <InfoBox>
        <InfoName>포인트</InfoName>
        <InfoData>
          {basicData.currentPoint}/{basicData.nextLevel}
        </InfoData>
      </InfoBox>

      <SubHeader
        css={css`
          margin-top: 149px;
        `}
      >
        나의 작성글
      </SubHeader>
      <Board>
        {communityData.map(
          ({ id, category, title, view, like, name, level }) => (
            <BoardRow
              key={id}
              category={category}
              title={title}
              view={view}
              like={like}
              name={name}
              level={level}
            />
          )
        )}
      </Board>

      <CenterBox>
        <Pagenator />
      </CenterBox>
    </Layout>
  );
}

export default CommunityTab;
