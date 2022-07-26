/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import TabGroup from '../../src/components/newsletter/TabGroup';
import CardBox from '../../src/components/newsletter/CardBox';

import Button from '../../src/components/common/ButtonContainer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 78px 300px 86px;
`;

export default function Newsletter() {
  return (
    <Layout>
      <TabGroup selected={'전체'} />

      <CardBox />

      <Button text={'더보기'} btnType={'4'} />
    </Layout>
  );
}
