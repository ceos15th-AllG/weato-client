import styled from '@emotion/styled';

import { useState, useCallback } from 'react';

import Image from 'next/image';

import icon_down from '@public/community/icon_down.png';

import { Subhead4, Subhead3 } from '@styles/FontStyle';
import { gray01, gray02, gray04, gray05, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 100%;
  height: 56px;
  overflow: visible;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 5px;
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

  border: 1px solid ${gray05};
  border-radius: 5px;

  background-color: white;
  color: ${text_black};
`;

const SubItem = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  padding-left: 16px;

  ${Subhead3}

  text-align: left;

  background-color: white;
  color: ${gray04};

  &:nth-of-type(2) {
    border-radius: 8px 8px 0px 0px;
    border-top: 1px solid ${gray02};
  }
  border-top: 1px solid ${gray02};
  border-left: 1px solid ${gray02};
  border-right: 1px solid ${gray02};
  border-radius: 0px;
  &:last-of-type {
    border-radius: 0px 0px 8px 8px;
    border-bottom: 1px solid ${gray02};
  }

  &:hover {
    color: ${text_black};
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
            <SubItem
              key={index}
              onClick={() => {
                onClickItem(index);
              }}
            >
              {option}
            </SubItem>
          ))}
      </ShowArea>
      <IconContainer>
        <Image src={icon_down} />
      </IconContainer>
    </Layout>
  );
}

export default Dropdown;
