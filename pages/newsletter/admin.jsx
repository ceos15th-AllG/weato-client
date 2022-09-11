import styled from '@emotion/styled';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Body2 } from '@styles/FontStyle';
import { gray03 } from '@styles/Colors';

import icon_menu from '@public/newsletter/icon_menu.png';
import icon_search from '@public/icon_search.png';

const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  position: absolute;

  display: flex;

  background-color: #fcfcfc;
`;

const Sidebar = styled.div`
  width: ${({ open }) => (open ? `480px` : `0`)};
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  padding: 120px 0px;

  background-color: white;

  transition: 0.3s width ease-in-out;
`;

const SearchInputContainer = styled.div`
  width: 80%;
  height: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${gray03};
  border-radius: 4px;

  padding: 0px 16px;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 80%;

  ${Body2}

  border : none;
  outline: none;

  padding-left: 8px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;

  position: absolute;
  top: 28px;
  left: 28px;
`;

const Admin = () => {
  const router = useRouter();
  const [sideOpen, setSideOpen] = useState(false);

  const onClick = (event) => {
    setSideOpen(!sideOpen);
  };

  return (
    <Layout>
      <IconContainer onClick={onClick}>
        <Image src={icon_menu} />
      </IconContainer>

      <Sidebar open={sideOpen}>
        <SearchInputContainer>
          <Image src={icon_search} width={24} height={24} />
          <SearchInput placeholder="뉴스레터 검색어 필터링..." />
        </SearchInputContainer>
      </Sidebar>

      <Content></Content>
    </Layout>
  );
};

export default Admin;
