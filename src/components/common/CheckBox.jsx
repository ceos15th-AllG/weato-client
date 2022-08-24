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

  border-radius: 4px;

  background: ${sub};

  div {
    width: 17px;
    height: 13px;
    margin-left: 6px;
    margin-bottom: 10px;
  }
`;

function CheckBox({ active, toggleCheckBox }) {
  return (
    <Layout onClick={toggleCheckBox}>
      {active ? (
        <div>
          <Image src={icon_check} />
        </div>
      ) : undefined}
    </Layout>
  );
}

export default CheckBox;
