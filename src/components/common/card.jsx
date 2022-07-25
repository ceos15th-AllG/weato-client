// Card 스타일 관리

import styled from '@emotion/styled';
import { gray07 } from '../../../styles/Colors';

import { Headline1, Body2 } from '../../../styles/FontStyle';

import Tag from './Tag';

const CardLayout = styled.section`
  width: 315px;
  height: 315px;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 60px;

  box-shadow: -4px -4px 12px rgba(0, 0, 0, 0.03),
    3.2px 3.2px 12px rgba(0, 0, 0, 0.06);
`;

const CardText = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CardBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const CardDate = styled.time`
  display: flex;

  margin-bottom: 3px;

  color: ${gray07};
`;

const Card = ({ text, date, tag }) => {
  return (
    <CardLayout>
      <CardText css={Headline1}>{text}</CardText>

      <CardBottomRow>
        <CardDate css={Body2}>{date}</CardDate>
        <Tag text={tag} />
      </CardBottomRow>
    </CardLayout>
  );
};

export default Card;
