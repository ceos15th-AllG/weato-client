import styled from '@emotion/styled';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import cookie from 'cookie';

import { Subhead4 } from '@styles/FontStyle';

import { text_black } from '@styles/Colors';

import TabBar from '@community/TabBar';
import TagDropdown from '@community/TagDropdown';
import BoardRow from '@community/BoardRow';
import BoardCard from '@community/BoardCard';
import Pagenator from '@common/Pagenator';
import JoinUs from '@community/JoinUs';

const Layout = styled.div`
  margin: 39px 300px 67px;

  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoardLayout = styled.div`
  width: 762px;

  margin-top: 51px;

  display: flex;
  flex-direction: column;
`;

const BoardRecommend = styled.div`
  margin-top: 59px;
  row-gap: 24px;

  width: 427px;

  display: flex;
  flex-direction: column;
`;

const BoardRecommendHeader = styled.span`
  ${Subhead4}

  color :${text_black};
`;

const BottomRow = styled.div`
  margin-top: 22px;

  display: flex;
  justify-content: center;
`;

function Board(props) {
  const router = useRouter();

  if (!props.data) {
    return <JoinUs></JoinUs>;
  }

  const { query, recommends } = props;
  const { tab, page, tag } = query;
  const { min, max, data } = props.data;

  return (
    <Layout>
      <TabBar query={query} />
      <Row>
        <BoardLayout>
          {data.map(
            ({
              id,
              title,
              createdAt,
              level,
              author,
              commentsCounter,
              views,
              likeCounter,
              boardType,
            }) => (
              <BoardRow
                key={id}
                id={id}
                title={title}
                boardType={boardType}
                views={views}
                likeCounter={likeCounter}
                level={level}
                author={author}
              />
            )
          )}

          {tab === 'knowhow' || tab === 'questions' ? (
            <BottomRow>
              <Pagenator
                path={router.pathname}
                query={query}
                min={min}
                max={max}
                current={page}
              />
            </BottomRow>
          ) : undefined}
        </BoardLayout>

        <BoardRecommend>
          <BoardRecommendHeader>실시간 추천글</BoardRecommendHeader>
          {recommends.data.map(({ id, title, content, views, likeCounter }) => (
            <Link key={id} href={`/community/post/${id}`}>
              <a>
                <BoardCard
                  title={title}
                  content={content}
                  view={views}
                  like={likeCounter}
                />
              </a>
            </Link>
          ))}
        </BoardRecommend>
      </Row>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  const toAPITags = {
    all: 'all',
    medicine: 'drug',
    sleep: 'sleep',
    water: 'cleaning',
    food: 'food',
    env: 'environment',
    etc: 'otherwise',
  };

  const tab = !query.tab ? 'hot' : query.tab;
  const page = !query.page ? 1 : parseInt(query.page);
  const tag = !query.tag ? 'all' : query.tag;

  try {
    const { token } = cookie.parse(context.req.headers.cookie);

    const recommendsResponse = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/posts/recommended-posts`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (tab === 'hot') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/posts/hot-topics`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          recommends: recommendsResponse.data,
          data: response.data,
        },
      };
    } else if (tab === 'knowhow') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/posts?type=management&page=${page}&tag=${toAPITags[tag]}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          recommends: recommendsResponse.data,
          data: response.data,
        },
      };
    } else if (tab === 'questions') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/posts?type=question&page=${page}&tag=${toAPITags[tag]}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          recommends: recommendsResponse.data,
          data: response.data,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      query: { ...query, tab: tab, tag: tag, page: page },
      recommends: null,
      data: null,
    },
  };
};

export default Board;
