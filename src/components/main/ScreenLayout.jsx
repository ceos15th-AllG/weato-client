import styled from '@emotion/styled';

const Layout = styled.div`
  /* width: 1920px; */
  width: 100vw;
`;

function ScreenLayout({ children }) {
  return <Layout>{children}</Layout>;
}

export default ScreenLayout;
