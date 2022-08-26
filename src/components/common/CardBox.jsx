import styled from '@emotion/styled';

import Card from '@common/CardContainer';

const Layout = styled.div`
  width: 1320px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
`;

export default function CardBox(props) {
  const { data } = props;

  return (
    <Layout>
      {data.map(({ id, title, createdAt, tagType }, index) => (
        <Card
          key={index}
          text={title}
          date={createdAt.slice(0, 10).replaceAll('-', '.')}
          tag={tagType}
          href={`/newsletter/${id}`}
        />
      ))}
    </Layout>
  );
}
