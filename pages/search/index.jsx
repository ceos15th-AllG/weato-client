import styled from '@emotion/styled';

import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import cookie from 'cookie';

import CardBox from '@common/CardBox';
import Row from '@search/BoardRow';
import Button from '@common/ButtonContainer';

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

const ButtonBox = styled.div`
  margin-top: 60px;

  display: flex;
  justify-content: center;
`;

const Search = (props) => {
  if (!props.data) {
    return <span>로딩 에러...</span>;
  }

  const { keyword, data } = props;

  return (
    <Layout>
      <Title>&apos;{keyword}&apos; 에 대한 검색결과</Title>
      <SubtitleBox>
        <SubTitle>
          &apos;{keyword}&apos; 에 대한 뉴스레터입니다. ({data.numOfNewsletters}
          )
        </SubTitle>
      </SubtitleBox>
      <CardBox data={data.newslettersData} />
      {data.newslettersData.length !== 0 ? (
        <ButtonBox>
          <Button
            text="더보기"
            btnType="4"
            href={`/search/filter?keyword=${keyword}&category=newsletter`}
          />
        </ButtonBox>
      ) : undefined}

      <SubtitleBox>
        <SubTitle>
          &apos;{keyword}&apos; 에 대한 커뮤니티 글입니다. ({data.numOfPosts})
        </SubTitle>
      </SubtitleBox>
      <RowBox>
        {data.postsData.map(
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
      {data.postsData.length !== 0 ? (
        <ButtonBox>
          <Button
            text="더보기"
            btnType="4"
            href={`/search/filter?keyword=${keyword}&category=community`}
          />
        </ButtonBox>
      ) : undefined}
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query;
  const keyword = !query.keyword ? '빈 검색어' : query.keyword.trim();

  try {
    const { access_token } = cookie.parse(context.req.headers.cookie);
    const response = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/search?keyword=${encodeURIComponent(
        keyword
      )}`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log(response.data);

    return {
      props: {
        keyword: keyword,
        data: response.data,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
    props: {},
  };
};

export default Search;
