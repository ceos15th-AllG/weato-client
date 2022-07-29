import styled from '@emotion/styled';

import { Headline1, Subhead3 } from '../../../styles/FontStyle';

import { gray06, text_black } from '../../../styles/Colors';

const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding-bottom: 19px;

  border-bottom: 3px solid ${gray06};
`;

const Title = styled.header`
  ${Headline1}

  color : ${text_black};
`;

const More = styled.span`
  ${Subhead3}

  color : ${text_black};
`;

function BoardHeader({ title }) {
  return (
    <Layout>
      <Title>{title}</Title>
      <More>더보기 &#xE001;</More>
    </Layout>
  );
}

export default BoardHeader;
