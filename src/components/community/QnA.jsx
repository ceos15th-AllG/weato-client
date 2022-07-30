import styled from '@emotion/styled';

import { useState } from 'react';

import BoardHeader from './BoardHeader';

import { Subhead3, Body2 } from '../../../styles/FontStyle';

import { gray04, text_black } from '../../../styles/Colors';

const Layout = styled.div`
  width: 100%;

  margin-top: 80px;

  display: flex;
  flex-direction: column;
`;

const MenuClosed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 31px;
  margin-bottom: 30px;

  border-bottom: 1px solid ${gray04};
`;

const MenuOpened = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;
`;

const Question = styled.span`
  ${Subhead3}

  color : ${text_black};
`;

const BtnMore = styled.span`
  ${Subhead3}

  color : ${text_black};
`;

const Answer = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-bottom: 31px;
  margin-bottom: 30px;

  border-bottom: 1px solid ${gray04};

  ${Body2}

  color : ${text_black};
`;

const QnA = () => {
  const { qnaActive, setQnaActive } = useState([
    true,
    false,
    false,
    false,
    true,
  ]);
  const qnas = [
    {
      question: '커뮤니티에는 어떤 글들을 공유하나요?',
      answer: '아무 글',
      active: false,
    },
    {
      question: '어디까지 제 경험을 공유할 수 있는 건가요?',
      answer: '전부 ㄱ',
      active: true,
    },
    {
      question: '어떤 형태로 게시글을 작성하면 될까요?',
      answer: '맘대로',
      active: false,
    },
    {
      question: '포인트는 어떻게 모을 수 있나요?',
      answer: '열심히',
      active: false,
    },
    {
      question: '등급이 높으면 어떤 혜택이 있나요?',
      answer: '질문',
      active: false,
    },
  ];

  console.log('변수의 상태', qnaActive);

  return (
    <Layout>
      <BoardHeader title={'Q&A'} />

      {qnas.map(({ question, answer, active, index }) =>
        active ? (
          <>
            <MenuOpened key={index}>
              <Question>Q. 사랑해요 솔빙~~~~</Question>
              <BtnMore
                onClick={(event) => {
                  alert(event);
                }}
              >
                ^ v ^
              </BtnMore>
            </MenuOpened>
            <Answer>나두 사랑해요~~~</Answer>
          </>
        ) : (
          <MenuClosed key={index}>
            <Question>Q. {question}</Question>
            <BtnMore
              onClick={(event) => {
                alert(event);
              }}
            >
              답변 보기 &#xE001;
            </BtnMore>
          </MenuClosed>
        )
      )}
    </Layout>
  );
};

export default QnA;
