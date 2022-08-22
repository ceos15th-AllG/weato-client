import styled from '@emotion/styled';

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
`;

function Community(props) {
  const { postData } = props;

  return (
    <Layout>
      <ContentHeader>커뮤니티 &#xE001; 나만의 관리법</ContentHeader>
      <PostContent post={postData} />
      <PostComment comment={postData.comments} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  const access_token = `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxMzUwNjE4LCJpYXQiOjE2NjA5MTg2MTh9.zAZVUEvNFngArcveTVSFqR0Cxy1Xsgy5YMQtZN29iE5W1fzES-5GNH2si_9lbNI_7itWCjmrZDsNIJtD0Bofzg`;
  axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

  try {
    const res = await axios.get(`http://3.37.94.86/api/posts/${query.id}`);

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
