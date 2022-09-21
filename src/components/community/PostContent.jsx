/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import Image from 'next/image';

import Context from '@contexts/Context';

import PostTag from '@community/PostTag';
import Tag from '@common/Tag';
import ActionButton from '@common/ActionButton';

import { Subhead4, Body1, Body2, Tag1 } from '@styles/FontStyle';
import { gray04, gray05, gray06, text_black } from '@styles/Colors';

import profile_sample_big from '@public/profile_sample_big.png';
import icon_gray_views from '@public/icon_gray_views.png';

const Layout = styled.div`
  margin-top: 30px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${gray04};
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

const Title = styled.span`
  margin-left: 17px;

  ${Subhead4}

  color : ${text_black};
`;

const Level = styled.span`
  margin-left: 11px;

  ${Body1}

  color : ${gray06};
`;

const Name = styled.span`
  margin-left: 6px;

  ${Tag1}

  color : ${gray05};
`;

const Since = styled.span`
  margin-left: 12px;

  ${Tag1}

  color : ${text_black};
`;

const Severity = styled.span`
  margin-left: 17px;

  ${Tag1}

  color : ${text_black};
`;

const SmallText = styled.span`
  ${Body1}

  color : ${gray05};
`;

const ContentText = styled.span`
  margin: 45px 0px 40px;

  ${Body2}

  color : ${text_black};
`;

function PostContent({ id, post }) {
  const { token } = useContext(Context);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    setLike(post.likeChecker);
    setLikeCount(post.likeCount);
  }, []);

  const onClickLike = async (event) => {
    try {
      if (!like) {
        const response = await axios({
          method: 'post',
          url: `https://www.weato.kro.kr/api/posts/${id}/likes`,
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
          url: `https://www.weato.kro.kr/api/posts/${id}/likes`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLike(false);
        setLikeCount(response.data.likecount);
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

  return (
    <Layout>
      <Row>
        <Box>
          <PostTag text={`관리법`} />
          <Title>{post.title}</Title>
        </Box>
        <Tag text={`수면`} />
      </Row>

      <Row
        css={css`
          margin-top: 18px;
          padding-bottom: 22px;
          border-bottom: 1px solid ${gray04};
        `}
      >
        <Box>
          <Image src={profile_sample_big} width={42} height={42} alt="" />
          <Level>{`새싹`}</Level>
          <Name>{post.author}</Name>
          <Since>병력: {`2년`}</Since>
          <Severity>정도: {1}</Severity>
        </Box>
        <Box>
          <Image src={icon_gray_views} width={20} height={13.69} alt="" />
          <SmallText
            css={css`
              margin-left: 5px;
            `}
          >
            {post.views}
          </SmallText>
          <SmallText
            css={css`
              margin-left: 41px;
            `}
          >
            {post.createdAt.slice(0, 10).replaceAll('-', '.')}
          </SmallText>
        </Box>
      </Row>

      <Row>
        <ContentText>
          {post.content.split('\n').map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </ContentText>
      </Row>

      <Row>
        <ActionButton
          btnType="like"
          value={likeCount}
          onClick={onClickLike}
          active={like}
        />
      </Row>
    </Layout>
  );
}

export default PostContent;
