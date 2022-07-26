/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import {
  sub,
  gray05,
  text_black,
  semantic_red,
  gray07,
  main,
} from '../../styles/Colors';

import {
  Display1,
  Subhead4,
  Body1,
  Body2,
  Body3,
} from '../../styles/FontStyle';

import Button from '../../src/components/common/ButtonContainer';

const Layout = styled.div`
  margin: 122px 635px 136px;

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

  margin-top: 97px;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const RowText = styled.span`
  width: 223px;

  text-align: left;

  ${Subhead4}

  color : ${text_black};
`;

const InputField = styled.input`
  flex: 1;

  height: 60px;

  ${Body3}

  outline : none;
  border: 1px solid ${gray05};
  border-radius: 8px;

  padding: 16px 20px;
`;

const TagRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;

  margin-bottom: 20px;
`;

const TagHeader = styled.header`
  ${Subhead4}

  color : ${text_black};
`;

const TagSubHeader = styled.span`
  margin-left: 24px;

  font-weight: 500;
  font-size: 14px;

  color: ${text_black};
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SeverityRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const TempRadioBtn = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  margin-right: 32px;

  background-color: ${sub};
`;

const SeverityText = styled.span`
  ${Body3}

  color : ${text_black};
`;

export default function More() {
  return (
    <Layout>
      <TopText>추가 정보 입력하기</TopText>

      <Content>
        <ContentItem
          css={css`
            margin-bottom: 40px;
          `}
        >
          <Row>
            <RowText>병력*</RowText>
            <InputField placeholder="00년" />
          </Row>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 56px;
          `}
        >
          <Row>
            <RowText>재발 여부*</RowText>
            <div>라디오버튼있음여기</div>
          </Row>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 56px;
          `}
        >
          <Row>
            <RowText>가족력 여부*</RowText>
            <div>라디오버튼있음여기</div>
          </Row>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 56px;
          `}
        >
          <TagRow>
            <TagHeader>현재 관리법*</TagHeader>
            <TagSubHeader>
              현재 관리하고 있는 모든 방법에 체크해주세요.
            </TagSubHeader>
          </TagRow>
          <ButtonRow
            css={css`
              margin-bottom: 19px;
            `}
          >
            <Button text={'보습제'} btnType={'8'} />
            <Button text={'스테로이드제'} btnType={'8'} />
            <Button text={'식단관리'} btnType={'8'} />
          </ButtonRow>
          <ButtonRow
            css={css`
              margin-bottom: 19px;
            `}
          >
            <Button text={'약물치료'} btnType={'8'} />
            <Button text={'세면 습관 관리'} btnType={'8'} />
            <Button text={'연고치료'} btnType={'8'} />
          </ButtonRow>
          <ButtonRow>
            <Button text={'광선치료'} btnType={'8'} />
            <Button text={'한방치료'} btnType={'8'} />
            <Button text={'기타'} btnType={'8'} />
          </ButtonRow>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 98px;
          `}
        >
          <TagHeader
            css={css`
              margin-bottom: 15px;
            `}
          >
            증상 정도(1~4)*
          </TagHeader>
          <SeverityRow
            css={css`
              margin-bottom: 20px;
            `}
          >
            <TempRadioBtn />
            <SeverityText>1(경미) - 보습제, 피부연화제 등만 적용</SeverityText>
          </SeverityRow>
          <SeverityRow
            css={css`
              margin-bottom: 20px;
            `}
          >
            <TempRadioBtn />
            <SeverityText>
              2(경도~중등도) - 약~중간 효능의 스테로이드제 등 국소 면역 억제제
              적용
            </SeverityText>
          </SeverityRow>
          <SeverityRow
            css={css`
              margin-bottom: 20px;
            `}
          >
            <TempRadioBtn />
            <SeverityText>
              3(중등~중증) - 중간~높은 효능의 스테로이드제 등 국소 면역 억제제
              적용
            </SeverityText>
          </SeverityRow>
          <SeverityRow>
            <TempRadioBtn />
            <SeverityText>
              4(중증 이상) - 국소 치료에도 반응하지 않는 경우
            </SeverityText>
          </SeverityRow>
        </ContentItem>

        <ContentItem>
          <Button text="저장하기" btnType="6" />
        </ContentItem>
      </Content>
    </Layout>
  );
}
