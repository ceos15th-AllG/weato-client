import styled from '@emotion/styled';

import Link from 'next/link';

import { Headline1 } from '@styles/FontStyle';

import { gray05, text_black, tag_etc } from '@styles/Colors';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const Arrow = styled.span`
  margin: 0px 8px;

  color: ${tag_etc};
`;

const Page = styled.span`
  margin: 0px 8px;

  ${Headline1}

  color : ${({ page, current }) => (page === current ? text_black : gray05)};

  transition: all 0.3s ease;
`;

const makeRange = (min, max) => {
  let array = [];

  for (let i = min; i <= max; ++i) {
    array.push(i);
  }

  return array;
};

function Pagenator(props) {
  const { path, query } = props;
  const { min, max } = props;
  const { page, setPage } = props;
  const range = makeRange(min, max);

  return (
    <Layout>
      {min < page ? (
        <Arrow onClick={() => setPage(page - 1)}>&#xE000;</Arrow>
      ) : (
        <Arrow>&#xE000;</Arrow>
      )}

      {range.map((pageNum, index) => (
        <Page
          key={index}
          page={pageNum}
          current={page}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </Page>
      ))}

      {page < max ? (
        <Arrow onClick={() => setPage(page + 1)}>&#xE001;</Arrow>
      ) : (
        <Arrow>&#xE001;</Arrow>
      )}
    </Layout>
  );
}

export default Pagenator;
