/** @jsxImportSource @emotion/react */
import { keyframes, withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Reveal, { Fade } from 'react-awesome-reveal';

// config({ ssrFadeout: true });

import axios from 'axios';

import { useState, useEffect, useCallback } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { useMediaQuery } from 'react-responsive';

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
} from '@styles/Colors';

import bg_1 from '@public/landing/bg_1.png';
import bg_2 from '@public/landing/bg_2.png';
import bg_3 from '@public/landing/bg_3.png';
import bg_4 from '@public/landing/bg_4.png';
import mockup_1 from '@public/landing/mockup_1.png';
import mockup_2 from '@public/landing/mockup_2.png';
import mockup_3 from '@public/landing/mockup_3.png';
import mockup_4 from '@public/landing/mockup_4.png';
import card_1 from '@public/landing/card_1.png';
import card_2 from '@public/landing/card_2.png';
import card_3 from '@public/landing/card_3.png';
import card_4 from '@public/landing/card_4.png';
import card_5 from '@public/landing/card_5.png';
import comment_1 from '@public/landing/comment_1.png';
import comment_2 from '@public/landing/comment_2.png';

const Layout = styled.div`
  width: 100vw;

  /* max-width: 1920px; */
  /* height: 100vh; */

  display: flex;
  flex-direction: column;

  /* @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 300px;
    background-color: blue;
  }

  @media all and (max-width: 767px) {
    width: 300px;
  } */

  /* @media (max-width: 600px) {
    background-color: red;
  } */
`;

const Section_1 = styled.section`
  width: 100%;
  /* height: 1080px; */

  position: relative;

  background-image: url(${bg_1.src});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Section_2 = styled.section`
  /* height: 700px; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 200px 60px;
  row-gap: 60px;

  background-color: #f8f8f8;

  h3 {
    font-weight: 500;
    /* font-size: 40px; */
    font-size: min(8vw, 40px);
  }

  span {
    font-weight: 300;
    /* font-size: 32px; */
    font-size: min(2vw, 32px);
    line-height: min(2.5vw, 52px);
    text-align: center;
  }

  span > strong {
    font-weight: 500;
    color: ${main};
  }
`;

const Section_3 = styled.section`
  width: 100%;
  height: 800px;

  position: relative;
  display: flex;
  justify-content: center;

  background-image: url(${bg_2.src});
  background-size: contain;
  background-repeat: no-repeat;

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    width: 479px;
    height: 547px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .line-section {
    position: absolute;
    top: 130px;
    left: 655px;

    width: 610px;
    height: 177.5px;

    border-bottom: 4px dashed ${main};
  }

  .circle-section {
    position: relative;
    z-index: 10;
    width: 355px;
    height: 355px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 4px solid ${main};

    color: ${main};
    font-weight: 700;
    font-size: 36px;
    background-color: white;

    transition: 0.3s all ease-in-out;

    &:hover {
      background-color: ${main};
      color: ${text_white};
    }
  }

  .text-section {
    overflow: visible;

    font-weight: 300;
    font-size: 28px;
    line-height: 48px;
    text-align: center;
  }
`;

const Section_4 = styled.section`
  height: 1740px;

  position: relative;

  background-image: url(${bg_3.src});
  background-size: contain;
  background-repeat: no-repeat;

  .text-box {
    margin-top: 238px;
    margin-left: 128px;

    display: flex;
    flex-direction: column;
  }

  .text-box-sub-title {
    display: flex;

    margin-bottom: 10px;

    span:nth-of-type(1) {
      margin-right: 8px;
      padding-top: 2px;

      color: ${sub};
      font-size: 18px;
    }

    span:nth-of-type(2) {
      font-weight: 700;
      font-size: 28px;
      color: ${main};
    }
  }

  .text-box-title {
    margin-bottom: 35px;

    font-weight: 400;
    font-size: 55px;
  }

  .text-box-content {
    font-weight: 300;
    font-size: 28px;
    line-height: 38px;
  }
`;

const Section_5 = styled.section`
  height: 2036px;

  position: relative;

  background-image: url(${bg_4.src});
  background-size: contain;
  background-repeat: no-repeat;

  .text-box {
    margin-top: 235px;
    margin-right: 128px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
  }

  .text-box-sub-title {
    display: flex;

    margin-bottom: 10px;

    span:nth-of-type(1) {
      margin-right: 8px;
      padding-top: 2px;

      color: ${sub};
      font-size: 18px;
    }

    span:nth-of-type(2) {
      font-weight: 700;
      font-size: 28px;
      color: ${main};
    }
  }

  .text-box-title {
    margin-bottom: 35px;

    font-weight: 400;
    font-size: 55px;
  }

  .text-box-content {
    font-weight: 300;
    font-size: 28px;
    line-height: 38px;
  }
`;

const FooterSection = styled.footer`
  padding: 150px 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background-color: ${({ bgColor }) => bgColor};
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.span`
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 60px;

  margin-bottom: 65px;
`;

const TagLayout = styled.div`
  margin-top: 21px;

  width: 100%;

  display: grid;
  /* justify-content: center; */
  grid: '. . .';
  column-gap: 21px;
  row-gap: 19px;
`;

const TagButton = styled.div`
  width: 100%;
  /* min-width: 360px; */
  height: 84px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ disabled }) => (disabled ? gray03 : text_white)};
  font-weight: 700;
  font-size: 30px;

  border-radius: 8px;

  background-color: ${({ disabled }) => (disabled ? `white` : main)};

  transition: all 0.4s ease-in-out;
`;

const Button = styled.div`
  width: 360px;
  height: 92px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${main};
  font-weight: 700;
  font-size: 30px;

  border-radius: 8px;

  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  height: 92px;

  outline: none;
  border: none;
  border-radius: 8px;

  margin-bottom: 21px;
  padding: 16px 24px;

  color: ${main};
  font-weight: 500;
  font-size: 30px;

  background-color: white;
`;

const ConfirmButton = styled.div`
  width: 100%;
  height: 92px;

  margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 30px;

  border-radius: 8px;

  color: ${({ active }) => (active ? text_white : gray03)};
  background-color: ${({ active }) => (active ? main : `white`)};

  transition: all 0.4s ease-in-out;
`;

const CardLoopAnimation = keyframes`
  0% {
      left: 0;
    }
    100% {
      left: -62.2%;
    }
`;

const MockupArea = styled.div`
  width: 100%;
  /* min-height: 1000px; */
  overflow: hidden;

  .first-mockup-container {
    position: relative;
    top: 0px;

    width: 85vw;
    /* max-width: 1920px; */
  }

  .second-mockup-container {
    position: absolute;
    float: right;
    top: 270px;
    right: 0px;

    width: 1550px;
  }

  .third-mockup-container {
    position: relative;
    overflow: visible;
    left: 0%;
    top: 254px;
    height: 100%;

    display: flex;

    animation: ${CardLoopAnimation} 15s infinite linear;
  }

  .third-mockup-item {
    min-width: 378.56px;
    margin: 0px 10px;
  }

  .fourth-mockup-container {
    position: absolute;
    top: 512px;
    left: 47px;

    width: 1808px;
  }

  .fifth-mockup-container {
    position: absolute;
    top: 512px;
    left: 128px;

    width: 1399px;
  }

  .sixth-mockup-container {
    position: absolute;
    float: right;
    top: 728px;
    right: 108.33px;

    width: 576.67px;
  }

  .seventh-mockup-container {
    position: absolute;
    float: right;
    top: 869px;
    right: 295.24px;

    width: 447.76px;
  }
`;

const RevealAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
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

  // if (isMobile) return <span>모바일</span>;

  return (
    <>
      <Layout>
        <Section_1>
          <MockupArea>
            <Fade triggerOnce duration={1000} delay={500}>
              <div className="first-mockup-container">
                <Image alt="" src={mockup_1} />
              </div>
            </Fade>
          </MockupArea>
        </Section_1>

        <Section_2>
          <h3>
            너무 다양하고 어렵기만 한 아토피 정보, 찾는 데 지치진 않으셨나요?
          </h3>
          <span>
            아토피는 쉽게 낫지 않는 난치병으로써 긴 여정으로 비유되기도 합니다.
            <br />
            저희 위아토는 환자분들이 아토피라는 긴 여정에서 지치지 않도록
            <br />
            <strong>사용자별 맞춤 뉴스레터 서비스</strong>와{' '}
            <strong>서로의 경험을 나눌 수 있는 커뮤니티</strong>를 제공합니다.
          </span>
        </Section_2>

        <Section_3>
          <div className="box">
            <Fade triggerOnce duration={1000} delay={2500}>
              <section className="line-section"></section>
            </Fade>
            <Fade triggerOnce duration={1000} delay={1000}>
              <div className="content">
                <section className="circle-section">편리성</section>
                <section className="text-section">
                  직접 정보를 찾지 말고
                  <br />
                  뉴스레터를 통해
                  <br />
                  편하게 정보를 받아보세요.
                </section>
              </div>
            </Fade>
            <Fade triggerOnce duration={1000} delay={1300}>
              <div className="content">
                <section className="circle-section">신뢰성</section>
                <section className="text-section">
                  공신력 있는 기사, 논문 등을
                  <br />
                  참조해 만든 뉴스레터로
                  <br />
                  안심하고 읽어보세요.
                </section>
              </div>
            </Fade>
            <Fade triggerOnce duration={1000} delay={1900}>
              <div className="content">
                <section className="circle-section">맞춤형</section>
                <section className="text-section">
                  선택 태그 별 뉴스레터와
                  <br />
                  유사 병력 회원의 경험 정보 게시글로
                  <br />
                  보다 적합한 정보를 얻어보세요.
                </section>
              </div>
            </Fade>
          </div>
        </Section_3>

        <Section_4>
          <div className="text-box">
            <div className="text-box-sub-title">
              <span>01</span>
              <span>맞춤 뉴스레터</span>
            </div>
            <div className="text-box-title">
              아토피 정보 찾지 마세요, <strong>받아보세요</strong>
            </div>
            <div className="text-box-content">
              약품, 수면, 세면, 음식, 환경, 기타 6가지 영역 중 원하는 분야를
              선택하고,
              <br />
              신뢰성 있는 아토피 정보가 들어있는 맞춤 뉴스레터를 받아보세요.
            </div>
          </div>
          <MockupArea>
            <div className="third-mockup-container">
              <div className="third-mockup-item">
                <Image alt="" src={card_2} />
              </div>
              <div className="third-mockup-item">
                <Image alt="" src={card_3} />
              </div>
              <div className="third-mockup-item">
                <Image alt="" src={card_4} />
              </div>
              <div className="third-mockup-item">
                <Image alt="" src={card_2} />
              </div>
              <div className="third-mockup-item">
                <Image alt="" src={card_3} />
              </div>
              <div className="third-mockup-item">
                <Image alt="" src={card_4} />
              </div>
              <div className="third-mockup-item">
                <Image alt="" src={card_2} />
              </div>
              <div className="third-mockup-item">
                <Image alt="" src={card_3} />
              </div>
              <div className="third-mockup-item">
                <Image alt="" src={card_4} />
              </div>
            </div>
            <Fade triggerOnce duration={1000} delay={1000}>
              <div className="second-mockup-container">
                <Image alt="" src={mockup_2} />
              </div>
            </Fade>
          </MockupArea>
        </Section_4>

        <Section_5>
          <div className="text-box">
            <div className="text-box-sub-title">
              <span>02</span>
              <span>경험 커뮤니티</span>
            </div>
            <div className="text-box-title">
              <strong>질문부터 노하우까지,</strong> 모두 이곳에서
            </div>
            <div className="text-box-content">
              더 이상 나 혼자서 고민하지 말고
              <br />
              환우분들과 경험에 대해 서로 이야기를 나눠보세요.
            </div>
          </div>
          <MockupArea>
            <Fade triggerOnce duration={1000} delay={1000}>
              <div className="fourth-mockup-container">
                <Image alt="" src={mockup_3} />
              </div>
            </Fade>
            <Fade triggerOnce duration={1000} delay={1300}>
              <div className="fifth-mockup-container">
                <Image alt="" src={mockup_4} />
              </div>
            </Fade>
            <Fade triggerOnce duration={1000} delay={2500}>
              <div className="sixth-mockup-container">
                <Image alt="" src={comment_1} />
              </div>
            </Fade>
            <Fade triggerOnce duration={1000} delay={2800}>
              <div className="seventh-mockup-container">
                <Image alt="" src={comment_2} />
              </div>
            </Fade>
          </MockupArea>
        </Section_5>

        <Reveal
          triggerOnce
          keyframes={RevealAnimation}
          duration={1500}
          // delay={500}
        >
          <FooterSection bgColor={main}>
            <FooterBox>
              <FooterTitle color={text_white}>
                <span>지금 바로 위아토를 만나보세요!</span>
              </FooterTitle>
              <a href={`https://weato.net`} target="_blank" rel="noreferrer">
                <Button>위아토 바로가기</Button>
              </a>
            </FooterBox>
          </FooterSection>

          <FooterSection bgColor={gray01}>
            <FooterBox>
              <FooterTitle color={text_black}>
                <span>일단은 메일로 뉴스레터만 받아볼래요.</span>
              </FooterTitle>
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
                💌 구독하기
              </ConfirmButton>
            </FooterBox>
          </FooterSection>
        </Reveal>
      </Layout>
    </>
  );
};

export default Landing;
