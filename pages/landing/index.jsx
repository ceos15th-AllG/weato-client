import styled from '@emotion/styled';

import { useState, useEffect, useCallback } from 'react';

import Image from 'next/image';

import { useMediaQuery } from 'react-responsive';

import {
  main,
  gray01,
  text_black,
  text_white,
  gray03,
  gray04,
} from '@styles/Colors';

import section_1 from '@public/landing/section-1.png';
import section_2 from '@public/landing/section-2.png';
import section_3 from '@public/landing/section-3.png';
import section_4 from '@public/landing/section-4.png';
import section_1_large from '@public/landing/section-1-large.png';
import section_2_large from '@public/landing/section-2-large.png';
import section_3_large from '@public/landing/section-3-large.png';
import section_4_large from '@public/landing/section-4-large.png';

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
  padding: 10vw 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 3vw;

  background-color: ${main};

  .box {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding: 14vw 0;
    row-gap: 6vw;
  }
`;

const FooterTitle = styled.span`
  width: 100%;

  font-weight: 700;
  font-size: 3.5vw;
  text-align: center;

  color: ${({ color }) => color};

  @media (max-width: 767px) {
    font-size: 9vw;
  }
`;

const ApplySection = styled.div`
  padding: 10vw 2vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 6vw;

  background-color: ${gray01};

  @media (max-width: 767px) {
    padding: 14vw 10vw;
    row-gap: 8vw;
  }

  .box {
    display: flex;
    flex-direction: column;
    row-gap: 1.4vw;

    @media (max-width: 767px) {
      row-gap: 2vw;
    }
  }

  .emoji {
    font-weight: 700;
    font-size: 8vw;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 13vw;
    }
  }

  .title {
    font-weight: 700;
    font-size: 3.5vw;
    text-align: center;

    color: ${text_black};

    @media (max-width: 767px) {
      font-size: 6.5vw;
    }
  }
`;

const TagLayout = styled.div`
  margin-top: 21px;

  width: 100%;

  display: grid;
  /* justify-content: center; */
  grid: '. . .';
  gap: 1.4vw;

  @media (max-width: 767px) {
    grid: '. .';
    gap: 2.5vw;
  }
`;

const TagButton = styled.div`
  width: 100%;
  height: 6.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ disabled }) => (disabled ? gray03 : text_white)};
  font-weight: 500;
  font-size: 3vw;

  border-radius: 8px;

  background-color: ${({ disabled }) => (disabled ? `white` : main)};

  transition: all 0.4s ease-in-out;

  @media (max-width: 767px) {
    height: 12vw;
    font-size: 5.5vw;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${main};
  font-weight: 700;
  font-size: 3vw;

  padding: 1.5vw 4vw;
  border-radius: 1vw;

  background-color: white;

  @media (max-width: 767px) {
    font-size: 5.5vw;

    padding: 3vw 10vw;
    border-radius: 2.5vw;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 8vw;

  outline: none;
  border: none;
  border-radius: 8px;

  padding: 1vw 2.5vw;

  color: ${main};
  font-weight: 500;
  font-size: 3vw;

  background-color: white;

  @media (max-width: 767px) {
    height: 15vw;
    padding: 2vw 4vw;

    font-size: 6vw;
  }
`;

const ConfirmButton = styled.div`
  width: 100%;
  height: 8vw;

  margin-top: 2.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 3vw;

  border-radius: 8px;

  color: ${({ active }) => (active ? text_white : gray01)};
  background-color: ${({ active }) => (active ? main : gray04)};

  transition: all 0.4s ease-in-out;

  @media (max-width: 767px) {
    height: 12vw;
    margin-top: 4vw;

    font-size: 6vw;
  }
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

  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (mobile) setIsMobile(mobile);
  }, [mobile]);

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

    alert('위아토와 함께해 주셔서 감사드려요!');
  };

  useEffect(() => {
    if (tags.filter((tag) => tag.active).length > 0) {
      setTagsValid(true);
    } else {
      setTagsValid(false);
    }
  }, [tags]);

  useEffect(() => {
    if (nameValid && emailValid && tagsValid) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }

    console.log(nameValid, emailValid, tagsValid);
  }, [nameValid, emailValid, tagsValid]);

  return (
    <Layout>
      {isMobile ? (
        <>
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
              <span className="title">
                일단은 메일로 뉴스레터만 받아볼래요.
              </span>
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
        </>
      ) : (
        <>
          <section className="image-section">
            <Image src={section_1_large} />
          </section>

          <section className="image-section">
            <Image src={section_2_large} />
          </section>

          <section className="image-section">
            <Image src={section_3_large} />
          </section>

          <section className="image-section">
            <Image src={section_4_large} />
          </section>

          <FooterSection>
            <FooterTitle color={text_white}>
              <span>지금 바로 위아토를 만나보세요!</span>
            </FooterTitle>
            <a href={`https://weato.net`} target="_blank" rel="noreferrer">
              <Button>위아토 바로가기</Button>
            </a>
          </FooterSection>

          <ApplySection>
            <div className="box">
              <span className="emoji">📩</span>
              <span className="title">
                일단은 메일로 뉴스레터만 받아볼래요.
              </span>
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
        </>
      )}
    </Layout>
  );
};

export default Landing;
