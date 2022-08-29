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
  const { min, max, current } = props;
  const range = makeRange(min, max);

  return (
    <Layout>
      {min < current ? (
        <Link
          href={{
            pathname: path,
            query: { ...query, page: current - 1 },
          }}
        >
          <a>
            <Arrow>&#xE000;</Arrow>
          </a>
        </Link>
      ) : (
        <Arrow>&#xE000;</Arrow>
      )}

      {range.map((pageNum, index) => (
        <Page key={index} page={pageNum} current={current}>
          <Link
            href={{
              pathname: path,
              query: { ...query, page: pageNum },
            }}
          >
            <a>{pageNum}</a>
          </Link>
        </Page>
      ))}

      {current < max ? (
        <Link
          href={{
            pathname: path,
            query: { ...query, page: current + 1 },
          }}
        >
          <a>
            <Arrow>&#xE001;</Arrow>
          </a>
        </Link>
      ) : (
        <Arrow>&#xE001;</Arrow>
      )}
    </Layout>
  );
}

export default Pagenator;
