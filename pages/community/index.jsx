import styled from '@emotion/styled';

import axios from 'axios';
import cookie from 'cookie';

import HotTopic from '@community/HotTopic';
import Knowhow from '@community/Knowhow';
import Questions from '@community/Question';
import Banner from '@community/Banner';
import QnA from '@community/QnA';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  margin: 83px 300px 119px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Board = styled.div`
  width: 873px;
  height: 723px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 53px;
`;

function Community(props) {
  if (!props.data) {
    return <span>에러...</span>;
  }

  const { data } = props;

  return (
    <Layout>
      <Row>
        <Board>
          <Row>
            <HotTopic posts={data.hotTopics} />
          </Row>
          <Row>
            <Knowhow posts={data.management} />
            <Questions posts={data.question} />
          </Row>
        </Board>
        <BannerBox>
          <Banner />
        </BannerBox>
      </Row>
      <Row>
        <QnA />
      </Row>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const { access_token } = cookie.parse(context.req.headers.cookie);

    const response = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/community`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return {
      props: {
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
}

export default Community;
