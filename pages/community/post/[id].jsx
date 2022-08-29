import styled from '@emotion/styled';

import Link from 'next/link';

import axios from 'axios';

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
  const { postData } = props;
  const toQueryTypes = { MANAGEMENT: 'knowhow', QUESTION: 'questions' };
  const toKoreanTypes = { MANAGEMENT: '나만의 관리법', QUESTION: '질문' };

  console.log(postData);

  return (
    <Layout>
      <ContentHeader>
        <Link href={`/community`}>
          <a>커뮤니티</a>
        </Link>
        <strong>&#xE001;</strong>
        <Link href={`/community/board?tab=${toQueryTypes['MANAGEMENT']}`}>
          <a>{toKoreanTypes['MANAGEMENT']}</a>
        </Link>
      </ContentHeader>

      <PostContent post={postData} />
      <PostComment comment={postData.comments} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  try {
    const res = await axios.get(
      `https://www.weato.kro.kr/api/posts/${query.id}`
    );

    if (res.status === 200) {
      return {
        props: {
          postId: query.id,
          postData: res.data,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      // redirect: {
      //   permanent: false,
      //   destination: '/404',
      // },
      props: {
        postId: query.id,
      },
    };
  }
};

export default Community;
