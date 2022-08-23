import styled from '@emotion/styled';

import Button from '@common/ButtonContainer';

const Layout = styled.div`
  width: 100%;

  display: grid;
  grid: '. . .';
  column-gap: 21px;
  row-gap: 19px;
`;

function ButtonGroup({ tags, toggleActive }) {
  return (
    <Layout>
      {tags.map(({ text, active }, index) =>
        active ? (
          <Button
            key={index}
            text={text}
            btnType="8"
            onClick={() => {
              toggleActive(index);
            }}
          />
        ) : (
          <Button
            key={index}
            text={text}
            btnType="8"
            disabled
            onClick={() => {
              toggleActive(index);
            }}
          />
        )
      )}
    </Layout>
  );
}

export default ButtonGroup;
