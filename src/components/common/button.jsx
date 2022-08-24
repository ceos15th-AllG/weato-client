// Button 스타일 관리

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { main, sub, gray03, gray04, text_white } from '@styles/Colors';
import { Headline1, Subhead3, Subhead4 } from '@styles/FontStyle';

const DefaultLayout = css`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  transition: 0.5s all ease-in-out;
`;

const ButtonLayout1 = styled.div`
  ${DefaultLayout}

  width: 92px;
  height: 40px;

  border-radius: 8px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const ButtonLayout2 = styled.div`
  ${DefaultLayout}

  width: 124px;
  height: 40px;

  border-radius: 8px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const ButtonLayout3 = styled.div`
  ${DefaultLayout}

  width: 167px;
  height: 44px;

  border-radius: 8px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const ButtonLayout4 = styled.div`
  ${DefaultLayout}

  width: 204px;
  height: 60px;

  border-radius: 8px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const ButtonLayout5 = styled.div`
  ${DefaultLayout}

  width: 426px;
  height: 92px;

  border-radius: 8px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const ButtonLayout6 = styled.div`
  ${DefaultLayout}

  width: 650px;
  height: 92px;

  border-radius: 8px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const ButtonLayout7 = styled.div`
  ${DefaultLayout}

  width: 199px;
  height: 40px;

  border-radius: 8px;

  color: ${text_white};
  background-color: ${(props) => (!props.disabled ? main : gray03)};
`;

const ButtonLayout8 = styled.div`
  ${DefaultLayout}

  width: 203px;
  height: 60px;

  border-radius: 4px;

  color: ${(props) => (!props.disabled ? text_white : gray04)};
  background-color: ${(props) => (!props.disabled ? sub : `white`)};

  ${(props) =>
    props.disabled &&
    css`
      color: ${gray04};

      border: 1px solid ${gray04};
    `}

  transition: 0.15s all ease;
`;

const Button = (props) => {
  if (props.btnType === '2') {
    return (
      <ButtonLayout2 {...props}>
        <span css={Subhead3}>{props.text}</span>
      </ButtonLayout2>
    );
  } else if (props.btnType === '3') {
    return (
      <ButtonLayout3 {...props}>
        <span css={Subhead3}>{props.text}</span>
      </ButtonLayout3>
    );
  } else if (props.btnType === '4') {
    return (
      <ButtonLayout4 {...props}>
        <span css={Subhead4}>{props.text}</span>
      </ButtonLayout4>
    );
  } else if (props.btnType === '5') {
    return (
      <ButtonLayout5 {...props}>
        <span css={Headline1}>{props.text}</span>
      </ButtonLayout5>
    );
  } else if (props.btnType === '6') {
    return (
      <ButtonLayout6 {...props}>
        <span css={Subhead4}>{props.text}</span>
      </ButtonLayout6>
    );
  } else if (props.btnType === '7') {
    return (
      <ButtonLayout7 {...props}>
        <span css={Subhead3}>{props.text}</span>
      </ButtonLayout7>
    );
  } else if (props.btnType === '8') {
    return (
      <ButtonLayout8 {...props}>
        <span css={Subhead4}>{props.text}</span>
      </ButtonLayout8>
    );
  } else {
    return (
      <ButtonLayout1 {...props}>
        <span css={Subhead3}>{props.text}</span>
      </ButtonLayout1>
    );
  }
};

export default Button;
