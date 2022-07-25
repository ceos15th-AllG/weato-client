import styled from '@emotion/styled';

const Layout = styled.div`
  width: 1920px;
`;

function ScreenLayout({ children }) {
  return <Layout>{children}</Layout>;
}

export default ScreenLayout;
