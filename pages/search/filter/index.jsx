import styled from '@emotion/styled';

import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';

import CardBox from '@common/CardBox';
import Row from '@search/BoardRow';
import Pagenator from '@common/Pagenator';

import { Display1, Body4 } from '@styles/FontStyle';

import { main, text_black } from '@styles/Colors';

const Layout = styled.div`
  margin: 0px 300px 167px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin: 95px 0px 30px;

  align-self: center;

  ${Display1}

  color :${text_black};
`;

const SubtitleBox = styled.div`
  width: 100%;

  margin: 100px 0px 40px;

  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.span`
  ${Body4}

  color : ${main};
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PagenatorBox = styled.div`
  margin: 73px 0px 210px;

  display: flex;
  justify-content: center;
`;

function Filter(props) {
  const router = useRouter();

  if (!props.data) {
    return <span>로딩 에러...</span>;
  }

  const { query } = props;
  const { keyword, category, page } = query;
  const { data, totalNum, min, max } = props.data;

  return (
    <Layout>
      <Title>
        &apos;{keyword}&apos;
        {category === 'newsletter' ? ' 에 대한 뉴스레터 검색결과' : undefined}
        {category === 'community' ? ' 에 대한 커뮤니티 검색결과' : undefined}
      </Title>

      {category === 'newsletter' ? (
        <>
          <SubtitleBox>
            <SubTitle>
              &apos;{keyword}&apos; 에 대한 뉴스레터입니다. ({totalNum})
            </SubTitle>
          </SubtitleBox>
          <CardBox data={data} />
        </>
      ) : undefined}

      {category === 'community' ? (
        <>
          <SubtitleBox>
            <SubTitle>
              &apos;{keyword}&apos; 에 대한 커뮤니티 글입니다. ({totalNum})
            </SubTitle>
          </SubtitleBox>
          <RowBox>
            {data.map(
              (
                {
                  id,
                  boardType,
                  title,
                  // createdAt,
                  views,
                  likeCounter,
                  author,
                  // commentsCounter,
                },
                index
              ) => (
                <Link key={index} href={`/community/post/${id}`}>
                  <a>
                    <Row
                      category={boardType}
                      title={title}
                      view={views}
                      like={likeCounter}
                      name={author}
                      level={`새싹`}
                    />
                  </a>
                </Link>
              )
            )}
          </RowBox>
        </>
      ) : undefined}

      <PagenatorBox>
        <Pagenator
          path={router.pathname}
          query={query}
          min={min}
          max={max}
          current={page}
        />
      </PagenatorBox>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const keyword = !query.keyword ? '빈 검색어' : query.keyword;
  const category = !query.category ? 'newsletter' : query.category;
  const page = !query.page ? 1 : parseInt(query.page);

  try {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxNzc4NTgyLCJpYXQiOjE2NjEzNDY1ODJ9.nX3hOm_LpPt5LEFisXvUHnTph3PKl7ZHDBhAP0KqaCKQRHuBnfGSJCrWYkPJzWbfY8OjY1qggyotLJixi7Qh8A`;

    if (category === 'newsletter') {
      const res = await axios.get(
        `https://www.weato.kro.kr/api/newsletters/search?keyword=${encodeURIComponent(
          keyword
        )}&page=${page}`
      );

      return {
        props: {
          query: { ...query, keyword: keyword, category: category, page: page },
          data: res.data,
        },
      };
    } else if (category === 'community') {
      const res = await axios.get(
        `https://www.weato.kro.kr/api/posts/search?keyword=${encodeURIComponent(
          keyword
        )}&page=${page}`
      );

      return {
        props: {
          query: { ...query, keyword: keyword, category: category, page: page },
          data: res.data,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      query: { ...query, keyword: keyword, category: category, page: page },
      data: null,
    },
  };
};

export default Filter;
