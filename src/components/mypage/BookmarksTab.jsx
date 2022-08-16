import styled from '@emotion/styled';

import TabGroup from '@mypage/TabGroup';
import CardBox from '@mypage/CardBox';
import Pagenator from '@common/Pagenator';

const Layout = styled.div`
  margin: 58px 300px 104px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BookmarksTab(props) {
  return (
    <Layout>
      <TabGroup selected={props.tag} />
      <CardBox />
      <Pagenator />
    </Layout>
  );
}

export default BookmarksTab;
