import styled from '@emotion/styled';

const Layout = styled.div`
  height: calc(100vh - 100px);
  overflow: scroll;
`;

function ContentLayout({ children }) {
  return <Layout>{children}</Layout>;
}

export default ContentLayout;
