import styled from '@emotion/styled';

import { Subhead4, Subhead3 } from '../../../styles/FontStyle';
import { gray04, gray05 } from '../../../styles/Colors';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryField = styled.div`
  width: 539px;
  height: 56px;

  border-radius: 5px;
  border: 1px solid ${gray05};
`;

const TagField = styled.div`
  width: 315px;
  height: 56px;

  border-radius: 5px;
  border: 1px solid ${gray05};
`;

const TitleField = styled.input`
  width: 100%;
  height: 56px;

  padding: 16px;
  margin-top: 24px;

  ${Subhead3}

  color : ${gray04};

  border: none;
  outline: none;

  border-radius: 5px;
  border: 1px solid ${gray05};
`;

const ContentField = styled.textarea`
  width: 100%;
  height: 480px;

  padding: 24px;
  margin-top: 24px;

  ${Subhead4}

  color : ${gray05};

  border: none;
  outline: none;

  border-radius: 5px;
  border: 1px solid ${gray05};
`;

function WriteForm() {
  return (
    <Layout>
      <Row>
        <CategoryField />
        <TagField />
      </Row>
      <TitleField placeholder="제목을 입력해 주세요" />
      <ContentField placeholder="내용을 입력하세요" />
    </Layout>
  );
}

export default WriteForm;
