import styled from '@emotion/styled';

import axios from 'axios';

import { text_white } from '@styles/Colors';

import { Display1, Headline2 } from '@styles/FontStyle';

import CardBox from '@common/CardBox';
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
  ${Headline2}

  line-height : 42px;
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
  if (!props.newsletterHot || !props.newsletterScrap) {
    console.log(props);
    return <span>로딩 에러...</span>;
  }

  const { newsletterHot, newsletterScrap } = props;

  return (
    <>
      <HomeLayout>
        <div>
          <BannerLayout>
            <BannerContent>
              <BannerText>
                아토피와의 긴 여정,
                <br />
                이제는 위아토와 함께해요!
              </BannerText>
              <Button text={'바로 구독하기'} btnType={'4'} href="/login" />
            </BannerContent>
          </BannerLayout>

          <HomeContent>
            <CardHeader css={Display1}>이주의 아토레터</CardHeader>
            <CardBox data={newsletterHot.data} />
            <ButtonRow>
              <Button text={'더보기'} btnType={'4'} href="/newsletter" />
            </ButtonRow>

            <CardHeader css={Display1}>가장 많은 스크랩</CardHeader>
            <CardBox data={newsletterScrap.data} />
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
  try {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxNzc4NTgyLCJpYXQiOjE2NjEzNDY1ODJ9.nX3hOm_LpPt5LEFisXvUHnTph3PKl7ZHDBhAP0KqaCKQRHuBnfGSJCrWYkPJzWbfY8OjY1qggyotLJixi7Qh8A`;

    const responseHot = await axios.get(
      `https://www.weato.kro.kr/api/newsletters/hot-topics`
    );

    const responseScrap = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/newsletters/most-bookmarked`,
    });

    return {
      props: {
        newsletterHot: responseHot.data,
        newsletterScrap: responseScrap.data,
      },
    };
  } catch (error) {
    return { props: { error: error.message } };
  }

  return {
    props: {
      newsletterHot: null,
      newsletterScrap: null,
    },
  };
};

export default Home;
