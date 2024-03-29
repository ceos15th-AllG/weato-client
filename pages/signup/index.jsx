/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState, useEffect, useCallback, useContext } from 'react';

import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import axios from 'axios';

import {
  main,
  sub,
  gray05,
  text_black,
  semantic_red,
  gray07,
} from '@styles/Colors';

import { Display1, Subhead4, Body1, Body2, Body3 } from '@styles/FontStyle';

import Button from '@common/ButtonContainer';
import ButtonGroup from '@signup/ButtonGroup';
import CheckBox from '@common/CheckBox';
import Modal from '@common/Modal';
import PolicyModal from '@signup/PolicyModal';

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

  letter-spacing: ${({ password }) => (!password ? 0 : `10px`)};

  &::-webkit-input-placeholder {
    letter-spacing: 0px;
  }
  &:-ms-input-placeholder {
    letter-spacing: 0px;
  }
`;

const InputWarning = styled.span`
  height: 24px;

  ${Body2}

  margin-top : 8px;

  color: ${({ highlight }) => (!highlight ? semantic_red : main)};
  opacity: ${({ valid, highlight }) => (highlight || !valid ? 1 : 0)};

  transition: all 0.3s ease-in-out;
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

const PolicyText = styled.span`
  margin-left: 32px;

  ${Body3};

  color: ${text_black};
`;

const PolicyButton = styled.span`
  font-size: 14px;
  color: ${gray07};
`;

function Signup(props) {
  const router = useRouter();
  const { setToken, setUser, setLogin } = useContext(Context);
  const { token, userData } = props;

  const [nickname, setNickname] = useState('');
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameUnique, setNicknameUnique] = useState(false);
  const [email, setEmail] = useState('');
  const [emailValidText, setEmailValidText] = useState('aaaa@bb.cc');
  const [emailWaiting, setEmailWaiting] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [emailSended, setEmailSended] = useState(false);
  const [emailCert, setEmailCert] = useState('');
  const [emailCertValid, setEmailCertValid] = useState(false);
  const [emailConfirm, setEmailConfirm] = useState(false);
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
  const [modalActive, setModalActive] = useState(false);
  const [check, setCheck] = useState(false);
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
  const onChangeEmail = useCallback((event) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);
    setEmailSended(false);
    setEmailConfirm(false);

    if (!emailRegex.test(emailCurrent)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  }, []);
  const onChangeEmailCert = useCallback((event) => {
    const result = event.target.value.replace(/\D/g, '');
    setEmailCert(result.slice(0, 5));
    // setNicknameUnique(false);

    if (event.target.value.length >= 5) {
      setEmailCertValid(true);
    } else {
      setEmailCertValid(false);
    }
  }, []);
  const toggleActive = (id) => {
    setTags(
      tags.map((tag, index) =>
        index === id ? { ...tag, active: !tag.active } : tag
      )
    );
  };
  const toggleCheckBox = () => {
    if (!check) {
      setModalActive(true);
    } else {
      setCheck(false);
    }
  };
  const onClickModalOn = () => {
    setModalActive(true);
  };
  const validateNickname = async (event) => {
    if (!nicknameValid) {
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
  const sendEmail = async (event) => {
    if (!emailValid || emailSended || emailConfirm) {
      return;
    }

    try {
      setEmailSended(true);
      const response = await axios({
        method: 'post',
        url: `https://www.weato.kro.kr/api/mail`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          address: email,
        },
      });
      // alert('이메일 전송 완료');
      setEmailCert('');
      setEmailCertValid(false);
      setEmailConfirm(false);
    } catch (error) {
      setEmailSended(false);
      // alert(error);
      alert('서버 요청이 불가능하네요...');
    }
  };
  const confirmEmail = async (event) => {
    if (!emailCertValid || emailConfirm) {
      return;
    }

    try {
      const response = await axios({
        method: 'patch',
        url: `https://www.weato.kro.kr/api/mail`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          num: parseInt(emailCert),
        },
      });

      alert('이메일이 인증되었습니다.');
      setEmailConfirm(true);
    } catch (error) {
      console.log(error);
      alert('인증 번호를 다시 확인해주세요...');
    }
  };
  const onConfirm = async (event) => {
    if (!confirm) {
      return;
    }

    try {
      const signupRequest = await axios({
        method: 'post',
        url: `https://www.weato.kro.kr/api/members/${userData.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          nickname: nickname,
          newsletterEmail: email,
          drug: tags[0].active,
          cleaning: tags[1].active,
          environment: tags[2].active,
          sleep: tags[3].active,
          food: tags[4].active,
          etc: tags[5].active,
        },
      });

      const response = await axios({
        method: 'get',
        url: `https://www.weato.kro.kr/api/members`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setToken(token);
      setUser(response.data);
      setLogin(true);

      router.push(`/signup/success`);
    } catch (error) {
      alert(error);
      alert('서버 요청이 불가능하네요...');
    }
  };

  // 선호 태그 입력 1개 이상인지 체크
  useEffect(() => {
    if (tags.filter((tag) => tag.active).length > 0) {
      setTagValid(true);
    } else {
      setTagValid(false);
    }
  }, [tags]);

  // 전체 필드 만족되었는지 체크
  useEffect(() => {
    if (nicknameUnique && emailConfirm && tagValid && check) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [nicknameUnique, emailConfirm, tagValid, check]);

  return (
    <Layout>
      <TopText>회원가입</TopText>

      <Content>
        <ContentItem>
          <InputHeader>닉네임 *</InputHeader>
          <Input>
            <InputField
              placeholder="2자 이상 10자 이하로 입력해주세요"
              value={nickname}
              onChange={onChangeNickname}
            />
            {nicknameValid && nicknameUnique ? (
              <Button text="사용 가능" btnType="3" disabled />
            ) : (
              <Button
                text="중복 확인"
                btnType="3"
                disabled={!nicknameValid}
                onClick={validateNickname}
              />
            )}
          </Input>
          <InputWarning valid={nicknameValid}>
            2자 이상 10자 이하로 입력해주세요
          </InputWarning>
        </ContentItem>

        <ContentItem>
          <InputHeader>뉴스레터를 받을 이메일 주소 *</InputHeader>
          <Input>
            <InputField
              placeholder="aaaa@bb.cc"
              value={email}
              onChange={onChangeEmail}
            />
            <Button
              text="인증하기"
              btnType="3"
              disabled={!emailValid || emailSended || emailConfirm}
              onClick={sendEmail}
            />
          </Input>
          {emailSended ? (
            <InputWarning highlight>
              인증 번호가 메일로 전송되었습니다.
            </InputWarning>
          ) : (
            <InputWarning valid={emailValid}>{emailValidText}</InputWarning>
          )}
        </ContentItem>
        {emailSended ? (
          <ContentItem>
            <InputHeader>인증번호 *</InputHeader>
            <Input>
              <InputField
                placeholder="이메일로 전송된 인증 번호를 입력하세요"
                password
                value={emailCert}
                onChange={onChangeEmailCert}
              />
              <Button
                text="확인"
                btnType="3"
                disabled={!emailCertValid || emailConfirm}
                onClick={confirmEmail}
              />
            </Input>
          </ContentItem>
        ) : undefined}

        <ContentItem>
          <TagRow>
            <TagHeader>선호태그 *</TagHeader>
            <TagSubHeader>
              선호하는 태그에 맞춰 뉴스레터를 빠르게 받아보실 수 있습니다.
            </TagSubHeader>
          </TagRow>

          <TagRow>
            <ButtonGroup tags={tags} toggleActive={toggleActive} />
          </TagRow>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 64px;
          `}
        >
          <PolicyHeader>서비스 정책</PolicyHeader>
          <PolicyRow>
            <PolicySubRow>
              <CheckBox active={check} onClick={toggleCheckBox} />
              <PolicyText>서비스 이용약관에 모두 동의합니다. (필수)</PolicyText>
            </PolicySubRow>
            <PolicyButton onClick={onClickModalOn}>
              <u>약관보기</u>
            </PolicyButton>
          </PolicyRow>
        </ContentItem>

        <ContentItem>
          <Button
            text="가입하기"
            btnType="6"
            disabled={!confirm}
            onClick={onConfirm}
          />
        </ContentItem>
      </Content>

      <Modal active={modalActive} background>
        <PolicyModal setModalActive={setModalActive} setCheck={setCheck} />
      </Modal>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  try {
    const token = query.token;

    const response = await axios({
      method: 'get',
      url: `https://www.weato.kro.kr/api/members`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      props: {
        token: token,
        userData: response.data,
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

export default Signup;
