/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';

import PostTag from './PostTag';
import Tag from '../common/Tag';
import HeartButton from './ButtonContainer';

import { Subhead4, Body1, Body2, Tag1 } from '../../../styles/FontStyle';
import { gray04, gray05, gray06, text_black } from '../../../styles/Colors';

import profile_sample_big from '../../../public/profile_sample_big.png';
import icon_gray_views from '../../../public/icon_gray_views.png';

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

function PostContent({ post }) {
  return (
    <Layout>
      <Row>
        <Box>
          <PostTag text={post.category} />
          <Title>{post.title}</Title>
        </Box>
        <Tag text={post.tag} />
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
          <Level>{post.level}</Level>
          <Name>{post.name}</Name>
          <Since>병력: {post.since}</Since>
          <Severity>정도: {post.severity}</Severity>
        </Box>
        <Box>
          <Image src={icon_gray_views} width={20} height={13.69} alt="" />
          <SmallText
            css={css`
              margin-left: 5px;
            `}
          >
            {post.view}
          </SmallText>
          <SmallText
            css={css`
              margin-left: 41px;
            `}
          >
            {post.date}
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
        <HeartButton value={post.like} btnType={'heart'} />
      </Row>
    </Layout>
  );
}

export default PostContent;
