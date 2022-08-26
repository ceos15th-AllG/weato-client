import styled from '@emotion/styled';

import axios from 'axios';

import BoardGroup from '@community/BoardGroup';
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

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 53px;
`;

function Community(props) {
  console.log(props);

  if (!props.data) {
    return <span>에러...</span>;
  }

  return (
    <Layout>
      <Row>
        <BoardGroup />
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
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtbWFsOTdAbmF2ZXIuY29tIiwiZXhwIjoxNjYxNzc4NTgyLCJpYXQiOjE2NjEzNDY1ODJ9.nX3hOm_LpPt5LEFisXvUHnTph3PKl7ZHDBhAP0KqaCKQRHuBnfGSJCrWYkPJzWbfY8OjY1qggyotLJixi7Qh8A`;

    const res = await axios.get(`https://www.weato.kro.kr/api/community`);

    return {
      props: {
        data: res.data,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data: null,
    },
  };
}

export default Community;
