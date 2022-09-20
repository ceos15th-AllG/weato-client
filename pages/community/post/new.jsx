import styled from '@emotion/styled';

import { useState, useEffect, useCallback, useContext } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';

import Context from '@contexts/Context';

import Button from '@common/ButtonContainer';
import Dropdown from '@community/Dropdown';

import { Display1, Subhead4, Subhead3 } from '@styles/FontStyle';
import { main, gray04, gray05, gray06, text_black } from '@styles/Colors';

const boardType = ['나만의 관리법', '질문'];
const tagType = ['약품', '수면', '세면', '음식', '환경', '기타'];
const toKoreanTags = {
  약품: 'DRUG',
  수면: 'SLEEP',
  세면: 'CLEANING',
  음식: 'FOOD',
  환경: 'ENVIRONMENT',
  기타: 'OTHERWISE',
};

const Layout = styled.div`
  margin: 79px 523px 60px;

  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  padding-bottom: 34px;
  border-bottom: 1px solid ${gray04};
`;

const ContentHeader = styled.header`
  width: 100%;
  padding-bottom: 23px;

  ${Subhead3}

  border-bottom: 3px solid ${gray06};
  color: ${text_black};

  strong {
    margin: 0px 6px;
    font-weight: 300;
  }
`;

const Title = styled.div`
  ${Display1}

  color : ${text_black};
`;

const WriteFormLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryField = styled.div`
  width: 539px;
  /* height: 56px; */
`;

const TagField = styled.div`
  width: 315px;
  /* height: 56px; */
`;

const TitleField = styled.input`
  width: 100%;
  height: 56px;

  padding: 16px;
  margin-top: 24px;

  ${Subhead3}

  color : ${text_black};

  border: none;
  outline: none;

  border-radius: 5px;
  border: 1px solid ${gray05};
`;

const ContentField = styled.textarea`
  width: 100%;
  height: 480px;

  padding: 24px;
  margin-top: 24px;

  ${Subhead4}

  color : ${text_black};

  border: none;
  outline: none;

  border-radius: 5px;
  border: 1px solid ${gray05};
`;

export default function New() {
  const router = useRouter();
  const { token } = useContext(Context);

  console.log(token);

  const [categorySelected, setCategorySelected] = useState('게시판');
  const [tagSelected, setTagSelected] = useState('태그');
  const [title, setTitle] = useState('');
  const [titleValid, setTitleValid] = useState(false);
  const [content, setContent] = useState('');
  const [contentValid, setContentValid] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const toBoardType = {
    '나만의 관리법': 'MANAGEMENT',
    질문: 'QUESTION',
  };

  const onChangeTitle = useCallback((event) => {
    setTitle(event.target.value);

    if (event.target.value !== '') {
      setTitleValid(true);
    } else {
      setTitleValid(false);
    }
  }, []);
  const onChangeContent = useCallback((event) => {
    setContent(event.target.value);

    if (event.target.value !== '') {
      setContentValid(true);
    } else {
      setContentValid(false);
    }
  }, []);
  const encodeText = (content) => {
    let encodedContent = '';
    const lines = content.split('\n');
    for (let line of lines) {
      encodedContent += line.trim() + '\n';
    }
    return encodedContent;
  };
  const onConfirm = async (event) => {
    if (!confirm) {
      return;
    }

    try {
      const encodedContent = encodeText(content);
      const response = await axios({
        method: 'post',
        url: `https://www.weato.kro.kr/api/posts`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          title: title.trim(),
          content: encodedContent,
          boardType: toBoardType[categorySelected],
          tagType: toKoreanTags[tagSelected],
        },
      });

      const newPostId = response.data.id;
      router.push(`/community/post/${newPostId}`);
    } catch (error) {
      alert(error);
      alert('서버 요청이 불가능하네요...');
    }
  };

  // 전체 폼의 조건이 만족되었는지 감지
  useEffect(() => {
    if (
      categorySelected !== '게시판' &&
      tagSelected !== '태그' &&
      titleValid &&
      contentValid
    ) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [categorySelected, tagSelected, titleValid, contentValid]);

  return (
    <Layout>
      <ContentHeader>
        <Link href={`/community`}>
          <a>커뮤니티</a>
        </Link>
        <strong>&#xE001;</strong>
        글쓰기
      </ContentHeader>
      <Box>
        <Title>글쓰기</Title>
        <Button
          text={'발행'}
          btnType={'1'}
          disabled={!confirm}
          onClick={onConfirm}
        />
      </Box>

      <WriteFormLayout>
        <Row>
          <CategoryField>
            <Dropdown
              item={categorySelected}
              options={boardType}
              setItem={setCategorySelected}
            />
          </CategoryField>
          <TagField>
            <Dropdown
              item={tagSelected}
              options={tagType}
              setItem={setTagSelected}
            />
          </TagField>
        </Row>
        <TitleField
          placeholder="제목을 입력해 주세요"
          value={title}
          onChange={onChangeTitle}
        />
        <ContentField
          placeholder="내용을 입력하세요"
          value={content}
          onChange={onChangeContent}
        />
      </WriteFormLayout>
    </Layout>
  );
}
