/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Reveal, { Fade } from 'react-awesome-reveal';

// config({ ssrFadeout: true });

import Image from 'next/image';
import Link from 'next/link';

import { main, gray01, text_white, sub } from '@styles/Colors';

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
  width: 1920px;

  display: flex;
  flex-direction: column;
`;

const Section_1 = styled.section`
  width: 100%;
  height: 1080px;

  position: relative;

  background-image: url(${bg_1.src});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Section_2 = styled.section`
  height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 200px 222px;

  background-color: #f8f8f8;

  h3 {
    font-weight: 500;
    font-size: 40px;
  }

  span {
    font-weight: 300;
    font-size: 32px;
    line-height: 52px;
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

    span:nth-child(1) {
      margin-right: 8px;
      padding-top: 2px;

      color: ${sub};
      font-size: 18px;
    }

    span:nth-child(2) {
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

    span:nth-child(1) {
      margin-right: 8px;
      padding-top: 2px;

      color: ${sub};
      font-size: 18px;
    }

    span:nth-child(2) {
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
  height: 644px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${main};
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.span`
  color: ${text_white};
  font-weight: 700;
  font-size: 60px;

  margin-bottom: 48px;
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

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 128px;
  margin-bottom: 80px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FooterText = styled.span`
  color: ${gray01};
  font-size: 24px;
  font-weight: 300px;
  line-height: 36px;
  text-align: right;
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
  min-height: 1000px;
  overflow: hidden;

  .first-mockup-container {
    position: relative;
    top: 0px;

    width: 1650px;
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
  return (
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
        <FooterSection>
          <FooterBox>
            <FooterTitle>지금 바로 위아토를 만나보세요!</FooterTitle>
            <Link href={'/'}>
              <a>
                <Button>위아토 바로가기</Button>
              </a>
            </Link>
          </FooterBox>
        </FooterSection>
      </Reveal>
    </Layout>
  );
};

export default Landing;
