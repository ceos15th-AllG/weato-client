import styled from '@emotion/styled';

import { sub, gray05, text_black } from '@styles/Colors';
import { Subhead4 } from '@styles/FontStyle';

const Layout = styled.div`
  display: flex;
  align-items: center;

  span {
    ${Subhead4}
    color : ${text_black};
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;

  margin-right: 12px;

  border-radius: 50%;
  background-color: white;

  border: ${(props) =>
    props.active ? `6px solid ${sub}` : `1px solid ${gray05}`};
`;

const RadioButton = ({ text, active, toggleActive }) => {
  return (
    <Layout>
      <Circle active={active} onClick={toggleActive} />
      <span>{text}</span>
    </Layout>
  );
};

export default RadioButton;
