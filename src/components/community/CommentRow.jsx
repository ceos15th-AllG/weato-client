import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import OptionButton from '@community/OptionButton';

import { Subhead3, Subhead4, Body1, Body2, Tag1 } from '@styles/FontStyle';
import { gray01, gray03, gray05, gray06, text_black } from '@styles/Colors';

import profile_sample_big from '@public/profile_sample_big.png';
import icon_color_heart from '@public/icon_color_heart.png';
import icon_blank_heart from '@public/icon_blank_heart.png';
import icon_reply_comment from '@public/icon_reply_comment.png';

const Layout = styled.div`
  width: 100%;

  padding-top: 21px;
  padding-bottom: 34px;
  padding-left: ${(props) => `${props.reply ? '74px' : '0px'}`};
  padding-right: 0px;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${gray03};

  background-color: ${(props) => `${props.reply ? gray01 : 'transparent'}`};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;

  .reply-text {
    width: 40px;

    margin-right: 8px;

    ${Body1}

    color : ${gray06};
  }

  .like-text {
    width: 40px;

    margin-left: 8px;
    margin-right: 16px;

    ${Subhead3}

    color : ${gray05};
  }
`;

const ReplyBlock = styled.div`
  position: relative;
  top: 100px;
`;

const Name = styled.span`
  margin-left: 10px;

  ${Subhead4}

  color : ${text_black};
`;

const Date = styled.span`
  margin-left: 7px;

  ${Body1}

  color : ${gray06};
`;

const Content = styled.span`
  width: 775px;

  margin-left: 52px;

  ${Body2}

  color : ${text_black};
`;

const LikeButton = styled.div`
  width: 20px;
  height: 18px;
`;

const OptionButtonContainer = styled.div`
  position: absolute;
  right: 520px;

  width: 40px;
  height: 40px;
`;

const CommentRow = ({
  postId,
  commentId,
  name,
  level,
  content,
  date,
  reply,
  isAuthor,
  likeChecker,
  likeCounter,
  setComments,
}) => {
  const { token } = useContext(Context);
  const router = useRouter();

  const [like, setLike] = useState(likeChecker);
  const [likeCount, setLikeCount] = useState(likeCounter);

  const onClickLike = async (event) => {
    try {
      if (!like) {
        const response = await axios({
          method: 'post',
          url: `https://www.weato.kro.kr/api/posts/${postId}/comments/${commentId}/likes`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLike(true);
        setLikeCount(response.data.likecount);
        // alert('좋아요 완료');
      } else {
        const response = await axios({
          method: 'delete',
          url: `https://www.weato.kro.kr/api/posts/${postId}/comments/${commentId}/likes`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLike(false);
        setLikeCount(response.data.likeCount);
        // alert('좋아요 취소 완료');
      }
    } catch (error) {
      if (error.response.status === 400) {
        setLike(!like);
      } else {
        alert(error);
      }
    }
  };

  const onClickDelete = async (event) => {
    try {
      const deleteComment = await axios({
        method: 'delete',
        url: `https://www.weato.kro.kr/api/posts/${postId}/comments/${commentId}`,
        headers: {
          Authorization: `Bearer ${token}`,
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
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Layout reply={reply}>
      {/* <ReplyBlock>
        <Image src={icon_reply_comment} width={16} height={16} alt=''/>
      </ReplyBlock> */}
      <Row>
        <Box>
          <Image src={profile_sample_big} width={42} height={42} alt="" />
          <Name>{name}</Name>
          <Date>{date}</Date>
        </Box>
        <Box>
          <span
            className="reply-text"
            onClick={(event) => {
              alert('답글 기능 연결 중..');
            }}
          >
            답글
          </span>
          <LikeButton onClick={onClickLike}>
            <Image src={like ? icon_color_heart : icon_blank_heart} alt="" />
          </LikeButton>
          <span className="like-text">{likeCount}</span>
        </Box>

        {isAuthor && (
          <OptionButtonContainer>
            <OptionButton
              options={[
                {
                  label: '수정',
                  action: () => {
                    alert('수정 기능 연결 중...');
                  },
                },
                {
                  label: '삭제',
                  action: onClickDelete,
                },
              ]}
            />
          </OptionButtonContainer>
        )}
      </Row>

      <Row>
        <Content>
          {content.split('\n').map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </Content>
      </Row>
    </Layout>
  );
};

export default CommentRow;
