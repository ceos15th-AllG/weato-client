import styled from '@emotion/styled';

import Image from 'next/image';

import icon_like_active from '@public/newsletter/icon_like_active.png';
import icon_like from '@public/newsletter/icon_like.png';
import icon_scrap_active from '@public/newsletter/icon_scrap_active.png';
import icon_scrap from '@public/newsletter/icon_scrap.png';

import { Tag1 } from '@styles/FontStyle';
import { gray04, gray05 } from '@styles/Colors';

const ButtonLayoutLike = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;

  padding: 9px;
  /* margin-left: 24px; */

  border: 1px solid ${gray04};
  border-radius: 4px;
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
`;

const ButtonText = styled.span`
  margin-left: 6px;

  ${Tag1};

  color: ${gray05};
`;

const ActionButton = (props) => {
  if (props.btnType === 'like') {
    return (
      <ButtonLayoutLike {...props}>
        {props.active ? (
          <Image src={icon_like_active} width={16} height={14} alt="" />
        ) : (
          <Image src={icon_like} width={16} height={14} alt="" />
        )}
        <ButtonText>{props.value}</ButtonText>
      </ButtonLayoutLike>
    );
  } else if (props.btnType === 'scrap') {
    return (
      <ButtonLayoutSave {...props}>
        {props.active ? (
          <Image src={icon_scrap_active} width={11.34} height={16} alt="" />
        ) : (
          <Image src={icon_scrap} width={11.34} height={16} alt="" />
        )}
        <ButtonText>{props.value}</ButtonText>
      </ButtonLayoutSave>
    );
  }
};

export default ActionButton;
