import styled from '@emotion/styled';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Headline1, Subhead4, Body4 } from '@styles/FontStyle';

import { main, sub, gray04, text_black, text_white } from '@styles/Colors';

import icon_quit from '@public/icon_quit.png';
import icon_search_big from '@public/icon_search_big.png';

const Layout = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  flex: 0.45;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${main};
`;

const QuitBox = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 96px;
`;

const InputBox = styled.div`
  width: 648px;
  height: 80px;

  display: flex;
  justify-content: right;
  align-items: center;
  align-self: center;

  padding: 0px 22px;

  border-radius: 4px;
  border: 3px solid ${text_white};

  margin-bottom: 65px;
`;

const Input = styled.input`
  width: 532px;

  padding: 0px 10px;

  outline: none;
  border: none;

  ${Body4}
  text-align : center;

  color: ${text_white};

  &::placeholder {
    ${Body4}

    color: ${text_white};
  }

  &:focus::placeholder {
    color: transparent;
  }

  background-color: transparent;
`;

const BottomBox = styled.div`
  flex: 0.55;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
`;

const TitleText = styled.span`
  margin: 54px 0px 40px;

  ${Headline1}

  color : ${text_black};
`;

const ButtonRow = styled.div`
  width: 649px;

  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  width: 203px;
  height: 60px;

  border: 1px solid ${gray04};
  border-radius: 4px;

  color: ${gray04};
  background-color: white;

  ${Subhead4}

  &:hover {
    color: ${text_white};
    background-color: ${sub};
    border: 1px solid transparent;
  }

  transition: 0.5s all ease;
`;

const SearchModal = ({ setIsActive, router }) => {
  const [searchText, setSearchText] = useState('');

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsActive(false);
      router.push(`/search?keyword=${searchText}`);
    }
  };

  const onClick = (e) => {
    setIsActive(false);
    router.push(`/search?keyword=${searchText}`);
  };

  return (
    <Layout>
      <TopBox>
        <QuitBox>
          <div
            onClick={() => {
              setIsActive(false);
            }}
          >
            <Image src={icon_quit} width={28} height={28} alt="" />
          </div>
        </QuitBox>
        <InputBox>
          <Input
            placeholder={'궁금한 것을 검색해보세요'}
            value={searchText}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
          <Image
            src={icon_search_big}
            width={37}
            height={36}
            alt=""
            onClick={onClick}
          />
        </InputBox>
      </TopBox>

      <BottomBox>
        <TitleText>위아토의 키워드</TitleText>
        <ButtonRow>
          <Button>약품</Button>
          <Button>세면</Button>
          <Button>환경</Button>
        </ButtonRow>
        <ButtonRow>
          <Button>수면</Button>
          <Button>음식</Button>
          <Button>기타</Button>
        </ButtonRow>
      </BottomBox>
    </Layout>
  );
};

SearchModal.defaultProps = {
  active: false,
};

export default SearchModal;
