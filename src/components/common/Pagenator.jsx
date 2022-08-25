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

  color : ${gray05};
`;

const CurrentPage = styled.span`
  margin: 0px 8px;

  ${Headline1}

  color : ${text_black};
`;

const makeRange = (min, max) => {
  let array = [];

  for (let i = min; i <= max; ++i) {
    array.push(i);
  }

  return array;
};

function Pagenator(props) {
  const { min, max, current } = props;

  const range = makeRange(min, max);

  return (
    <Layout>
      <Arrow>&#xE000;</Arrow>
      {range.map((pageNum, index) =>
        pageNum === current ? (
          <CurrentPage key={index}>
            {/* <Link href={`${props.path}?tag=${props.tag}&page=${pageNum}`}> */}
            <a>{pageNum}</a>
            {/* </Link> */}
          </CurrentPage>
        ) : (
          <Page key={index}>
            {/* <Link href={`${props.path}?tag=${props.tag}&page=${pageNum}`}> */}
            <a>{pageNum}</a>
            {/* </Link> */}
          </Page>
        )
      )}
      <Arrow>&#xE001;</Arrow>
    </Layout>
  );
}

export default Pagenator;
