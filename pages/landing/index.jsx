/** @jsxImportSource @emotion/react */
import { keyframes, withTheme } from '@emotion/react';
import styled from '@emotion/styled';
// import Reveal, { Fade } from 'react-awesome-reveal';

// config({ ssrFadeout: true });

import axios from 'axios';

import { useState, useEffect, useCallback } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import {
  main,
  gray01,
  gray05,
  text_black,
  text_white,
  sub,
  gray07,
  gray03,
  gray02,
  gray04,
} from '@styles/Colors';

import section_1 from '@public/landing/section-1.png';
import section_2 from '@public/landing/section-2.png';
import section_3 from '@public/landing/section-3.png';
import section_4 from '@public/landing/section-4.png';
// import mockup_1 from '@public/landing/mockup_1.png';
// import mockup_2 from '@public/landing/mockup_2.png';
// import mockup_3 from '@public/landing/mockup_3.png';
// import mockup_4 from '@public/landing/mockup_4.png';
// import card_1 from '@public/landing/card_1.png';
// import card_2 from '@public/landing/card_2.png';
// import card_3 from '@public/landing/card_3.png';
// import card_4 from '@public/landing/card_4.png';
// import card_5 from '@public/landing/card_5.png';
// import comment_1 from '@public/landing/comment_1.png';
// import comment_2 from '@public/landing/comment_2.png';

const Layout = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  background-color: white;

  .image-section {
    width: 100%;
  }
`;

const FooterSection = styled.footer`
  padding: 14vw 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 6vw;

  background-color: ${main};

  .box {
    display: flex;
    flex-direction: column;
  }
`;

const FooterTitle = styled.span`
  width: 100%;

  font-weight: 700;
  font-size: 9vw;
  text-align: center;

  color: ${({ color }) => color};
`;

const ApplySection = styled.div`
  padding: 14vw 10vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 8vw;

  background-color: ${gray01};

  .box {
    display: flex;
    flex-direction: column;
    row-gap: 2vw;
  }

  .emoji {
    font-weight: 700;
    font-size: 13vw;
    text-align: center;
  }

  .title {
    font-weight: 700;
    font-size: 6.5vw;
    text-align: center;

    color: ${text_black};
  }
`;

const TagLayout = styled.div`
  margin-top: 21px;

  width: 100%;

  display: grid;
  /* justify-content: center; */
  grid: '. .';
  gap: 2.5vw;
`;

const TagButton = styled.div`
  width: 100%;
  /* min-width: 360px; */
  height: 12vw;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ disabled }) => (disabled ? gray03 : text_white)};
  font-weight: 500;
  font-size: 5.5vw;

  border-radius: 8px;

  background-color: ${({ disabled }) => (disabled ? `white` : main)};

  transition: all 0.4s ease-in-out;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${main};
  font-weight: 700;
  font-size: 5.5vw;

  padding: 3vw 10vw;
  border-radius: 2.5vw;

  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  height: 15vw;

  outline: none;
  border: none;
  border-radius: 8px;

  padding: 2vw 4vw;

  color: ${main};
  font-weight: 500;
  font-size: 6vw;

  background-color: white;
`;

const ConfirmButton = styled.div`
  width: 100%;
  height: 12vw;

  margin-top: 4vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 6vw;

  border-radius: 8px;

  color: ${({ active }) => (active ? text_white : gray01)};
  background-color: ${({ active }) => (active ? main : gray04)};

  transition: all 0.4s ease-in-out;
`;

const Landing = () => {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [tags, setTags] = useState([
    {
      text: '약품',
      active: false,
    },
    {
      text: '세면',
      active: false,
    },
    {
      text: '환경',
      active: false,
    },
    {
      text: '수면',
      active: false,
    },
    {
      text: '음식',
      active: false,
    },
    {
      text: '기타',
      active: false,
    },
  ]);
  const [tagsValid, setTagsValid] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const onChangeName = useCallback((event) => {
    setName(event.target.value);

    if (event.target.value.length < 1 || event.target.value.length > 10) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  }, []);

  const onChangeEmail = useCallback((event) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  }, []);

  const toggleActive = (id) => {
    setTags(
      tags.map((tag, index) =>
        index === id ? { ...tag, active: !tag.active } : tag
      )
    );
  };

  const onConfirm = async (event) => {
    if (!confirm) {
      return;
    }

    try {
      const request = await axios({
        method: 'post',
        url: `https://www.weato.kro.kr/api/landing`,
        data: {
          name: name,
          newsletterEmail: email,
          tagDrug: tags[0].active,
          tagCleaning: tags[1].active,
          tagEnvironment: tags[2].active,
          tagSleep: tags[3].active,
          tagFood: tags[4].active,
          otherwise: tags[5].active,
        },
      });

      alert('함께해 주셔서 감사드려요!');

      // router.push(`/signup/success`);
    } catch (error) {
      alert(error);
      alert('서버 요청이 불가능하네요...');
    }
  };

  // 선호 태그 입력 1개 이상인지 체크
  useEffect(() => {
    if (tags.filter((tag) => tag.active).length > 0) {
      setTagsValid(true);
    } else {
      setTagsValid(false);
    }
  }, [tags]);

  // 전체 필드 만족되었는지 체크
  useEffect(() => {
    if (nameValid && emailValid && tagsValid) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }

    console.log(nameValid, emailValid, tagsValid);
  }, [nameValid, emailValid, tagsValid]);

  return (
    <>
      <Layout>
        <section className="image-section">
          <Image src={section_1} />
        </section>

        <section className="image-section">
          <Image src={section_2} />
        </section>

        <section className="image-section">
          <Image src={section_3} />
        </section>

        <section className="image-section">
          <Image src={section_4} />
        </section>

        <FooterSection>
          <FooterTitle color={text_white}>
            <span>
              지금 바로
              <br />
              위아토를 만나보세요!
            </span>
          </FooterTitle>
          <a href={`https://weato.net`} target="_blank" rel="noreferrer">
            <Button>위아토 바로가기</Button>
          </a>
        </FooterSection>

        <ApplySection>
          <div className="box">
            <span className="emoji">📩</span>
            <span className="title">일단은 메일로 뉴스레터만 받아볼래요.</span>
          </div>

          <div className="box">
            <Input placeholder="이름" value={name} onChange={onChangeName} />
            <Input
              placeholder="뉴스레터를 받을 이메일"
              value={email}
              onChange={onChangeEmail}
            />

            <TagLayout>
              {tags.map(({ text, active }, index) =>
                active ? (
                  <TagButton
                    key={index}
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {text}
                  </TagButton>
                ) : (
                  <TagButton
                    key={index}
                    disabled
                    onClick={() => {
                      toggleActive(index);
                    }}
                  >
                    {text}
                  </TagButton>
                )
              )}
            </TagLayout>

            <ConfirmButton active={confirm} onClick={onConfirm}>
              구독하기
            </ConfirmButton>
          </div>
        </ApplySection>
      </Layout>
    </>
  );
};

export default Landing;
