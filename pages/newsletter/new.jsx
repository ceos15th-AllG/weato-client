import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import pretty from 'pretty';

import Context from '@contexts/Context';

import Button from '@common/ButtonContainer';
import Card from '@newsletter/Card';
import Pagenator from '@newsletter/PagenatorAdmin';
import Dropdown from '@common/Dropdown';

import { Display1, Subhead3, Headline1, Body2 } from '@styles/FontStyle';
import {
  main,
  gray02,
  gray05,
  gray06,
  gray07,
  text_black,
  tag_etc,
} from '@styles/Colors';

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

  display: flex;
  flex-direction: column;

  padding: 100px 0px;

  background-color: #fcfcfc;
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

const CardBox = styled.div`
  width: 1320px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
`;

function Admin() {
  const [login, user, token] = useContext(Context);

  const [number, setNumber] = useState(null);
  const [page, setPage] = useState(1);

  const [loaded, setLoaded] = useState(null);
  const [loadedNewsletters, setLoadedNewsletters] = useState([]);

  const [newsletter, setNewsletter] = useState(``);
  const [cursorPosition, setCursorPosition] = useState(0);

  const onChange = (event) => {
    setNewsletter(event.target.value);
  };

  const onCursorMove = (event) => {
    setCursorPosition(event.target.selectionStart);
  };

  const convertSingleLine = () => {
    let convertResult = '';
    const lines = newsletter.split('\n');
    for (let line of lines) {
      convertResult += line.trim();
    }
    // setResult(convertResult);
    // console.log(convertResult);
    console.log(convertResult);
  };

  const insertText = (option) => {
    const newText = {
      'header-box': `<header class='header'>
    뉴스레터 제목
</header>
<span class='header-subscription'>
    본 뉴스레터는 전문기자의 기사를 기반으로 작성되었습니다.
</span>
<date class='header-date'>
    2022.00.00
</date>
`,
      'content-header': `<div class='content-header'>
    소제목
</div>      
`,
      'content-text': `<span class='content-text'>
    문단 내용
</span>      
`,
      'content-a': `<a href='' target='_blank'>링크</a>
`,
      'content-strong': `<strong>강조문</strong>
`,
      'content-br': `<br />    
`,
      'content-line': `<div class='content-line'></div>      
`,
      'content-list': `<ul class='content-list'>
    <li class='content-listitem'>리스트 아이템 1</li>
    <li class='content-listitem'>리스트 아이템 2</li>
    <li class='content-listitem'>리스트 아이템 3</li>
</ul>      
`,
    };
    // let frontText = newsletter.substring(0, cursorPosition);
    // let backText = newsletter.substring(cursorPosition, newsletter.length);
    // setNewsletter(frontText + newText[option] + backText);
    // setCursorPosition(cursorPosition + newText[option].length);
    setNewsletter(newsletter + '\n' + newText[option]);
  };

  const loadNewsletterLists = async (event) => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/newsletters?page=${page}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoadedNewsletters(response.data);
      setLoaded(true);
    } catch (error) {
      console.log(error);
      alert('서버 요청이 불가능하네요...');
    }
  };

  const loadNewsletter = async (event) => {
    if (!number) {
      return;
    }

    try {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/newsletters/${number}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // setNewsletter(pretty(response.data.content));
      setNewsletter(response.data.content);
    } catch (error) {
      console.log(error);
      alert('서버 요청이 불가능하네요...');
    }
  };

  useEffect(() => {
    loadNewsletterLists();
  }, [page]);

  useEffect(() => {
    loadNewsletter();
  }, [number]);

  return (
    <Layout>
      <Row center top>
        <Dropdown />
      </Row>

      {/* {loaded ? ( */}
      {false ? (
        <>
          <Row center>
            <CardBox>
              {loadedNewsletters.data.map(
                ({ id, title, createdAt, tagType }, index) =>
                  !number || id === number ? (
                    <Card
                      key={index}
                      text={title}
                      date={createdAt.slice(0, 10).replaceAll('-', '.')}
                      tag={dict[tagType]}
                      onClick={() => setNumber(id)}
                      selected
                    />
                  ) : (
                    <Card
                      key={index}
                      text={title}
                      date={createdAt.slice(0, 10).replaceAll('-', '.')}
                      tag={dict[tagType]}
                      onClick={() => setNumber(id)}
                    />
                  )
              )}
            </CardBox>
          </Row>
          <Row center>
            <Pagenator
              min={loadedNewsletters.min}
              max={loadedNewsletters.max}
              page={page}
              setPage={setPage}
            />
          </Row>
        </>
      ) : undefined}

      <Row>
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
            onKeyUp={onCursorMove}
          />
        </Section>
        <Section>
          <span>아래 화면처럼 보여요</span>
          <NewsletterForm dangerouslySetInnerHTML={{ __html: newsletter }} />
        </Section>
      </Row>
    </Layout>
  );
}

export default Admin;
