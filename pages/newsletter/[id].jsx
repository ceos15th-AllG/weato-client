import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import cookie from 'cookie';

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

  .content-listitem-nested {
    list-style-type: circle;
  }

  .content-img {
    width: 100%;
    margin-bottom: 24px;

    border-radius: 4px;
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
  const { login, user, token } = useContext(Context);

  const [percentage, setPercentage] = useState(0.0);

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

  // 스크롤 퍼센테이지 진행 바 업데이트 로직
  useEffect(() => {
    window.addEventListener('scroll', getScrollPercentage);
    return () => window.removeEventListener('scroll', getScrollPercentage);
  }, []);

  // 페이지 로딩 후 기본 값 세팅
  useEffect(() => {
    setLike(newsletterData.likeChecker);
    setLikeCount(newsletterData.likeCount);
    setScrap(newsletterData.bookmarkChecker);
    setScrapCount(newsletterData.bookmarkCount);
  }, []);

  const onClickLike = async (event) => {
    if (!login) {
      router.push(`/login`);
      return;
    }

    try {
      if (!like) {
        const response = await axios({
          method: 'post',
          url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/likes`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLike(true);
        setLikeCount(response.data.likecount);
        // alert('좋아요 완료');
      } else {
        const response = await axios({
          method: 'delete',
          url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/likes`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLike(false);
        setLikeCount(likeCount - 1);
        // alert('좋아요 취소 완료');
      }
    } catch (error) {
      if (error.response.status === 400) {
        setLike(!like);
      } else {
        alert(error);
      }
    }
  };

  const onClickScrap = async (event) => {
    if (!login) {
      router.push(`/login`);
      return;
    }

    try {
      if (!scrap) {
        const response = await axios({
          method: 'post',
          url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/bookmarks`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setScrap(true);
        setScrapCount(response.data.bookmarkCount);
        // alert('스크랩 완료');
      } else {
        const response = await axios({
          method: 'delete',
          url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/bookmarks`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setScrap(false);
        setScrapCount(response.data.bookmarkCount);
        // alert('스크랩 취소 완료');
      }
    } catch (error) {
      if (error.response.status === 400) {
        setScrap(!scrap);
      } else {
        alert(error);
      }
    }
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

        <NewsletterForm>
          <header className="header">{newsletterData.title}</header>
          <span className="header-subscription">
            본 뉴스레터는 전문기자의 기사를 기반으로 작성되었습니다.
          </span>
          <date className="header-date">
            {newsletterData.createdAt.slice(0, 10).replaceAll('-', '.')}
          </date>
        </NewsletterForm>

        <NewsletterForm
          dangerouslySetInnerHTML={{ __html: newsletterData.content }}
        />
      </Content>

      <ButtonRow>
        <ActionButton
          btnType="like"
          value={likeCount}
          onClick={onClickLike}
          active={login && like}
        />
        <ActionButton
          btnType="scrap"
          value={scrapCount}
          onClick={onClickScrap}
          active={login && scrap}
        />
      </ButtonRow>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  let login = null;
  let token = null;

  try {
    const cookieProps = cookie.parse(context.req.headers.cookie);
    login = cookieProps.login;
    token = cookieProps.token;
  } catch (error) {
    console.log(error);
  }

  try {
    if (token) {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/newsletters/${query.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        props: {
          newsletterId: query.id,
          newsletterData: response.data,
        },
      };
    } else {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/newsletters/${query.id}`,
      });

      return {
        props: {
          newsletterId: query.id,
          newsletterData: response.data,
        },
      };
    }
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
