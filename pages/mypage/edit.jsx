/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState, useEffect, useContext, useCallback } from 'react';

import axios from 'axios';
import cookie from 'cookie';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import Button from '@common/ButtonContainer';
import ButtonGroup from '@signup/ButtonGroup';
import RadioButton from '@common/RadioButton';

import {
  Headline1,
  Headline2,
  Subhead4,
  Subhead3,
  Body3,
  Tag1,
} from '@styles/FontStyle';

import {
  sub,
  gray04,
  gray05,
  gray06,
  text_black,
  gray02,
} from '@styles/Colors';

import icon_naver from '@public/icon_naver.png';
import profile_guest from '@public/profile_guest.png';

const toKoreanManagements = {
  보습제: 'MOISTURE',
  스테로이드제: 'STEROID',
  식단관리: 'DIET',
  약물치료: 'DRUG',
  '세면 습관 관리': 'CLEANING',
  연고치료: 'OINTMENT',
  광선치료: 'LASER',
  한방치료: 'ORIENTALMEDICINE',
  기타치료: 'ETC',
};
const toKoreanTags = {
  약품: 'DRUG',
  수면: 'SLEEP',
  세면: 'CLEANING',
  음식: 'FOOD',
  환경: 'ENVIRONMENT',
  기타: 'OTHERWISE',
};

const Layout = styled.div`
  margin: 79px 0px 160px;
  padding: 0px 635px;

  display: flex;
  flex-direction: column;
`;

const TopHeader = styled.header`
  width: 100%;

  padding-bottom: 23px;

  ${Subhead3}

  color : ${text_black};
  border-bottom: 3px solid ${gray06};

  strong {
    margin: 0px 6px;
    font-weight: 300;
  }
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

  .email-readonly {
    background-color: ${gray02};
  }
`;

const InfoName = styled.div`
  width: 223px;

  display: flex;
  justify-content: flex-start;

  ${Subhead4}

  color : ${text_black};
`;

const InfoData = styled.div`
  position: relative;

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

const InsideButtonBox = styled.div`
  position: absolute;
  right: 6px;
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

  margin-bottom: 20px;
`;

const RadioButtonRow = styled.div`
  display: flex;

  margin-right: 63px;
`;

const SeverityText = styled.span`
  ${Body3}

  color : ${text_black};
`;

function Edit(props) {
  const router = useRouter();
  const { userData, profileData } = props;
  const { user, token } = useContext(Context);

  const [nickname, setNickname] = useState('');
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameUnique, setNicknameUnique] = useState(false);
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthValid, setBirthValid] = useState(false);
  const [email, setEmail] = useState('');
  // const [emailValid, setEmailValid] = useState(false);

  const [since, setSince] = useState('');
  const [sinceValid, setSinceValid] = useState(false);
  const [repeat, setRepeat] = useState([
    {
      text: 'O',
      active: false,
    },
    {
      text: 'X',
      active: false,
    },
  ]);
  const [repeatValid, setRepeatValid] = useState(false);
  const [family, setFamily] = useState([
    {
      text: 'O',
      active: false,
    },
    {
      text: 'X',
      active: false,
    },
  ]);
  const [familyValid, setFamilyValid] = useState(false);
  const [managements, setManagements] = useState([
    {
      text: '보습제',
      active: false,
    },
    {
      text: '스테로이드제',
      active: false,
    },
    {
      text: '식단관리',
      active: false,
    },
    {
      text: '약물치료',
      active: false,
    },
    {
      text: '세면 습관 관리',
      active: false,
    },
    {
      text: '연고치료',
      active: false,
    },
    {
      text: '광선치료',
      active: false,
    },
    {
      text: '한방치료',
      active: false,
    },
    {
      text: '기타치료',
      active: false,
    },
  ]);
  const [managementsValid, setManagementsValid] = useState(false);
  const [tags, setTags] = useState([
    {
      text: '약품',
      active: false,
    },
    {
      text: '세면',
      active: false,
    },
    {
      text: '환경',
      active: false,
    },
    {
      text: '수면',
      active: false,
    },
    {
      text: '음식',
      active: false,
    },
    {
      text: '기타',
      active: false,
    },
  ]);
  const [tagValid, setTagValid] = useState(false);
  const [severity, setSeverity] = useState([
    {
      text: '1(경미) - 보습제, 피부연화제 등만 적용',
      active: false,
    },
    {
      text: '2(경도~중등도) - 약~중간 효능의 스테로이드제 등 국소 면역 억제제 적용',
      active: false,
    },
    {
      text: '3(중등~중증) - 중간~높은 효능의 스테로이드제 등 국소 면역 억제제 적용',
      active: false,
    },
    {
      text: '4(중증 이상) - 국소 치료에도 반응하지 않는 경우',
      active: false,
    },
  ]);
  const [severityValid, setSeverityValid] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const onChangeNickname = useCallback((event) => {
    setNickname(event.target.value);
    setNicknameUnique(false);

    if (event.target.value.length < 2 || event.target.value.length > 10) {
      setNicknameValid(false);
    } else {
      setNicknameValid(true);
    }
  }, []);
  const validateNickname = async (event) => {
    if (!nicknameValid) {
      return;
    } else if (nickname === profileData.nickname) {
      alert('동일한 닉네임입니다.');
      setNicknameUnique(true);
      return;
    }

    try {
      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members/validation?nickname=${encodeURIComponent(
          nickname
        )}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data === false) {
        setNicknameUnique(true);
      } else {
        alert(`닉네임 ${nickname}은 이미 존재합니다.`);
      }
    } catch (error) {
      alert(error);
      alert('서버 요청이 불가능하네요...');
    }
  };
  const onChangeYear = useCallback((event) => {
    setBirthYear(event.target.value);
  }, []);
  const onChangeMonth = useCallback((event) => {
    setBirthMonth(event.target.value);
  }, []);
  const onChangeDay = useCallback((event) => {
    setBirthDay(event.target.value);
  }, []);
  // const onChangeEmail = useCallback((event) => {
  //   const emailRegex =
  //     /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  //   setEmail(event.target.value);

  //   if (!emailRegex.test(event.target.value)) {
  //     setEmailValid(false);
  //   } else {
  //     setEmailValid(true);
  //   }
  // }, []);
  const onChangeSince = useCallback((event) => {
    setSince(event.target.value);

    if (event.target.value !== '') {
      setSinceValid(true);
    } else {
      setSinceValid(false);
    }
  }, []);
  const toggleRepeatActive = (id) => {
    setRepeat(
      repeat.map((item, index) =>
        index === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    setRepeatValid(true);
  };
  const toggleFamilyActive = (id) => {
    setFamily(
      family.map((item, index) =>
        index === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    setFamilyValid(true);
  };
  const toggleManagementsActive = (id) => {
    setManagements(
      managements.map((management, index) =>
        index === id
          ? { ...management, active: !management.active }
          : management
      )
    );
  };
  const toggleTagsActive = (id) => {
    setTags(
      tags.map((tag, index) =>
        index === id ? { ...tag, active: !tag.active } : tag
      )
    );
  };
  const toggleSeverityActive = (id) => {
    setSeverity(
      severity.map((item, index) =>
        index === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    setSeverityValid(true);
  };
  const onConfirm = async (event) => {
    if (!confirm) {
      return;
    }

    try {
      // const responseMember = await axios({
      //   method: 'post',
      //   url: `https://www.weato.kro.kr/api/members/${user.id}`,
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   data: {
      //     nickname: nickname,
      //     newsletterEmail: email,
      //     drug: tags[0].active,
      //     cleaning: tags[1].active,
      //     environment: tags[2].active,
      //     sleep: tags[3].active,
      //     food: tags[4].active,
      //     etc: tags[5].active,
      //   },
      // });
      // console.log(responseMember.data);

      const responseProfile = await axios({
        // method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'patch',
        url: `https://www.weato.kro.kr/api/members/${user.id}/profile`,
        data: {
          imageUrl: null,
          nickname: nickname,
          medicalHistory: Number.parseInt(since),
          isRecurrence: repeat[0].active,
          isFamilyHistory: family[0].active,

          moisturizer: managements[0].active,
          steroid: managements[1].active,
          diet: managements[2].active,
          drug: managements[3].active,
          cleaning: managements[4].active,
          ointment: managements[5].active,
          laser: managements[6].active,
          orientalMedicine: managements[7].active,
          etc: managements[8].active,

          tagDrug: tags[0].active,
          tagCleaning: tags[1].active,
          tagEnvironment: tags[2].active,
          tagSleep: tags[3].active,
          tagFood: tags[4].active,
          otherwise: tags[5].active,

          symptomDegree: 'SLIGHT',
        },
      });
      console.log(responseProfile.data);
      // alert('요청 성공');
      router.push(`/mypage?tab=profile`);
      // alert('서버 요청 성공');
    } catch (error) {
      console.log(error);
      alert('서버 요청이 불가능하네요...');
    }
  };

  // 생일 필드 3개 다 입력되었는지
  useEffect(() => {
    if (birthYear !== '' && birthMonth !== '' && birthDay !== '') {
      setBirthValid(true);
    } else {
      setBirthValid(false);
    }
  }, [birthYear, birthMonth, birthDay]);
  // 현재 관리하는 방법 입력 1개 이상인지 체크
  useEffect(() => {
    if (managements.filter((management) => management.active).length > 0) {
      setManagementsValid(true);
    } else {
      setManagementsValid(false);
    }
  }, [managements]);
  // 선호 태그 입력 1개 이상인지 체크
  useEffect(() => {
    if (tags.filter((tag) => tag.active).length > 0) {
      setTagValid(true);
    } else {
      setTagValid(false);
    }
  }, [tags]);
  useEffect(() => {
    console.log(
      nicknameValid,
      nicknameUnique,
      birthValid,
      // emailValid,
      sinceValid,
      repeatValid,
      familyValid,
      managementsValid,
      tagValid,
      severityValid
    );
    if (
      nicknameValid &&
      nicknameUnique &&
      birthValid &&
      // emailValid &&
      sinceValid &&
      repeatValid &&
      familyValid &&
      managementsValid &&
      tagValid &&
      severityValid
    ) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [
    nicknameValid,
    nicknameUnique,
    birthValid,
    // emailValid,
    sinceValid,
    repeatValid,
    familyValid,
    managementsValid,
    tagValid,
    severityValid,
  ]);

  // 기존 정보 로딩해서 폼에 채워넣기
  useEffect(() => {
    console.log(profileData);

    setNickname(profileData.nickname);
    setNicknameValid(true);
    setNicknameUnique(true);

    if (profileData.birthyear) {
      setBirthYear(profileData.birthyear);
      if (profileData.birthday) {
        setBirthMonth(profileData.birthday.split('-')[0]);
        setBirthDay(profileData.birthday.split('-')[1]);

        setBirthValid(true);
      }
    }

    setEmail(profileData.newsletterEmail);
    // setEmailValid(true);

    if (profileData.medicalHistory) {
      setSince(profileData.medicalHistory);
      setSinceValid(true);
    }

    setRepeat([
      {
        text: 'O',
        active: profileData.isRecurrence,
      },
      {
        text: 'X',
        active: !profileData.isRecurrence,
      },
    ]);
    setRepeatValid(true);

    setFamily([
      {
        text: 'O',
        active: profileData.isFamilyHistory,
      },
      {
        text: 'X',
        active: !profileData.isFamilyHistory,
      },
    ]);
    setFamilyValid(true);

    if (profileData.managementTypeList) {
      setManagements(
        managements.map((item, index) =>
          profileData.managementTypeList.includes(
            toKoreanManagements[item.text]
          )
            ? { ...item, active: true }
            : { ...item, active: false }
        )
      );
    }

    if (profileData.tags) {
      setTags(
        tags.map((item, index) =>
          profileData.tags.includes(toKoreanTags[item.text])
            ? { ...item, active: true }
            : { ...item, active: false }
        )
      );
    }
  }, []);

  return (
    <Layout>
      <TopHeader>
        <Link href={`/mypage`}>
          <a>마이페이지</a>
        </Link>
        <strong>&#xE001;</strong>
        <Link href={`/mypage?tab=profile`}>
          <a>프로필</a>
        </Link>
        <strong>&#xE001;</strong>
        회원정보 수정
      </TopHeader>
      <Title>회원정보 수정</Title>

      <SubHeader>기본 정보</SubHeader>
      <InfoBox
        css={css`
          margin-top: 30px;
        `}
      >
        <InfoName>소셜 로그인 정보</InfoName>
        <InfoData>
          <Image src={icon_naver} width={42} height={42} alt="" />
        </InfoData>
      </InfoBox>
      {/* <InfoBox>
        <InfoName>프로필 사진</InfoName>
        <InfoData>
          <Image src={profile_guest} width={42} height={42} alt="" />
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
      </InfoBox> */}
      <InfoBox>
        <InfoName>닉네임*</InfoName>
        <InfoData>
          <Input
            placeholder="2자 이상 10자 이하"
            value={nickname}
            onChange={onChangeNickname}
            css={css`
              padding-right: 160px;
            `}
          />
          <InsideButtonBox>
            {nicknameValid && nicknameUnique ? (
              <Button text="사용 가능" btnType="2" disabled />
            ) : (
              <Button
                text="중복 확인"
                btnType="2"
                disabled={!nicknameValid}
                onClick={validateNickname}
              />
            )}
          </InsideButtonBox>
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
            placeholder="0000"
            value={birthYear}
            onChange={onChangeYear}
          />
          <Input
            css={css`
              width: 92px;
            `}
            placeholder="00"
            value={birthMonth}
            onChange={onChangeMonth}
          />
          <Input
            css={css`
              width: 92px;
            `}
            placeholder="00"
            value={birthDay}
            onChange={onChangeDay}
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
          <Input className="email-readonly" readOnly value={email} />
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
          <Input
            placeholder="연 단위로 입력해주세요"
            value={since}
            onChange={onChangeSince}
          />
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
          {repeat.map(({ text, active }, index) => (
            <RadioButtonRow key={index}>
              <RadioButton
                text={text}
                active={active}
                toggleActive={() => {
                  toggleRepeatActive(index);
                }}
              />
            </RadioButtonRow>
          ))}
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
          {family.map(({ text, active }, index) => (
            <RadioButtonRow key={index}>
              <RadioButton
                text={text}
                active={active}
                toggleActive={() => {
                  toggleFamilyActive(index);
                }}
              />
            </RadioButtonRow>
          ))}
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
          <ButtonGroup
            tags={managements}
            toggleActive={toggleManagementsActive}
          />
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
          <ButtonGroup tags={tags} toggleActive={toggleTagsActive} />
        </ButtonRow>
      </ContentItem>
      <ContentItem
        css={css`
          margin-top: 31px;
          margin-bottom: 54px;
        `}
      >
        <TagHeader
          css={css`
            margin-bottom: 15px;
          `}
        >
          증상 정도(1~4)*
        </TagHeader>
        {severity.map(({ text, active }, index) => (
          <SeverityRow key={index}>
            <RadioButton
              text={text}
              active={active}
              toggleActive={() => {
                toggleSeverityActive(index);
              }}
            />
          </SeverityRow>
        ))}
      </ContentItem>

      <ContentItem
        css={css`
          align-items: center;
          padding-bottom: 34px;
          border-bottom: 1px solid ${gray04};
        `}
      >
        <Button
          text="저장하기"
          btnType="4"
          disabled={!confirm}
          onClick={onConfirm}
        />
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
export const getServerSideProps = async (context) => {
  try {
    const { id, token } = cookie.parse(context.req.headers.cookie);
    const responseUser = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/members/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseProfile = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/members/${id}/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      props: {
        userData: responseUser.data,
        profileData: responseProfile.data,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
    props: {},
  };
};

export default Edit;
