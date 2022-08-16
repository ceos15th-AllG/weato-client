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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

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
      answer:
        '아토피 환우 분들의 관리 경험을 주로 공유합니다! 사람마다 그 관리 형태가 다른 아토피는 유효했던 관리법도 다양하기 때문에 그런 경험을 공유하기 위한 공간입니다!\n뿐만 아니라, 특정 방법에 대해 질문도 올려 일상 관리 경험에 대해 서로 도움을 줄 수 있는 공간으로 활용하고자 합니다!',
      active: false,
    },
    {
      id: 1,
      question: '어디까지 제 경험을 공유할 수 있는 건가요?',
      answer:
        '성공한 경험도 좋지만 본인에게 안 맞았거나 효과가 없던 방법에 대한 공유도 괜찮습니다!\n그러한 게시글을 작성할 때 해당 관리법을 <어떻게 알게 되었는지>, <적용한 기간은 얼마 정도 되는지>, <실제로 증상이 어느 정도 호전되었는지>를 반드시 포함해서 작성해주세요! 성공 경험뿐만 아니라 효과가 없던 방법도 위의 내용들을 포함해 작성해주시면 됩니다!',
      active: false,
    },
    {
      id: 2,
      question: '어떤 형태로 게시글을 작성하면 될까요?',
      answer:
        '현재 저희 Weato 내 커뮤니티는 크게 관리경험과 질문 게시글로 나뉘고 있습니다. 게시글 작성 시 이걸 나눠서 선택해주시고, 작성하시는 게시글의 일상 영역을 선택해주시면 되겠습니다.\n게시글 영역은 수면/세면/음식/환경/기타로 나뉘어져있습니다! 이 중 운동이나 의류, 감정 관리 등 해당하는 영역이 없을 때 기타를 작성해주시면 되겠습니다~\n단, 아쉽게도 약품에 대한 내용을 작성하는 것은 현재로써는 불가능합니다. 저희 역시 약품에 대한 경험을 서로 공유할 수 있는 공간을 만들어 드리고 싶은 마음은 크지만 현재 저희 팀의 상황으로는 해당 내용을 다루기는 불가하다는 점에 양해 부탁드립니다.',
      active: false,
    },
    {
      id: 3,
      question: '포인트는 어떻게 모을 수 있나요?',
      answer:
        '여러가지 활동 만으로도 포인트는 쌓입니다! 하루마다 홈페이지에 방문 해 주시거나 게시글 작성 혹은 뉴스레터 서비스를 이용하시는 경우에도 포인트는 꾸준히 쌓입니다.\n자세한 내용은 저희 웹 페이지 하단의 공간을 클릭해 규정 란을 확인해주시면 되겠습니다!',
      active: false,
    },
    {
      id: 4,
      question: '등급이 높으면 어떤 혜택이 있나요?',
      answer:
        '아쉽게도 현재로써는 바로 이용자 분들에게 드리는 혜택은 없습니다.\n그러나 추후 환우분들에게 도움이 되는 서비스를 제공하게 될 때 할인, 이용권 제공과 같이 등급에 알맞은 혜택을 드릴 계획 중이니 꾸준한 참여로 등급을 관리해 주신다면 환우 분들을 위한 Weato 운영에 큰 도움이 될 것임을 확답드리도록 하겠습니다!',
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
                숨기기 &#xE001;
              </BtnMore>
            </MenuOpened>
            <Answer>
              {answer.split('\n').map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                    <br />
                  </span>
                );
              })}
            </Answer>
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
