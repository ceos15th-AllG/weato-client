import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import Link from 'next/link';

import axios from 'axios';
import cookie from 'cookie';

import Dropdown from '@mypage/Dropdown';

import Context from '@contexts/Context';

import Button from '@common/ButtonContainer';
import Modal from '@common/Modal';
import WithdrawalModal from '@mypage/WithdrawalModal';

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
  margin-bottom: 40px;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 12px;
  margin: 40px 0px;
`;

const InfoBox = styled.section`
  display: flex;
  align-items: center;

  .email-readonly {
    background-color: ${gray02};
  }
`;

const InfoDescription = styled.span`
  ${Body3}
  font-weight : 400;

  color: ${text_black};
`;

const InfoName = styled.div`
  width: 223px;

  display: flex;
  justify-content: flex-start;

  ${Subhead4}
  font-weight : 600;

  color: ${text_black};
`;

const InfoData = styled.div`
  position: relative;

  width: 427px;
  height: 100%;

  ${Subhead4}

  color : ${text_black};

  display: flex;
  align-items: center;

  .input-readonly {
    background-color: ${gray02};
  }
`;

const Input = styled.input`
  width: 100%;
  height: 60px;

  outline: none;
  border: 1px solid ${gray05};
  border-radius: 8px;

  padding: 16px 20px;

  ${Body3}

  color : ${text_black};
  background-color: transparent;
`;

const ButtonBox = styled.div`
  margin-top: 64px;

  display: flex;
  justify-content: center;
`;

const Withdrawal = (props) => {
  const { userData, profileData } = props;
  const { user, token } = useContext(Context);

  const [account, setAccount] = useState('');
  const [nickname, setNickname] = useState('');

  const [reason, setReason] = useState('무엇이 불편하셨나요?');
  const [reasonValid, setReasonValid] = useState(false);

  const [comment, setComment] = useState('');

  const [confirm, setConfirm] = useState(false);

  const [modalActive, setModalActive] = useState(false);

  // 기존 정보 로딩해서 폼에 채워넣기
  useEffect(() => {
    console.log(profileData);

    setAccount(userData.email);
    setNickname(profileData.nickname);
  }, []);

  // 탈퇴 사유 선택에 따른 처리
  useEffect(() => {
    if (reason === '무엇이 불편하셨나요?') {
      setReasonValid(false);
    } else if (reason === '기타') {
      if (comment.trim().length >= 1) {
        setReasonValid(true);
      } else {
        setReasonValid(false);
      }
    } else {
      setReasonValid(true);
    }
  }, [reason, comment]);

  // 전체 폼의 조건이 만족되었는지 감지
  useEffect(() => {
    if (reasonValid) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [reasonValid]);

  const submitWithdrawal = (event) => {
    if (!confirm) {
      return;
    }

    setModalActive(true);
  };

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
        회원탈퇴
      </TopHeader>
      <Title>회원탈퇴</Title>

      <SubHeader>기본 정보</SubHeader>
      <InfoDescription>
        <span>
          저희 서비스에서 탈퇴를 원하신다니 아직 저희가 얼마나 미숙하고
          부족한지를 느끼게 됩니다. 탈퇴를 결정하신 불편함과 불만사항에 대해
          알려주신다면, 해당 내용을 적극 반영해 수정하고 개선하겠습니다.
          <br />
          <br />
          탈퇴 시 사전에 작성해주셨던 정보들은 모두 파기됨을 알려드립니다.
          <br />
          <br />
          또한 추후 제공 예정이었던 커뮤니티 레벨 연관 이벤트 혜택 대상자에서도
          배제됨을 주의해주세요.
          <br />
          <br />
          탈퇴를 위해 다음의 정보를 입력해주세요.
        </span>
      </InfoDescription>

      <InfoArea>
        <InfoBox>
          <InfoName>네이버 아이디*</InfoName>
          <InfoData>
            <Input
              readOnly
              value={account}
              className="input-readonly"
              placeholder="네이버 아이디를 입력해주세요"
            />
          </InfoData>
        </InfoBox>

        <InfoBox>
          <InfoName>닉네임*</InfoName>
          <InfoData>
            <Input
              readOnly
              value={nickname}
              className="input-readonly"
              placeholder="닉네임을 입력해주세요"
            />
          </InfoData>
        </InfoBox>

        <InfoBox>
          <InfoName>탈퇴사유*</InfoName>
          <InfoData>
            <Dropdown
              item={reason}
              options={[
                '이미 다 알고 있는 정보들이에요',
                '좀 더 전문적인 사람의 이야기를 듣고 싶어요',
                '증상 개선에 도움이 되지 않는 것 같아요',
                '굳이 필요한 서비스는 아닌 것 같아요',
                '커뮤니티 내 다른 사람들의 행동이 불쾌해요',
                '기타',
              ]}
              setItem={setReason}
              valid={reasonValid}
            />
          </InfoData>
        </InfoBox>

        {reason === '기타' && (
          <InfoBox>
            <InfoName>기타 불편사항</InfoName>
            <InfoData>
              <Input
                placeholder="탈퇴 사유를 자유롭게 작성해주세요."
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
            </InfoData>
          </InfoBox>
        )}
      </InfoArea>

      <InfoDescription>
        이용해주셔서 감사했습니다.
        <br />
        말씀하신 부분을 개선한 WEATO 가 되도록 노력하겠습니다.
      </InfoDescription>

      <ButtonBox>
        <Button
          text="탈퇴하기"
          btnType="6"
          disabled={!confirm}
          onClick={submitWithdrawal}
        />
      </ButtonBox>

      <Modal active={modalActive} background>
        <WithdrawalModal setModalActive={setModalActive} />
      </Modal>
    </Layout>
  );
};

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
    // redirect: {
    //   destination: '/login',
    //   permanent: false,
    // },
    props: {},
  };
};

export default Withdrawal;
