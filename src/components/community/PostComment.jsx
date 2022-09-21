/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import Image from 'next/image';

import Context from '@contexts/Context';

import Button from '@common/ButtonContainer';
import CommentRow from '@community/CommentRow';

import { Subhead3, Subhead4, Body1, Body2, Tag1 } from '@styles/FontStyle';
import { gray03, gray05, gray07, text_black } from '@styles/Colors';

import profile_guest from '@public/profile_guest.png';

const Layout = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
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
  color: ${text_black};
`;

const CommentArea = styled.section`
  display: flex;
  flex-direction: column;
`;

function PostComment(props) {
  const { user, token } = useContext(Context);
  const { postId } = props;
  const [comments, setComments] = useState([]);
  const [myComment, setMyComment] = useState('');
  const [submit, setSubmit] = useState(false);

  console.log(props.comment);

  const onChangeComment = (event) => {
    setMyComment(event.target.value);
  };

  useEffect(() => {
    if (myComment !== '') {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [myComment]);
  useEffect(() => {
    setComments(props.comment);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!submit) {
      return;
    }

    try {
      const submitComment = await axios({
        method: 'post',
        url: `https://www.weato.kro.kr/api/posts/${postId}/comments`,
        headers: {
          Authorization: `Bearer ${token}`,
        },

        data: {
          content: myComment.trim(),
        },
      });

      const getNewComments = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/posts/${postId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setComments(getNewComments.data.comments);
      setMyComment('');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Layout>
      <Row>
        <CommentLength>댓글 {comments.length}</CommentLength>
      </Row>

      <Form onSubmit={onSubmit}>
        <Box
          css={css`
            width: 100%;
            margin-left: 10px;
          `}
        >
          <Image src={profile_guest} width={32} height={32} alt="" />
          <Input
            placeholder="댓글 추가"
            value={myComment}
            onChange={onChangeComment}
          />
        </Box>
        <Button text="등록" btnType="2" disabled={!submit} onClick={onSubmit} />
      </Form>

      <CommentArea>
        {comments.map(
          ({ id, author, content, createdAt, likeCounter }, index) => (
            <CommentRow
              key={index}
              postId={postId}
              commentId={id}
              name={author}
              level={`새싹`}
              content={content}
              like={likeCounter}
              date={createdAt.slice(0, 10)}
              reply={false}
              liked={false}
            />
          )
        )}
      </CommentArea>
    </Layout>
  );
}

export default PostComment;
