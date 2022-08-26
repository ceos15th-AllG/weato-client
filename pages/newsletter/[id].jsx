import styled from '@emotion/styled';

import axios from 'axios';

import Head from 'next/head';
import Link from 'next/link';

// import { useScrollPercentage } from 'react-scroll-percentage';

import ProgressBar from '@newsletter/ProgressBar';
import Button from '@newsletter/ButtonContainer';

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
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 83px 300px 0px;
`;

const ContentHeader = styled.header`
  width: 100%;

  margin-bottom: 101px;
  padding-bottom: 23px;

  ${Subhead3}

  color : ${text_black};
  border-bottom: 3px solid ${gray06};

  strong {
    margin: 0px 6px;
    font-weight: 300;
  }
`;

const ButtonRow = styled.div`
  margin: 16px 635px 160px;

  display: flex;
  justify-content: right;
`;

const NewsletterForm = styled.div`
  width: 650px;

  display: flex;
  flex-direction: column;

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

const toKoreanTags = {
  DRUG: '약품',
  SLEEP: '수면',
  CLEANING: '세면',
  FOOD: '음식',
  ENVIRONMENT: '환경',
  OTHERWISE: '기타',
  ALL: '전체',
};

const toQueryTags = {
  ALL: 'all',
  DRUG: 'medicine',
  SLEEP: 'sleep',
  CLEANING: 'water',
  FOOD: 'food',
  ENVIRONMENT: 'env',
  OTHERWISE: 'etc',
};

function Newsletter(props) {
  // const [ref, percentage] = useScrollPercentage({
  //   // rootMargin: '100px',
  //   threshold: 0.48,
  // });

  const { newsletterData } = props;

  // const sampleNewsletterData = `<header class='header'>늘고 있는 미세먼지와 아토피</header><span class='header-subscription'>본 뉴스레터는 전문기자의 기사를 기반으로 작성되었습니다.</span><date class='header-date'>2022-05-25</date><span class='content-text'>코로나가 발생하기 전부터, 이미 대한민국에서는 미세먼지가 많은 대기 환경으로 많은 사람들이 마스크에 익숙해져 있었습니다.</span><span class='content-text'>대기 중 미세먼지는 사람들의 호흡기와 피부에 악영향을 주기 때문에, 일반 사람들도 마스크를 쓰거나 외출 후 반드시 손을 씻는 등의 대응을 하고 있습니다.<br />최근에도 대한민국은 대기 중 미세먼지에 신경 쓸 수밖에 없는데 아토피 환우들에게는 어떠한 악영향을 주는지, 아토피 환우분들은 어떻게 대처해야 하는지에 대한 정보를 제공하고자 합니다.</span><div class='content-line'></div><header class='content-header'>😡 미세먼지가 미치는 악영향</header><span class='content-text'><a>순천향 의대 측의 연구 결과</a>에 따르면 미세먼지와 초미세먼지가 증가할 때마다 아토피 환자들의 월 평균 병원 방문 횟수도 같이 증가하였다고 합니다.<br />이는 <a>한국표준과학연구원에서 개발한 신기술</a>로도 확인하였는데요, 대부분 각질이 손상된 아토피 환자들의 피부에는 미세먼지가 더 쉽게 침투해 염증이 악화되는 것이 드러났습니다.</span><span class='content-text'>게다가, 일반 환자들만이 아닌 임산부들의 경우에도 출산 전후 미세먼지에 노출된다면, 출산 후 아이가 생후 1년 사이 아토피를 갖게 될 확률이 타 임산부들보다 약 2배 높다는 연구 결과가 존재합니다.</span><div class='content-line'></div><header class='content-header'>❗️ 대처할 수 있는 방법</header><span class='content-text'>이러한 미세먼지에 대처할 수 있는 방법들로 다음의 사례들을 언급드릴 수 있겠는데요.</span><span class='content-text'><strong>1. 평소보다 많은 미세먼지의 대기에 외출했을 시, 빠르게 세면해주는 것</strong><br/>손, 얼굴 뿐만 아니라 전신을 다 세면해주는 것도 좋으며 그 중 목욕은 세면 영역도 넓고, 피부의 이물질을 제거해 주어 피부를 건강하게 유지하는 데에 도움을 줍니다.<br />다만, 목욕을 할 경우 다음과 같은 사항들에 주의를 기울여야 할 것 같습니다.</span><ul class='content-list'><li class='content-listitem'>pH 4.5~ 5.5의 약산성 세정제 사용</li><li class='content-listitem'>지나치게 오랜 시간 동안의 목욕은 금물</li></ul><span class='content-text'>목욕과 관련한 정보에 대해 정리한 뉴스레터가 따로 있으니 <a>여기서</a> 목욕에 대해 좀 더 참고하시면 도움이 되겠습니다.</span><strong>2. 최소 하루 2회 이상 보습제 도포</strong><br/><span class='content-text'>세면 시 뿐만 아니라, 세면이 안 되어 있는 상태에서도 보습제를 바르는 것은 도움이 된다고 합니다.<br />씻지 않은 상태에서의 보습제 도포가 세균의 증식을 유발한다는 증거가 없으므로 꼭 씻은 뒤가 아니더라도 자주 보습제를 발라주면 좋을 것 같습니다.<br />미국피부과의사회에 따르면 보습제의 주간 적정량 기준은 다음과 같습니다.</span><ul class='content-list'><li class='content-listitem'>소아 : 주당 100g 이상</li><li class='content-listitem'>성인 : 주당 250g 이상</li></ul><div class='content-line'></div><span class='content-text'>날마다 대기 내 미세먼지 농도를 확인하시면서 외출에 주의하시는 분들이 적지 않을 것으로 보입니다.</span><span class='content-text'>미세먼지 뿐만이 아니라 다른 상황들도 주의하셔야 하는 아토피 환우 분들이, 정보를 찾는 데에 들이시는 시간과 비용이 줄기를 바라며 오늘 하루도 힘내시기를 기원합니다!</span>`;

  return (
    // <Layout ref={ref}>
    <Layout>
      <Head>
        <title>뉴스레터 - {newsletterData.title}</title>
        {/* <title>뉴스레터 - 샤워, 목욕, 세면, 습관으로 아토피 관리</title> */}
      </Head>

      {/* <ProgressBar percentage={percentage * 100} /> */}

      <Content>
        <ContentHeader>
          <Link href={`/newsletter`}>
            <a>뉴스레터</a>
          </Link>
          <strong>&#xE001;</strong>
          <Link href={`/newsletter?tag=${toQueryTags[newsletterData.tagType]}`}>
            <a>{toKoreanTags[newsletterData.tagType]}</a>
          </Link>
        </ContentHeader>

        <NewsletterForm
          // dangerouslySetInnerHTML={{ __html: sampleNewsletterData }}
          dangerouslySetInnerHTML={{ __html: newsletterData.content }}
        />
      </Content>

      <ButtonRow>
        <Button value={newsletterData.likeCount} btnType="heart" />
        <Button value={newsletterData.bookmarkCount} btnType="save" />
      </ButtonRow>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  if (typeof window !== 'undefined') {
    const access_token = localStorage.getItem('access_token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  }

  try {
    const res = await axios.get(
      `https://www.weato.kro.kr/api/newsletters/${query.id}`
    );

    if (res.status === 200) {
      return {
        props: {
          newsletterId: query.id,
          newsletterData: res.data,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      props: {
        newsletterId: query.id,
      },
    };
  }
};

export default Newsletter;
