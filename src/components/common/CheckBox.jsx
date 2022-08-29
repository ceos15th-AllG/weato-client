import styled from '@emotion/styled';

import Image from 'next/image';

import { sub } from '@styles/Colors';

import icon_check from '@public/icon_check.png';

const Layout = styled.div`
  width: 28px;
  height: 28px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  border: ${({ active }) => (active ? `none` : `1px solid #9a9a9a`)};
  border-radius: 4px;

  background: ${({ active }) => (active ? sub : `white`)};

  div {
    width: 17px;
    height: 13px;
    margin-left: 6px;
    margin-bottom: 9px;
  }
`;

function CheckBox({ active, onClick }) {
  return (
    <Layout active={active} onClick={onClick}>
      {active ? (
        <div>
          <Image src={icon_check} alt="" />
        </div>
      ) : undefined}
    </Layout>
  );
}

export default CheckBox;
