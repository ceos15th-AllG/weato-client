/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';
import Button from '../../src/components/common/ButtonContainer';

import {
  Headline1,
  Headline2,
  Subhead4,
  Subhead3,
  Body3,
  Tag1,
} from '../../styles/FontStyle';

import { sub, gray04, gray05, gray06, text_black } from '../../styles/Colors';

import icon_naver from '../../public/icon_naver.png';
import profile_guest from '../../public/profile_guest.png';

const Layout = styled.div`
  margin: 79px 635px 160px;

  display: flex;
  flex-direction: column;
`;

const TopHeader = styled.header`
  width: 100%;

  padding-bottom: 23px;

  ${Subhead3}

  color : ${text_black};
  border-bottom: 3px solid ${gray06};
`;

const Title = styled.div`
  height: 120px;

  display: flex;
  align-items: center;

  ${Headline2}

  color : ${text_black};
`;

const SubHeader = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;

  ${Headline1}

  color : ${text_black};

  border-top: 3px solid ${gray06};
  border-bottom: 1px solid ${gray04};
`;

const InfoBox = styled.section`
  height: 60px;

  margin-top: 12px;

  display: flex;
  align-items: center;
`;

const InfoName = styled.div`
  width: 223px;

  display: flex;
  justify-content: flex-start;

  ${Subhead4}

  color : ${text_black};
`;

const InfoData = styled.div`
  width: 427px;
  height: 100%;

  ${Subhead4}

  color : ${text_black};

  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;

  outline: none;
  border: 1px solid ${gray05};
  border-radius: 8px;

  padding: 16px 20px;

  ${Body3}

  color : ${text_black};
  background-color: transparent;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;

  margin-top: 30px;
`;

const TagHeader = styled.header`
  ${Subhead4}

  color : ${text_black};
`;

const TagSubHeader = styled.span`
  margin-left: 6px;

  font-weight: 500;
  font-size: 12px;

  color: ${gray05};
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

function Edit() {
  return (
    <Layout>
      <TopHeader>마이페이지 &#xE001; 프로필 &#xE001; 회원정보 수정</TopHeader>
      <Title>회원정보 수정</Title>

      <SubHeader>기본 정보</SubHeader>
      <InfoBox
        css={css`
          margin-top: 30px;
        `}
      >
        <InfoName>소셜 로그인 정보</InfoName>
        <InfoData>
          <Image src={icon_naver} width={42} height={42} />
        </InfoData>
      </InfoBox>
      <InfoBox>
        <InfoName>프로필 사진</InfoName>
        <InfoData>
          <Image src={profile_guest} width={42} height={42} />
          <span
            css={css`
              margin-left: 18px;
              ${Tag1}
              color: ${gray04};
            `}
          >
            변경 &#xE001;
          </span>
        </InfoData>
      </InfoBox>
      <InfoBox>
        <InfoName>닉네임*</InfoName>
        <InfoData>
          <Input placeholder="푸들푸들" />
        </InfoData>
      </InfoBox>
      <InfoBox>
        <InfoName>생년월일*</InfoName>
        <InfoData
          css={css`
            justify-content: space-between;
          `}
        >
          <Input
            css={css`
              width: 204px;
            `}
            placeholder="1997"
          />
          <Input
            css={css`
              width: 92px;
            `}
            placeholder="11"
          />
          <Input
            css={css`
              width: 92px;
            `}
            placeholder="28"
          />
        </InfoData>
      </InfoBox>
      <InfoBox
        css={css`
          margin-bottom: 80px;
        `}
      >
        <InfoName>이메일*</InfoName>
        <InfoData>
          <Input placeholder="chammal97@naver.com" />
        </InfoData>
      </InfoBox>

      <SubHeader>아토피 정보</SubHeader>
      <InfoBox
        css={css`
          margin-top: 30px;
        `}
      >
        <InfoName>병력*</InfoName>
        <InfoData>
          <Input placeholder="5년" />
        </InfoData>
      </InfoBox>
      <InfoBox
        css={css`
          height: 28px;
          margin-top: 26px;
        `}
      >
        <InfoName>재발 여부*</InfoName>
        <InfoData>
          <span>라디오버튼</span>
        </InfoData>
      </InfoBox>
      <InfoBox
        css={css`
          height: 28px;
          margin-top: 26px;
        `}
      >
        <InfoName>가족력 여부*</InfoName>
        <InfoData>
          <span>라디오버튼</span>
        </InfoData>
      </InfoBox>
      <InfoBox
        css={css`
          height: 28px;
          margin-top: 26px;
        `}
      >
        <InfoName>가족력 여부*</InfoName>
        <InfoData>
          <span>라디오버튼</span>
        </InfoData>
      </InfoBox>
      <TagRow>
        <TagHeader>현재 관리법*</TagHeader>
      </TagRow>
      <ContentItem
        css={css`
          margin-top: 17px;
        `}
      >
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
      <TagRow>
        <TagHeader>선호 태그*</TagHeader>
        <TagSubHeader>
          선호하는 태그에 맞춰 뉴스레터를 빠르게 받아보실 수 있습니다.
        </TagSubHeader>
      </TagRow>
      <ContentItem
        css={css`
          margin-top: 17px;
        `}
      >
        <ButtonRow
          css={css`
            margin-bottom: 19px;
          `}
        >
          <Button text={'약품'} btnType={'8'} />
          <Button text={'세면'} btnType={'8'} />
          <Button text={'환경'} btnType={'8'} />
        </ButtonRow>
        <ButtonRow>
          <Button text={'수면'} btnType={'8'} />
          <Button text={'음식'} btnType={'8'} />
          <Button text={'기타'} btnType={'8'} />
        </ButtonRow>
      </ContentItem>
      <ContentItem
        css={css`
          margin-top: 31px;
          margin-bottom: 74px;
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

      <ContentItem
        css={css`
          align-items: center;
          padding-bottom: 34px;
          border-bottom: 1px solid ${gray04};
        `}
      >
        <Button text="저장하기" btnType="4" />
      </ContentItem>

      <ContentItem
        css={css`
          margin-top: 39px;

          ${Subhead3}
          color : ${text_black};
        `}
      >
        <span>
          <u>회원탈퇴하기</u>
        </span>
      </ContentItem>
    </Layout>
  );
}

export default Edit;
