import styled from '@emotion/styled';

import { useState, useCallback } from 'react';

import { useRouter } from 'next/router';

import { Subhead4, Subhead3 } from '@styles/FontStyle';
import { gray01, gray04, gray05, tag_etc, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 92px;
  height: 56px;
  overflow: visible;

  position: relative;
  z-index: 900;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-left: 20px;

  ${Subhead4}

  color : ${text_black};
`;

const ShowArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  border-left: 1px solid ${tag_etc};
  border-right: 1px solid ${tag_etc};
`;

const ItemTop = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${text_black};
  background-color: white;

  transition: all 0.3s ease;
`;

const Item = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ selected, current }) =>
    selected === current ? text_black : gray04};

  &:nth-of-type(1) {
    border-top: 1px solid ${tag_etc};
  }
  &:last-of-type {
    border-bottom: 1px solid ${tag_etc};
  }

  background-color: white;

  &:hover {
    color: ${text_black};
    background-color: ${gray01};
  }

  transition: all 0.3s ease;
`;

function TagDropdown({ query, selected, options }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onClickItem = useCallback((index) => {
    router.push({
      pathname: `/community/board`,
      query: { ...query, tag: options[index], page: 1 },
    });
  }, []);

  const toKoreanTags = {
    all: '전체',
    medicine: '약품',
    sleep: '수면',
    water: '세면',
    food: '음식',
    env: '환경',
    etc: '기타',
  };

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
        <ItemTop>{toKoreanTags[query.tag]}</ItemTop>
        <Box>
          {isOpen &&
            options.map((option, index) => (
              <Item
                key={index}
                selected={selected}
                current={option}
                onClick={() => {
                  onClickItem(index);
                }}
              >
                {toKoreanTags[option]}
              </Item>
            ))}
        </Box>
      </ShowArea>
    </Layout>
  );
}

export default TagDropdown;
