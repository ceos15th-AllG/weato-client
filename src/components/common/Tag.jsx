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

const TagText = styled.div`
  color: ${text_black};
`;

const Tag = (props) => {
  if (props.text === '약품') {
    return (
      <TagLayout color={tag_medicine}>
        <TagText css={Tag1}>{props.text}</TagText>
      </TagLayout>
    );
  } else if (props.text === '수면') {
    return (
      <TagLayout color={tag_sleep}>
        <TagText css={Tag1}>{props.text}</TagText>
      </TagLayout>
    );
  } else if (props.text === '세면') {
    return (
      <TagLayout color={tag_water}>
        <TagText css={Tag1}>{props.text}</TagText>
      </TagLayout>
    );
  } else if (props.text === '음식') {
    return (
      <TagLayout color={tag_food}>
        <TagText css={Tag1}>{props.text}</TagText>
      </TagLayout>
    );
  } else if (props.text === '환경') {
    return (
      <TagLayout color={tag_env}>
        <TagText css={Tag1}>{props.text}</TagText>
      </TagLayout>
    );
  } else if (props.text === '기타') {
    return (
      <TagLayout color={tag_etc}>
        <TagText css={Tag1}>{props.text}</TagText>
      </TagLayout>
    );
  }
};

export default Tag;
