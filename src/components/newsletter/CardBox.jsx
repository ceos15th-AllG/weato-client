import styled from '@emotion/styled';

import Card from '@common/CardContainer';

const Layout = styled.div`
  width: 1320px;

  display: grid;
  grid: '. . . .';
  column-gap: 20px;
  row-gap: 40px;
`;

export default function CardBox(props) {
  const { data } = props;

  return (
    <Layout>
      {data.map(({ text, date, tag }, index) => (
        <Card
          key={index}
          text={text}
          date={date}
          tag={tag}
          href={`/newsletter/1`}
        />
      ))}
    </Layout>
  );
}
