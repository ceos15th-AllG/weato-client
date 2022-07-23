/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const CardStyle = css`
  width: 200px;
  height: 200px;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 32px;

  background-color: orange;
`;

const CardTopContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CardBottomContainer = css`
  display: flex;
  justify-content: space-between;
`;

const Card = ({ text, date, tag }) => {
  return (
    <div css={CardStyle}>
      <div css={CardTopContainer}>
        <div>{text}</div>
      </div>

      <div css={CardBottomContainer}>
        <div>{date}</div>
        <div>{tag}</div>
      </div>
    </div>
  );
};

export default Card;
