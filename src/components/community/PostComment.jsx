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

function PostComment(props) {
  const { comment } = props;

  return (
    <Layout>
      <Row>
        <CommentLength>댓글 {comment.length}</CommentLength>
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
        {comment.map(({ author, content, createdAt, likeCounter, index }) => (
          <CommentRow
            key={index}
            name={author}
            level={`새싹`}
            content={content}
            like={likeCounter}
            date={createdAt}
            reply={false}
          />
        ))}
      </CommentArea>
    </Layout>
  );
}

export default PostComment;
