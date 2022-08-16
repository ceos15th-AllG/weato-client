import styled from '@emotion/styled';

import { Body1 } from '@styles/FontStyle';

import { gray04, tag_etc } from '@styles/Colors';

const Layout = styled.div`
  width: 68px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${tag_etc};
  border-radius: 4px;
`;

const Text = styled.span`
  ${Body1};

  text-align: center;

  color: ${gray04};
`;

function PostTag({ text }) {
  return (
    <Layout>
      <Text>{text}</Text>
    </Layout>
  );
}

export default PostTag;
