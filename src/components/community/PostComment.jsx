/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';

import Button from '@common/ButtonContainer';
import CommentRow from '@community/CommentRow';

import { Subhead3, Subhead4, Body1, Body2, Tag1 } from '@styles/FontStyle';
import { gray03, gray05, gray07, text_black } from '@styles/Colors';

import profile_guest from '@public/profile_guest.png';

const Layout = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  /* background-color: #fa555533; */
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const CommentLength = styled.span`
  margin-bottom: 25px;

  ${Subhead3}

  color: ${gray07};
`;

const Form = styled.form`
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 13px;

  border-radius: 8px;
  border: 1px solid ${gray03};
`;

const Input = styled.input`
  width: 100%;

  margin: 0px 9.76px;

  ${Subhead3}

  outline: none;
  border: none;

  background-color: transparent;
  color: ${gray05};
`;

const CommentArea = styled.section`
  display: flex;
  flex-direction: column;
`;

function PostComment() {
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
        reply: false,
      },
      {
        id: 1,
        name: '아토랑',
        level: '새싹',
        content: '감사합니다, 토피토피님!',
        like: '2',
        date: '1일전',
        reply: true,
      },
      {
        id: 2,
        name: '아토랑',
        level: '새싹',
        content: '토피토피님도 곧 나아지길 겁니다!',
        like: '5',
        date: '1일전',
        reply: true,
      },
      {
        id: 3,
        name: '토피토피',
        level: '새싹',
        content:
          '좋은 경험 공유 감사드려요~ 저도 아토피 10년차라 그런지 힘들다는 말투에서 공감 갔어요... 이번에는 꼭 나아질 거에요! 그런데 저는 이게 궁금해지네요.... 댓글이 얼마나 길어질 수 있을지 작성하다가 궁금해지기도 했구요... 이렇게 문장 중간에\n\n\n줄바꿈 문자가 들어가면 어떻게 될까요??',
        like: '3',
        date: '3일전',
        reply: false,
      },
    ],
  };

  return (
    <Layout>
      <Row>
        <CommentLength>댓글 {comment.commentLength}</CommentLength>
      </Row>

      <Form>
        <Box
          css={css`
            width: 100%;
            margin-left: 10px;
          `}
        >
          <Image src={profile_guest} width={32} height={32} alt="" />
          <Input placeholder="댓글 추가" />
        </Box>
        <Button text="등록" btnType="2" />
      </Form>

      <CommentArea>
        {comment.comments.map(
          ({ id, name, level, content, like, date, reply }) => (
            <CommentRow
              key={id}
              name={name}
              level={level}
              content={content}
              like={like}
              date={date}
              reply={reply}
            />
          )
        )}
      </CommentArea>
    </Layout>
  );
}

export default PostComment;
