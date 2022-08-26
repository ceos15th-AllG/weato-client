import styled from '@emotion/styled';

import { useState } from 'react';

import Button from '@common/ButtonContainer';

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

const Layout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 100px 50px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;

  &:nth-child(2) {
    margin-top: 100px;
  }

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
  border: 1px solid black;
`;

const NewsletterForm = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 20px;

  border-radius: 8px;
  border: 1px solid black;

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

function New() {
  const [newsletter, setNewsletter] = useState(``);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [result, setResult] = useState(``);

  const onChange = (event) => {
    setNewsletter(event.target.value);
  };

  const onCursorMove = (event) => {
    setCursorPosition(event.target.selectionStart);
  };

  const onConvert = () => {
    let convertResult = '';
    const lines = newsletter.split('\n');
    for (let line of lines) {
      convertResult += line.trim();
    }
    setResult(convertResult);
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

  return (
    <Layout>
      <Row>
        <span>쉽게 쉽게 일합시다</span>
      </Row>
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
          <Button text="한 줄로 변환하기" btnType="4" onClick={onConvert} />
        </Section>
        <Section>
          <span>아래 화면처럼 보여요</span>
          <NewsletterForm dangerouslySetInnerHTML={{ __html: newsletter }} />
        </Section>
      </Row>

      <Row>
        <TextArea
          placeholder="한 줄로 변환된 뉴스레터 내용입니다"
          value={result}
        />
      </Row>
    </Layout>
  );
}

export default New;
