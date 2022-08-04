import styled from '@emotion/styled';

import Link from 'next/link';

import { Headline2 } from '@styles/FontStyle';
import { main, gray05 } from '@styles/Colors';

const routes = ['all', 'medicine', 'sleep', 'water', 'food', 'env', 'etc'];
const tags = ['전체', '약품', '수면', '세면', '음식', '환경', '기타'];

const Layout = styled.div`
  width: 652px;
  height: 48px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 72px;
`;

const Item = styled.span`
  height: 48px;

  ${Headline2}

  color : ${(props) => `${props.tag === props.selected ? main : gray05}`};

  border-bottom: 5px solid
    ${(props) => `${props.tag === props.selected ? main : 'transparent'}`};
`;

export default function TabGroup({ selected }) {
  return (
    <Layout>
      {tags.map((tag, index) => (
        <Item key={index} tag={tag} selected={selected}>
          <Link href={`/newsletter?tag=${routes[index]}`}>
            <a>{tag}</a>
          </Link>
        </Item>
      ))}
    </Layout>
  );
}
