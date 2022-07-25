// Tag 스타일 관리

import styled from '@emotion/styled';

import { Tag1 } from '../../../styles/FontStyle';

import { text_black } from '../../../styles/Colors';

import {
  tag_medicine,
  tag_sleep,
  tag_water,
  tag_food,
  tag_env,
  tag_etc,
} from '../../../styles/Colors';

const TagLayout = styled.div`
  width: 60px;
  height: 32px;

  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};
`;

const TagText = styled.span`
  color: ${text_black};
  text-align: center;
`;

const Tag = ({ text }) => {
  if (text === '약품') {
    return (
      <TagLayout color={tag_medicine}>
        <TagText css={Tag1}>{text}</TagText>
      </TagLayout>
    );
  } else if (text === '수면') {
    return (
      <TagLayout color={tag_sleep}>
        <TagText css={Tag1}>{text}</TagText>
      </TagLayout>
    );
  } else if (text === '세면') {
    return (
      <TagLayout color={tag_water}>
        <TagText css={Tag1}>{text}</TagText>
      </TagLayout>
    );
  } else if (text === '음식') {
    return (
      <TagLayout color={tag_food}>
        <TagText css={Tag1}>{text}</TagText>
      </TagLayout>
    );
  } else if (text === '환경') {
    return (
      <TagLayout color={tag_env}>
        <TagText css={Tag1}>{text}</TagText>
      </TagLayout>
    );
  } else if (text === '기타') {
    return (
      <TagLayout color={tag_etc}>
        <TagText css={Tag1}>{text}</TagText>
      </TagLayout>
    );
  }
};

export default Tag;
