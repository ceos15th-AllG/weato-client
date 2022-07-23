/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const ButtonStyle = css`
  width: 102px;
  height: 30px;

  border-radius: 8px;

  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  background-color: green;
`;

const Button = ({ text }) => {
  return (
    <div
      css={ButtonStyle}
      onClick={() => {
        alert('clicked');
      }}
    >
      {text}
    </div>
  );
};

export default Button;
