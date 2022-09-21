import styled from '@emotion/styled';

import Link from 'next/link';

import axios from 'axios';
import cookie from 'cookie';

import PostContent from '@community/PostContent';
import PostComment from '@community/PostComment';

import { Subhead3 } from '@styles/FontStyle';
import { main, gray02, gray06, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 874px;

  margin: 79px 523px 115px;

  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.header`
  width: 100%;
  padding-bottom: 23px;

  ${Subhead3}

  color : ${text_black};
  border-bottom: 3px solid ${gray06};

  strong {
    margin: 0px 6px;
    font-weight: 300;
  }
`;

function Community(props) {
  const { postId, postData } = props;
  const toQueryTypes = { MANAGEMENT: 'knowhow', QUESTION: 'questions' };
  const toKoreanTypes = { MANAGEMENT: '나만의 관리법', QUESTION: '질문' };

  return (
    <Layout>
      <ContentHeader>
        <Link href={`/community`}>
          <a>커뮤니티</a>
        </Link>
        <strong>&#xE001;</strong>
        <Link href={`/community/board?tab=${toQueryTypes[postData.boardType]}`}>
          <a>{toKoreanTypes[postData.boardType]}</a>
        </Link>
      </ContentHeader>

      <PostContent id={postId} post={postData} />
      <PostComment id={postId} comment={postData.comments} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  try {
    const { access_token } = cookie.parse(context.req.headers.cookie);
    const response = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/posts/${query.id}`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return {
      props: {
        postId: query.id,
        postData: response.data,
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

export default Community;
