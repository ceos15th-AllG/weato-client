/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Button from '../../../src/components/common/ButtonContainer';
import WriteForm from '../../../src/components/community/WriteForm';

import { Display1, Subhead3 } from '../../../styles/FontStyle';
import { main, gray04, gray06, text_black } from '../../../styles/Colors';

const Layout = styled.div`
  margin: 79px 523px 60px;

  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentHeader = styled.header`
  width: 100%;
  padding-bottom: 23px;

  ${Subhead3}

  border-bottom: 3px solid ${gray06};
  color: ${text_black};
`;

const Title = styled.div`
  ${Display1}

  color : ${text_black};
`;

export default function New() {
  return (
    <Layout>
      <ContentHeader>커뮤니티 &#xE001; 글쓰기</ContentHeader>
      <Box
        css={css`
          margin-top: 40px;
          padding-bottom: 34px;
          border-bottom: 1px solid ${gray04};
        `}
      >
        <Title>글쓰기</Title>
        <Button text={'발행'} btnType={'1'} />
      </Box>

      <WriteForm />
    </Layout>
  );
}
