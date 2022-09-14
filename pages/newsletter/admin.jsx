import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import axios from 'axios';

import Context from '@contexts/Context';

import Button from '@common/ButtonContainer';
import Tag from '@common/Tag';

import {
  Display1,
  Headline1,
  Headline2,
  Subhead3,
  Body2,
  Subhead4,
} from '@styles/FontStyle';
import {
  main,
  gray03,
  gray05,
  gray07,
  text_black,
  tag_etc,
} from '@styles/Colors';

import icon_menu from '@public/newsletter/icon_menu.png';
import icon_search from '@public/icon_search.png';

const dict = {
  DRUG: '약품',
  SLEEP: '수면',
  CLEANING: '세면',
  FOOD: '음식',
  ENVIRONMENT: '환경',
  OTHERWISE: '기타',
  ALL: '전체',
};

const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  position: absolute;

  display: flex;

  background-color: #fcfcfc;
`;

const Sidebar = styled.div`
  width: ${({ open }) => (open ? `500px` : `0`)};
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  padding: 120px 0px 30px;

  background-color: white;

  transition: 0.6s width ease;
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
  margin-bottom: 40px;
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
  width: ${({ open }) => (open ? `calc(100vw - 500px)` : `100vw`)};
  height: 100%;

  display: flex;

  transition: width 0.6s ease;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;

  padding: 8px;
  border-radius: 50%;

  position: absolute;
  top: 28px;
  left: 28px;

  background-color: white;
`;

const SideBarMenuBox = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: scroll;

  .title {
    ${Subhead4}
    margin-bottom : 12px;
  }

  .item {
    width: 100%;
    height: 55px;

    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 6px;
    padding: 0px 20px;

    background-color: #fafafa;

    &:hover {
      background-color: #e4e4e4;
    }

    transition: background-color 0.3s ease;

    span {
      ${Subhead3}

      font-weight : 400;
      color: ${text_black};

      width: 75%;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;

  padding-bottom: 60px;

  ${({ center }) => (!center ? `` : `justify-content : center;`)};
  ${({ top }) => (!top ? `` : `width : 500px; margin-left : 100px`)};

  & > span {
    position: relative;
    left: 100px;
    font-size: 32px;
    font-weight: 500;
  }
`;

const Section = styled.section`
  width: 80vw;
  height: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0px 50px;
  padding-top: 100px;

  & > span {
    margin-bottom: 20px;

    font-size: 20px;
    color: ${main};
    font-weight: 500;
  }
`;

const ButtonArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;

  font-size: 18px;

  margin: 30px 0px;
  padding: 24px;

  border: none;
  outline: none;

  border-radius: 8px;
`;

const NewsletterForm = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 20px;

  border-radius: 8px;

  background-color: white;

  overflow: scroll;

  .header {
    width: 100%;

    margin-bottom: 24px;

    ${Display1};

    text-align: center;

    color: ${text_black};
  }

  .header-subscription {
    width: 100%;

    margin-bottom: 28px;

    ${Body2};

    text-align: center;

    color: ${gray05};
  }

  .header-date {
    width: 100%;

    margin-bottom: 27px;

    ${Body2};

    text-align: right;

    color: ${gray07};
  }

  .content-text {
    margin-bottom: 24px;

    ${Body2};

    line-height: 24px;
    text-align: left;

    color: ${text_black};

    a {
      color: ${main};
    }

    strong {
      font-weight: 500;
    }
  }

  .content-line {
    width: 100%;

    margin: 16px 0px 40px;

    border-top: 1px solid ${tag_etc};
  }

  .content-header {
    margin-bottom: 20px;

    ${Headline1};

    color: ${text_black};
  }

  .content-a {
    color: ${main};
  }

  .content-list {
    margin-bottom: 24px;

    list-style: disc outside none;
    line-height: 28px;
  }

  .content-listitem {
    list-style: disc outside none;
  }
`;

const Admin = () => {
  const router = useRouter();
  const [login, user, token] = useContext(Context);

  const [sideOpen, setSideOpen] = useState(false);

  //   const [number, setNumber] = useState(null);

  const [loaded, setLoaded] = useState(null);
  const [loadedNewsletters, setLoadedNewsletters] = useState([]);

  const [newsletter, setNewsletter] = useState(``);

  const onClick = (event) => {
    setSideOpen(!sideOpen);
  };

  const onChange = (event) => {
    setNewsletter(event.target.value);
  };

  const loadNewsletterLists = async (event) => {
    let page = 1;
    let buffer = [];

    try {
      while (true) {
        const response = await axios({
          method: 'get',
          url: `https://www.weato.kro.kr/api/newsletters?page=${page}`,
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        });

        buffer.push(...response.data.data);
        page++;

        if (page > response.data.max) {
          break;
        }
      }

      setLoadedNewsletters(buffer);
      setLoaded(true);
    } catch (error) {
      console.log(error);
      alert('서버 요청이 불가능하네요...');
    }
  };

  useEffect(() => {
    loadNewsletterLists();
  }, []);

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

        <SideBarMenuBox>
          {loaded ? (
            <>
              <span className="title">
                뉴스레터 목록 ({loadedNewsletters.length})
              </span>

              {loadedNewsletters.map(({ title, tagType }, index) => (
                <div className="item" key={index}>
                  <Tag text={dict[tagType]} />
                  <span>{title}</span>
                </div>
              ))}
            </>
          ) : undefined}
        </SideBarMenuBox>
      </Sidebar>

      <Content open={sideOpen}>
        <Section>
          <ButtonArea>
            <Button
              text="제목 박스"
              btnType="1"
              onClick={() => {
                insertText('header-box');
              }}
            />
            <Button
              text="소제목"
              btnType="1"
              onClick={() => {
                insertText('content-header');
              }}
            />
            <Button
              text="문단"
              btnType="1"
              onClick={() => {
                insertText('content-text');
              }}
            />
            <Button
              text="링크"
              btnType="1"
              onClick={() => {
                insertText('content-a');
              }}
            />
            <Button
              text="강조"
              btnType="1"
              onClick={() => {
                insertText('content-strong');
              }}
            />
            <Button
              text="리스트"
              btnType="1"
              onClick={() => {
                insertText('content-list');
              }}
            />
            <Button
              text="줄바꿈"
              btnType="1"
              onClick={() => {
                insertText('content-br');
              }}
            />
            <Button
              text="구분선"
              btnType="1"
              onClick={() => {
                insertText('content-line');
              }}
            />
          </ButtonArea>
          <TextArea
            placeholder="뉴스레터 내용을 입력하세요"
            value={newsletter}
            onChange={onChange}
          />
        </Section>
        <Section>
          <span>아래 화면처럼 보여요</span>
          <NewsletterForm dangerouslySetInnerHTML={{ __html: newsletter }} />
        </Section>
      </Content>
    </Layout>
  );
};

export default Admin;
