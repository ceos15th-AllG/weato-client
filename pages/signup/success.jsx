import styled from '@emotion/styled';

import { Display1, Body5 } from '../../styles/FontStyle';
import { text_black } from '../../styles/Colors';
import Button from '../../src/components/common/ButtonContainer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 236px 300px 332px;
`;

const TopText = styled.span`
  margin-bottom: 62px;

  ${Display1};

  color: ${text_black};
`;

const SubText = styled.span`
  margin-bottom: 62px;

  ${Body5};

  color: ${text_black};
`;

const ButtonBox = styled.div`
  height: 203px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Success() {
  return (
    <Layout>
      <TopText>회원가입 성공!</TopText>

      <SubText>
        OOO님의 아토피 정보를 추가로 입력하시면
        <br />
        더욱 다양하고 정확한 정보를 얻을 수 있어요!
      </SubText>

      <ButtonBox>
        <Button text="지금 입력하기" btnType="5" />
        <Button text="나중에 작성하기" btnType="5" disabled />
      </ButtonBox>
    </Layout>
  );
}
