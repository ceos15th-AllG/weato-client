import styled from '@emotion/styled';

const Layout = styled.div`
  width: 100%;
`;

function ContentLayout({ children }) {
  return <Layout>{children}</Layout>;
}

export default ContentLayout;
