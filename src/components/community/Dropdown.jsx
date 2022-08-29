import styled from '@emotion/styled';

import { useState, useCallback } from 'react';

import Image from 'next/image';

import icon_down from '@public/community/icon_down.png';

import { Subhead4, Subhead3 } from '@styles/FontStyle';
import { gray01, gray04, gray05, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 100%;
  height: 56px;
  overflow: visible;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 5px;
  border: 1px solid ${gray05};
`;

const IconContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;

  width: 24px;
  height: 24px;
`;

const ShowArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  padding-left: 16px;

  ${Subhead3}

  text-align: left;

  border-radius: 5px;

  background-color: white;
  color: ${gray04};
  &:nth-of-type(1) {
    color: ${text_black};
  }

  &:hover {
    background-color: ${gray01};
  }

  transition: all 0.3s ease;
`;

function Dropdown({ item, options, setItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickItem = useCallback((index) => {
    setItem(options[index]);
  }, []);

  return (
    <Layout
      onClick={() => {
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <ShowArea isOpen={isOpen}>
        <Item>{item}</Item>
        {isOpen &&
          options.map((option, index) => (
            <Item
              key={index}
              onClick={() => {
                onClickItem(index);
              }}
            >
              {option}
            </Item>
          ))}
      </ShowArea>
      <IconContainer>
        <Image src={icon_down} />
      </IconContainer>
    </Layout>
  );
}

export default Dropdown;
