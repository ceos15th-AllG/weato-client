import styled from '@emotion/styled';

import Link from 'next/link';

import { Headline1, Subhead3 } from '@styles/FontStyle';

import { gray06, text_black } from '@styles/Colors';

const Layout = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding-bottom: 19px;
  margin-bottom: 36px;

  border-bottom: 3px solid ${gray06};
`;

const Title = styled.header`
  ${Headline1}

  color : ${text_black};
`;

const More = styled.span`
  margin-bottom: 5px;

  ${Subhead3}

  color : ${text_black};
`;

function BoardHeader(props) {
  return (
    <Layout>
      <Title>{props.title}</Title>

      {props.link ? (
        <More>
          <Link href={`/community/${props.link}`}>
            <a>더보기 &#xE001;</a>
          </Link>
        </More>
      ) : undefined}
    </Layout>
  );
}

export default BoardHeader;
