/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { sub, gray05, text_black, semantic_red, gray07 } from '@styles/Colors';

import { Display1, Subhead4, Body1, Body2, Body3 } from '@styles/FontStyle';

import Button from '@common/ButtonContainer';

const Layout = styled.div`
  margin: 76px 635px 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopText = styled.div`
  ${Display1};

  color: ${text_black};
`;

const Content = styled.form`
  display: flex;
  flex-direction: column;

  margin: 75px 0px 64px;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 17px;
`;

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  height: 52px;

  padding-bottom: 8px;

  border-bottom: 1px solid #ababab;
`;

const InputHeader = styled.header`
  ${Subhead4}

  color : ${text_black};
`;

const InputField = styled.input`
  width: 460px;
  height: 24px;

  margin-bottom: 2px;

  ${Body2} // placeholder 관련 스타일도 추가할 것

  outline : none;
  border: none;

  padding: 14px 0px;
`;

const InputWarning = styled.span`
  ${Body2}

  margin-top : 8px;

  color: ${semantic_red};
`;

const TagRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;

  margin-bottom: 20px;
`;

const TagHeader = styled.header`
  margin-top: 12px;

  ${Subhead4}

  color : ${text_black};
`;

const TagSubHeader = styled.span`
  margin-left: 10px;

  ${Body1}

  color : ${gray05};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PolicyHeader = styled.header`
  margin-bottom: 17px;

  ${Subhead4}

  color : ${text_black};
`;

const PolicyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PolicySubRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const TempCheckbox = styled.div`
  width: 28px;
  height: 28px;

  border-radius: 4px;

  background-color: ${sub};
`;

const PolicyText = styled.span`
  margin-left: 32px;

  ${Body3};

  color: ${text_black};
`;

const PolicyButton = styled.span`
  font-size: 14px;
  color: ${gray07};
`;

export default function Signup() {
  return (
    <Layout>
      <TopText>회원가입</TopText>

      <Content>
        <ContentItem>
          <InputHeader>닉네임 *</InputHeader>
          <Input>
            <InputField placeholder="2자 이상 10자 이하로 입력해주세요" />
            <Button text="중복 확인" btnType="3" />
          </Input>
          <InputWarning>이미 사용중인 닉네임입니다.</InputWarning>
        </ContentItem>

        <ContentItem>
          <InputHeader>뉴스레터를 받을 이메일 주소 *</InputHeader>
          <Input>
            <InputField placeholder="xxxxxxx@gmail.com" />
            <Button text="인증하기" btnType="3" />
          </Input>
          <InputWarning>이미 사용중인 닉네임입니다.</InputWarning>
        </ContentItem>

        <ContentItem>
          <TagRow>
            <TagHeader>선호태그 *</TagHeader>
            <TagSubHeader>
              선호하는 태그에 맞춰 뉴스레터를 빠르게 받아보실 수 있습니다.
            </TagSubHeader>
          </TagRow>
          <Row
            css={css`
              margin-bottom: 19px;
            `}
          >
            <Button text="약품" btnType="8" />
            <Button text="세면" btnType="8" />
            <Button text="환경" btnType="8" />
          </Row>
          <Row
            css={css`
              padding-bottom: 19px;
            `}
          >
            <Button text="수면" btnType="8" />
            <Button text="음식" btnType="8" />
            <Button text="기타" btnType="8" />
          </Row>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 64px;
          `}
        >
          <PolicyHeader>서비스 정책</PolicyHeader>
          <PolicyRow>
            <PolicySubRow>
              <TempCheckbox />
              <PolicyText>서비스 이용약관에 모두 동의합니다. (필수)</PolicyText>
            </PolicySubRow>
            <PolicyButton
              onClick={(event) => {
                alert(event);
              }}
            >
              <u>약관보기</u>
            </PolicyButton>
          </PolicyRow>
        </ContentItem>

        <ContentItem>
          <Button text="가입하기" btnType="6" />
        </ContentItem>
      </Content>
    </Layout>
  );
}
