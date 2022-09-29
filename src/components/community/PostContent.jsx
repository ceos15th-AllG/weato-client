/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import PostTag from '@community/PostTag';
import Tag from '@common/Tag';
import LevelProfile from '@common/LevelProfile';
import ActionButton from '@common/ActionButton';
import OptionButton from '@community/OptionButton';

import { Subhead4, Body1, Body2, Tag1 } from '@styles/FontStyle';
import { gray04, gray05, gray06, text_black } from '@styles/Colors';

import profile_sample_big from '@public/profile_sample_big.png';
import icon_gray_views from '@public/icon_gray_views.png';

const toKoreanTypes = { MANAGEMENT: '관리법', QUESTION: '질문' };
const toKoreanTags = {
  DRUG: '약품',
  SLEEP: '수면',
  CLEANING: '세면',
  FOOD: '음식',
  ENVIRONMENT: '환경',
  OTHERWISE: '기타',
};
const levelDict = { 1: '새싹', 2: '일반', 3: '우수', 4: '베스트' };
const severityDict = {
  SLIGHT: '약함',
  BELOWAVG: '평균 이하',
  ABOVEAVG: '평균 이상',
  SEVERETY: '강함',
};

const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  padding-bottom: 24px;

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

const OptionButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 24px;

  width: 40px;
  height: 40px;
`;

function PostContent({ id, post }) {
  const { token } = useContext(Context);
  const router = useRouter();

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

  const onClickDelete = async (event) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `https://www.weato.kro.kr/api/posts/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // router.back();
      router.replace(`/community/board`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Layout>
      <Row>
        <Box>
          <PostTag text={toKoreanTypes[post.boardType]} />
          <Title>{post.title}</Title>
        </Box>
        <Tag text={toKoreanTags[post.tagType]} />
      </Row>

      <Row
        css={css`
          margin-top: 18px;
          padding-bottom: 22px;
          border-bottom: 1px solid ${gray04};
        `}
      >
        <Box>
          {/* <Image src={profile_sample_big} width={42} height={42} alt="" /> */}
          <LevelProfile level={post.authorLevel} width={42} />
          <Level>{`${levelDict[post.authorLevel]} •`}</Level>
          <Name>{post.author}</Name>
          <Since>병력: {`${post.medicalHistory}년`}</Since>
          <Severity>정도: {severityDict[post.symptomDegree]}</Severity>
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
    </Layout>
  );
}

export default PostContent;
