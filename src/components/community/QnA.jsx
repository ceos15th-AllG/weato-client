import styled from '@emotion/styled';

import { useState } from 'react';

import BoardHeader from '@community/BoardHeader';

import { Subhead3, Body2 } from '@styles/FontStyle';

import { gray04, text_black } from '@styles/Colors';

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
  const [qnas, setQnas] = useState([
    {
      id: 0,
      question: '커뮤니티에는 어떤 글들을 공유하나요?',
      answer: '아무 글',
      active: true,
    },
    {
      id: 1,
      question: '어디까지 제 경험을 공유할 수 있는 건가요?',
      answer: '전부 ㄱ',
      active: false,
    },
    {
      id: 2,
      question: '어떤 형태로 게시글을 작성하면 될까요?',
      answer: '맘대로',
      active: false,
    },
    {
      id: 3,
      question: '포인트는 어떻게 모을 수 있나요?',
      answer: '열심히',
      active: false,
    },
    {
      id: 4,
      question: '등급이 높으면 어떤 혜택이 있나요?',
      answer: '질문',
      active: false,
    },
  ]);

  const toggleActive = (id) => {
    setQnas(
      qnas.map((qna) =>
        // qna.index === index ? { ...qna, active: !qna.active } : qna
        qna.id === id ? { ...qna, active: !qna.active } : qna
      )
    );
  };

  return (
    <Layout>
      <BoardHeader title={'Q&A'} />

      {qnas.map(({ id, question, answer, active }) =>
        active ? (
          <div key={id}>
            <MenuOpened>
              <Question>Q. {question}</Question>
              <BtnMore
                onClick={() => {
                  toggleActive(id);
                }}
              >
                ^ v ^
              </BtnMore>
            </MenuOpened>
            <Answer>{answer}</Answer>
          </div>
        ) : (
          <MenuClosed key={id}>
            <Question>Q. {question}</Question>
            <BtnMore
              onClick={() => {
                toggleActive(id);
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
