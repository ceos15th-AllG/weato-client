import styled from '@emotion/styled';

import TabGroup from './TabGroup';
import CardBox from './CardBox';
import Pagenator from '../common/Pagenator';

const Layout = styled.div`
  margin: 58px 300px 104px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BookmarksTab() {
  return (
    <Layout>
      <TabGroup selected={'전체'} />
      <CardBox />
      <Pagenator />
    </Layout>
  );
}

export default BookmarksTab;
