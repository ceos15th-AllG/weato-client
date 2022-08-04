import styled from '@emotion/styled';

import Row from './BoardRow';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function NewsletterResult({ communityData }) {
  return (
    <Layout>
      {communityData.map(({ id, category, title, view, like, name, level }) => (
        <Row
          key={id}
          category={category}
          title={title}
          view={view}
          like={like}
          name={name}
          level={level}
        />
      ))}
    </Layout>
  );
}
