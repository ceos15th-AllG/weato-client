/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';
import Link from 'next/link';

import Tag from '@common/Tag';

import {
  Headline2,
  Headline1,
  Subhead3,
  Subhead4,
  Body3,
} from '@styles/FontStyle';

import { gray04, gray06, text_black } from '@styles/Colors';

import icon_naver from '@public/icon_naver.png';

const Layout = styled.div`
  margin: 42px 300px 160px;

  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  ${Headline2}

  color : ${text_black};
`;

const ModifyText = styled.span`
  ${Subhead3}

  color : ${text_black};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoBox = styled.section`
  margin-top: 38px;

  display: flex;
  align-items: center;
`;

const InfoName = styled.div`
  width: 223px;

  display: flex;
  justify-content: flex-start;

  ${Body3}

  color : ${text_black};
`;

const InfoData = styled.div`
  ${Subhead4}

  color : ${text_black};

  display: flex;
`;

function ProfileTab(props) {
  if (!props.userProfile) {
    return <span>로딩 에러</span>;
  }

  const { userProfile } = props;

  const dict = {
    DRUG: '약품',
    SLEEP: '수면',
    CLEANING: '세면',
    FOOD: '음식',
    ENVIRONMENT: '환경',
    OTHERWISE: '기타',
    ALL: '전체',
  };

  const severityDict = {
    SLIGHT: '약함',
    BELOWAVG: '평균 이하',
    ABOVEAVG: '평균 이상',
    SEVERETY: '강함',
  };

  return (
    <Layout>
      <Row>
        <Header>회원정보</Header>
        <Link href={'/mypage/edit'}>
          <a>
            <ModifyText>
              <u>회원정보 수정</u>
            </ModifyText>
          </a>
        </Link>
      </Row>

      <Column
        css={css`
          margin-top: 43px;
          margin-bottom: 38px;
        `}
      >
        <SubHeader>기본 정보</SubHeader>
        <InfoBox>
          <InfoName>닉네임</InfoName>
          <InfoData>{userProfile.nickname}</InfoData>
        </InfoBox>
        <InfoBox>
          {!userProfile.birthday ? (
            <>
              <InfoName>생년</InfoName>
              <InfoData>{userProfile.birthyear}년</InfoData>
            </>
          ) : (
            <>
              <InfoName>생년월일</InfoName>
              <InfoData>
                {`${userProfile.birthyear}년 ${
                  userProfile.birthday.split('-')[0]
                }월 ${userProfile.birthday.split('-')[1]}일`}
              </InfoData>
            </>
          )}
        </InfoBox>
        <InfoBox>
          <InfoName>이메일</InfoName>
          <InfoData>{userProfile.newsletterEmail}</InfoData>
        </InfoBox>
        <InfoBox>
          <InfoName>사용중인 계정</InfoName>
          {userProfile.providerType === 'NAVER' ? (
            <Image src={icon_naver} width={42} height={42} alt="" />
          ) : undefined}
        </InfoBox>
      </Column>

      <Column
        css={css`
          margin-top: 43px;
        `}
      >
        <SubHeader>아토피 정보</SubHeader>
        <InfoBox>
          <InfoName>병력</InfoName>
          <InfoData>{userProfile.medicalHistory}년</InfoData>
        </InfoBox>
        <InfoBox>
          <InfoName>증상 정도</InfoName>
          <InfoData>{severityDict[userProfile.symptomDegree]}</InfoData>
        </InfoBox>
        <InfoBox>
          <InfoName>선호 태그</InfoName>
          <InfoData>
            {userProfile.tags.map((tag, index) => (
              <div
                key={index}
                css={css`
                  margin-right: 16px;
                `}
              >
                <Tag text={dict[tag]} />
              </div>
            ))}
          </InfoData>
        </InfoBox>
      </Column>
    </Layout>
  );
}

export default ProfileTab;
