// Button 스타일 관리

import styled from '@emotion/styled';

import { main, gray03, text_white } from '../../../styles/Colors';

const ButtonLayout = styled.div`
  width: 204px;
  height: 60px;

  border-radius: 8px;

  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const Button = (props) => {
  return <ButtonLayout>{props.text}</ButtonLayout>;
};

export default Button;
