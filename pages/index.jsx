/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Head from 'next/head';
import Link from 'next/link';

import { text_white } from '@styles/Colors';

import { Display1, Headline2 } from '@styles/FontStyle';

import Card from '@common/CardContainer';
import Button from '@common/ButtonContainer';

import banner from '@public/main_banner.png';

const HomeLayout = styled.div`
  margin-bottom: 4px;
`;

const BannerLayout = styled.div`
  width: 1920px;
  height: 421px;

  background-image: url(${banner.src});
  background-size: contain;
`;

const BannerContent = styled.div`
  position: relative;

  right: 300px;
  top: 140px;

  height: 184px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const BannerText = styled.article`
  text-align: right;

  color: ${text_white};
`;

const HomeContent = styled.main`
  margin: 0px 300px;
  padding-top: 90px;
`;

const CardHeader = styled.header`
  margin-bottom: 60px;
`;

const CardRow = styled.div`
  display: flex;

  justify-content: space-between;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 60px 0px 96px;
`;

function Home(props) {
  console.log(props.data);

  const newsletterData = [
    {
      text: '새로운 대안, JAK 억제제?',
      date: '2022.06.08',
      tag: '약품',
    },
    {
      text: '아이, 어른 모두 아토피가 잠까지',
      date: '2022.06.08',
      tag: '수면',
    },
    {
      text: '샤워, 목욕... 세면 습관으로 아토피 관리',
      date: '2022.06.08',
      tag: '세면',
    },
    {
      text: '아토피... 안 먹으면서까지 관리?',
      date: '2022.06.08',
      tag: '음식',
    },
    {
      text: '늘고 있는 미세먼지와 아토피',
      date: '2022.06.08',
      tag: '환경',
    },
    {
      text: '설거지를 하는데 갑자기 증상이?',
      date: '2022.06.08',
      tag: '기타',
    },
    {
      text: '장에 좋다는 유익균, 아토피에도 도움을?',
      date: '2022.06.08',
      tag: '음식',
    },
    {
      text: '일부 환자들에게 보험 적용되기 시작한 JAK 억제제들',
      date: '2022.06.08',
      tag: '약품',
    },
  ];

  return (
    <>
      <HomeLayout>
        <div>
          <BannerLayout>
            <BannerContent>
              <BannerText
                css={[
                  Headline2,
                  css`
                    line-height: 42px;
                  `,
                ]}
              >
                아토피와의 긴 여정,
                <br />
                이제는 위아토와 함께해요!
              </BannerText>
              <Button text={'바로 구독하기'} btnType={'4'} href="/login" />
            </BannerContent>
          </BannerLayout>

          <HomeContent>
            <CardHeader css={Display1}>이주의 아토레터</CardHeader>
            <CardRow
              css={css`
                margin-bottom: 40px;
              `}
            >
              {newsletterData.slice(0, 4).map(({ text, date, tag, index }) => (
                <Card key={index} text={text} date={date} tag={tag} />
              ))}
            </CardRow>
            <CardRow>
              {newsletterData.slice(4).map(({ text, date, tag, index }) => (
                <Card key={index} text={text} date={date} tag={tag} />
              ))}
            </CardRow>
            <ButtonRow>
              <Button text={'더보기'} btnType={'4'} href="/newsletter" />
            </ButtonRow>

            <CardHeader css={Display1}>가장 많은 스크랩</CardHeader>
            <CardRow
              css={css`
                margin-bottom: 40px;
              `}
            >
              {newsletterData.slice(0, 4).map(({ text, date, tag, index }) => (
                <Card key={index} text={text} date={date} tag={tag} />
              ))}
            </CardRow>
            <CardRow>
              {newsletterData.slice(4).map(({ text, date, tag, index }) => (
                <Card key={index} text={text} date={date} tag={tag} />
              ))}
            </CardRow>
            <ButtonRow>
              <Button text={'더보기'} btnType={'4'} href="/newsletter" />
            </ButtonRow>
          </HomeContent>
        </div>
      </HomeLayout>
    </>
  );
}

export const getServerSideProps = async (context) => {
  // const access_token = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYwMTExNjkxLCJpYXQiOjE2NTk2Nzk2OTF9.MC1yvok5zZ0F2AxTOnwrYhy3xMmk7WqIEabBD0m4j0H1gpTd7BDcNMZDqnIDE-gwxJzRqC2zVeLAE-iaMm8kRw`;
  // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

  try {
    const res = await axios.get('http://3.37.94.86/api/newsletters');

    if (res.status === 200) {
      return {
        props: {
          data: res.data,
        },
      };
    }
    return {
      props: {
        data: null,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: null,
      },
    };
  }
};

export default Home;
