import styled from '@emotion/styled';

import Link from 'next/link';
import Image from 'next/image';

import { Subhead3, Body1, Body3, Tag1 } from '@styles/FontStyle';

import { gray05, gray06, text_black, tag_etc } from '@styles/Colors';

import profile_sample from '@public/profile_sample.png';
import icon_gray_views from '@public/icon_gray_views.png';
import icon_color_heart from '@public/icon_color_heart.png';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;
`;

const SmallText = styled.span`
  ${Subhead3}

  color:  ${gray05};
`;

const Title = styled.span`
  margin-top: 10px;

  ${Body3}

  color:  ${text_black};
`;

const Row = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${tag_etc};
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Level = styled.span`
  margin-left: 13px;

  ${Body1}

  color: ${gray06};
`;

const Name = styled.span`
  margin-left: 6px;

  ${Tag1}

  color: ${gray05};
`;

const SmallBox = styled.div`
  margin-left: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: 8px;
  }
`;

function BoardRow({ category, title, view, like, name, level }) {
  const categoryDict = {
    MANAGEMENT: '관리법',
    QUESTION: '질문',
  };

  return (
    <Layout>
      <SmallText>{categoryDict[category]}</SmallText>
      <Title>{title}</Title>
      <Row>
        <Box>
          <Image src={profile_sample} width={24} height={24} alt="" />
          <Level>{level}</Level>
          <Name>{name}</Name>
        </Box>
        <Box>
          <SmallBox>
            <Image src={icon_gray_views} width={20} height={13.69} alt="" />
            <SmallText>{view}</SmallText>
          </SmallBox>
          <SmallBox>
            <Image src={icon_color_heart} width={16} height={14} alt="" />
            <SmallText>{like}</SmallText>
          </SmallBox>
        </Box>
      </Row>
    </Layout>
  );
}

export default BoardRow;
