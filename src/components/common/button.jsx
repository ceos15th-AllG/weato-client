import styled from '@emotion/styled';

import { main, gray03, text_white } from '../../../styles/Colors';

const ButtonLayout = styled.div`
  width: 128px;
  height: 36px;

  /* padding: 20px; */
  border-radius: 6px;

  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  font-size: 14px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const Button = (props) => {
  return <ButtonLayout>{props.text}</ButtonLayout>;
};

export default Button;
