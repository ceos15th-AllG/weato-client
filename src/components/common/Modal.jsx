/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Layout = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;

  ${(props) =>
    props.background
      ? css`
          animation: ${ModalOpenAnimation} 0.3s forwards ease-in-out;
          background-color: #00000060;
        `
      : css``}
`;

const ModalOpenAnimation = keyframes`
  0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  z-index: 1200;

  ${(props) =>
    props.active
      ? css`
          animation: ${ModalOpenAnimation} 0.3s forwards ease-in-out;
        `
      : css`
          animation: none;
        `}
`;

const Modal = ({ active, children, background }) => {
  if (!active) return null;

  return (
    <>
      <Layout>
        <Background background={background} />
        <Content active={active}>{children}</Content>
      </Layout>
    </>
  );
};

Modal.defaultProps = {
  active: false,
};

export default Modal;
