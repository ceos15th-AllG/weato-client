import styled from '@emotion/styled';

import Image from 'next/image';

import { Subhead3, Subhead4, Body2, Tag1 } from '@styles/FontStyle';

import { gray05, gray07, text_black, tag_etc } from '@styles/Colors';

import icon_gray_views from '@public/icon_gray_views.png';
import icon_color_heart from '@public/icon_color_heart.png';

const Layout = styled.div`
  height: 280px;

  padding: 31px 20px 18px 27px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 12px;
  border: 1px solid ${tag_etc};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  ${Subhead4}

  color: ${gray07};
`;

const Content = styled.span`
  margin-top: 18px;

  ${Body2}

  color: ${text_black};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

const SmallText = styled.span`
  ${Subhead3}

  color:  ${gray05};
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SmallBox = styled.div`
  width: 53px;

  margin-left: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .counter-value {
    margin-left: 6px;
  }
`;

function BoardCard({ title, content, view, like }) {
  return (
    <Layout>
      <Box>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Box>
      <Row>
        <SmallBox>
          <Image src={icon_gray_views} width={20} height={13.69} alt="" />
          <SmallText className="counter-value">{view}</SmallText>
        </SmallBox>
        <SmallBox>
          <Image src={icon_color_heart} width={16} height={14} alt="" />
          <SmallText className="counter-value">{like}</SmallText>
        </SmallBox>
      </Row>
    </Layout>
  );
}

export default BoardCard;
