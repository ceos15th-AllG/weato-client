import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import axios from 'axios';
import cookie from 'cookie';

import { Subhead4 } from '@styles/FontStyle';

import { text_black } from '@styles/Colors';

import TabBar from '@community/TabBar';
import BoardRow from '@community/BoardRow';
import BoardCard from '@community/BoardCard';
import Pagenator from '@common/Pagenator';

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
    return <span>로딩 에러...</span>;
  }

  const { query } = props;
  const { tab, tag, page } = query;
  const { min, max, data } = props.data;

  const recommends = [
    {
      id: '0',
      title: '아토피 이제 괜찮아졌어요',
      content:
        '아토피를 앓은 지도 12년 째... 지겨웠던 아토피와의 싸움이 그래도 나아지기 시작하네요\n1주일에 3번 30분씩 밖에서 뛰고 온 지 1달 쯤 지나니까 확실히 피부 발진이 줄어든 게 느껴집니다.',
      view: '200',
      like: '200',
    },
    {
      id: '1',
      title: '나아진 경험 공유해요!',
      content:
        '아토피를 앓은 지도 12년 째... 지겨웠던 아토피와의 싸움이 그래도 나아지기 시작하네요\n1주일에 3번 30분씩 밖에서 뛰고 온 지 1달 쯤 지나니까 확실히 피부 발진이 줄어든 게 느껴집니다.',
      view: '200',
      like: '200',
    },
  ];

  return (
    <Layout>
      <TabBar selected={tab} />
      <Row>
        <BoardLayout>
          {data.map(
            ({
              id,
              title,
              createdAt,
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
                author={author}
                // level={level}
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
          {recommends.map(({ id, title, content, view, like }) => (
            <BoardCard
              key={id}
              title={title}
              content={content}
              view={view}
              like={like}
            />
          ))}
        </BoardRecommend>
      </Row>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  const tab = !query.tab ? 'hot' : query.tab;
  const tag = !query.tag ? 'all' : query.tag;
  const page = !query.page ? 1 : parseInt(query.page);

  try {
    const { access_token } = cookie.parse(context.req.headers.cookie);

    if (tab === 'hot') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/posts/hot-topics`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          data: response.data,
        },
      };
    } else if (tab === 'knowhow') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/posts?type=management&page=${page}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
          data: response.data,
        },
      };
    } else if (tab === 'questions') {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/posts?type=question&page=${page}`,
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      return {
        props: {
          query: { ...query, tab: tab, tag: tag, page: page },
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
      data: null,
    },
  };
};

export default Board;
