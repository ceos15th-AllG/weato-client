import styled from '@emotion/styled';

import { Headline2 } from '../../../styles/FontStyle';
import { main } from '../../../styles/Colors';

const tags = ['전체', '약품', '수면', '세면', '음식', '환경', '기타'];

const Layout = styled.div`
  width: 652px;
  height: 48px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 72px;
`;

const Item = styled.section`
  span {
    ${Headline2}

    color : ${main};
  }

  height: 48px;

  /* border-bottom: ${(props) => {
    props.tag === tags[props.selected] ? `5px` : `0px`;
  }}
    solid ${main}; */
`;

export default function TabGroup({ selected }) {
  return (
    <Layout>
      {tags.map((tag, index) => (
        <Item key={index} tag={tag} selected={selected}>
          <span>{tag}</span>
        </Item>
      ))}
    </Layout>
  );
}
