import styled from '@emotion/styled';

import Image from 'next/image';

import { useState, useCallback } from 'react';

import { gray05, text_black } from '@styles/Colors';
import icon_option from '@public/community/icon_option.png';

const Layout = styled.div`
  width: 133px;
  height: 144px;
  overflow: visible;

  position: relative;
  display: flex;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const Content = styled.div`
  width: 92px;

  padding: 34px 0px;

  border: 1px solid #dfdfdf;
`;

const Item = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 20px;

  &:not(:nth-of-type(1)) {
    margin-top: 24px;
  }

  color: #999999;
  &:hover {
    color: ${text_black};
  }

  transition: color 0.4s ease;
`;

const OptionButton = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <IconContainer
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }}
      >
        <Image src={icon_option} />
      </IconContainer>
      {isOpen && (
        <Content>
          {options.map(({ label, action }, index) => (
            <Item
              key={index}
              onClick={() => {
                action();
                setIsOpen(false);
              }}
            >
              {label}
            </Item>
          ))}
        </Content>
      )}
    </Layout>
  );
};

export default OptionButton;
