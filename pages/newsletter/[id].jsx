import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import ProgressBar from '@newsletter/ProgressBar';
import ActionButton from '@common/ActionButton';

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
import { Router } from 'next/router';

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
  const router = useRouter();
  const { newsletterId, newsletterData } = props;
  const [percentage, setPercentage] = useState(0.0);
  const { login, user, token } = useContext(Context);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [scrap, setScrap] = useState(false);
  const [scrapCount, setScrapCount] = useState(0);

  const getScrollPercentage = () => {
    const scroll = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const viewport = scrollHeight - clientHeight;
    const percentage = (scroll / viewport) * 100;

    return setPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollPercentage);
    return () => window.removeEventListener('scroll', getScrollPercentage);
  }, []);
  useEffect(() => {
    setLikeCount(newsletterData.likeCount);
    setScrapCount(newsletterData.bookmarkCount);
  }, []);

  const onClickLike = async (event) => {
    if (!login) {
      router.push(`/login`);
      return;
    }

    try {
      const response = await axios({
        method: 'post',
        url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/likes`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLikeCount(response.data.likecount);
      // alert('좋아요 완료');
    } catch (error) {
      // alert(error);
    }
    setLike(!like);
  };
  const onClickScrap = async (event) => {
    if (!login) {
      router.push(`/login`);
      return;
    }

    try {
      const response = await axios({
        method: 'post',
        url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/bookmark`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setScrapCount(response.data.bookmarkCount);
      // alert('스크랩 완료');
    } catch (error) {
      // alert(error);
    }
    setScrap(!scrap);
  };

  return (
    <Layout>
      <Head>
        <title>뉴스레터 - {newsletterData.title}</title>
      </Head>

      <ProgressBar percentage={percentage} />

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
          dangerouslySetInnerHTML={{ __html: newsletterData.content }}
        />
      </Content>

      <ButtonRow>
        <ActionButton
          btnType="like"
          value={likeCount}
          onClick={onClickLike}
          active={like}
        />
        <ActionButton
          btnType="scrap"
          value={scrapCount}
          onClick={onClickScrap}
          active={scrap}
        />
      </ButtonRow>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  try {
    const response = await axios.get(
      `https://www.weato.kro.kr/api/newsletters/${query.id}`
    );

    return {
      props: {
        newsletterId: query.id,
        newsletterData: response.data,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      newsletterId: query.id,
    },
  };
};

export default Newsletter;
