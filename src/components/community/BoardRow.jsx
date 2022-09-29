import styled from '@emotion/styled';

import Image from 'next/image';
import Link from 'next/link';

import LevelProfile from '@common/LevelProfile';

import { Subhead3, Body1, Body3, Tag1 } from '@styles/FontStyle';

import { gray05, gray06, text_black, tag_etc } from '@styles/Colors';

import profile_sample from '@public/profile_sample.png';
import icon_gray_views from '@public/icon_gray_views.png';
import icon_color_heart from '@public/icon_color_heart.png';
import icon_blank_heart from '@public/icon_blank_heart.png';

const Layout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const SmallText = styled.span`
  ${Subhead3};

  color: ${gray05};
`;

const Title = styled.span`
  margin-top: 10px;

  ${Body3}

  color:  ${text_black};
`;

const Row = styled.div`
  margin: 20px 0px;
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
  width: 53px;

  margin-left: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .counter-value {
    margin-left: 6px;
  }
`;

function BoardRow(props) {
  const { id, boardType, title, level, author, views, likeCounter } = props;

  const dict = {
    MANAGEMENT: '관리법',
    QUESTION: '질문',
  };
  const levelDict = { 1: '새싹', 2: '일반', 3: '우수', 4: '베스트' };

  return (
    <Link href={`/community/post/${id}`}>
      <a>
        <Layout>
          <SmallText>{dict[boardType]}</SmallText>
          <Title>{title}</Title>
          <Row>
            <Box>
              <LevelProfile level={level} width={24} />
              {/* <Image src={profile_sample} width={24} height={24} alt="" /> */}
              <Level>{`${levelDict[level]} •`}</Level>
              <Name>{author}</Name>
            </Box>
            <Box>
              <SmallBox>
                <Image src={icon_gray_views} width={20} height={13.69} alt="" />
                <SmallText className="counter-value">{views}</SmallText>
              </SmallBox>
              <SmallBox>
                <Image src={icon_color_heart} width={16} height={14} alt="" />
                <SmallText className="counter-value">{likeCounter}</SmallText>
              </SmallBox>
            </Box>
          </Row>
        </Layout>
      </a>
    </Link>
  );
}

export default BoardRow;
