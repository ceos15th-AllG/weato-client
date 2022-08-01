// Button 스타일 관리

import styled from '@emotion/styled';

import Image from 'next/image';

import icon_color_heart from '../../../public/icon_color_heart.png';
import icon_color_save from '../../../public/icon_color_save.png';

import { Tag1 } from '../../../styles/FontStyle';
import { gray04, gray05 } from '../../../styles/Colors';

const ButtonLayoutHeart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;

  padding: 9px;

  border: 1px solid ${gray04};
  border-radius: 4px;
  /* 
  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)}; */
`;

const ButtonLayoutSave = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;

  padding: 9px;
  margin-left: 24px;

  border: 1px solid ${gray04};
  border-radius: 4px;

  /* color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)}; */
`;

const ButtonText = styled.span`
  margin-left: 6px;

  ${Tag1};

  color: ${gray05};
`;

const Button = (props) => {
  if (props.btnType === 'heart') {
    return (
      <ButtonLayoutHeart {...props}>
        <Image src={icon_color_heart} width={16} height={14} />
        <ButtonText>{props.value}</ButtonText>
      </ButtonLayoutHeart>
    );
  } else if (props.btnType === 'save') {
    return (
      <ButtonLayoutSave {...props}>
        <Image src={icon_color_save} width={11.34} height={16} />
        <ButtonText>{props.value}</ButtonText>
      </ButtonLayoutSave>
    );
  }

  return (
    <ButtonLayoutHeart {...props}>
      {/* <span css={Subhead3}>{props.text}</span> */}
    </ButtonLayoutHeart>
  );
};

export default Button;
