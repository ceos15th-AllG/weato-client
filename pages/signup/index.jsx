/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

import { sub, gray05, text_black, semantic_red, gray07 } from '@styles/Colors';

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
`;

const InputWarning = styled.span`
  height: 24px;

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
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
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
  const [modalActive, setModalActive] = useState(false);

  const [nicknameValid, setNicknameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [tagValid, setTagValid] = useState(false);
  const [check, setCheck] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const toggleActive = (id) => {
    setTags(
      tags.map((tag, index) =>
        index === id ? { ...tag, active: !tag.active } : tag
      )
    );
  };
  const offCheckBox = () => {
    setCheck(false);
  };
  const onClickModalOn = () => {
    setModalActive(true);
  };
  const onConfirm = (event) => {
    if (confirm) {
      alert('가입!');
    }
  };
  const validateNickname = (nickname) => {
    const access_token = localStorage.getItem('access_token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

    alert(access_token);

    // try {
    //   const res = await axios.get(
    //     `http://3.37.94.86/api/newsletters/${query.id}`
    //   );

    //   if (res.status === 200) {
    //     return {
    //       props: {
    //         newsletterId: query.id,
    //         newsletterData: res.data,
    //       },
    //     };
    //   }
    // } catch (error) {
    //   console.log(error);
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: '/404',
    //     },
    //     props: {
    //       newsletterId: query.id,
    //     },
    //   };
    // }
  };

  useEffect(() => {
    // console.log(`new access token : `, localStorage.getItem('access_token'));
    if (nicknameValid && emailValid && tagValid && check) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [nicknameValid, emailValid, tagValid, check]);

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
            <Button text="중복 확인" btnType="3" onClick={validateNickname} />
          </Input>
          <InputWarning>
            {nickname !== '' ? `이미 사용중인 닉네임입니다.` : ` `}
          </InputWarning>
        </ContentItem>

        <ContentItem>
          <InputHeader>뉴스레터를 받을 이메일 주소 *</InputHeader>
          <Input>
            <InputField
              placeholder="xxxxxxx@gmail.com"
              value={email}
              onChange={onChangeEmail}
            />
            <Button text="인증하기" btnType="3" />
          </Input>
          <InputWarning>
            {email !== '' ? `xxxxxxxx@gmail.com` : ` `}
          </InputWarning>
        </ContentItem>

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
              <CheckBox active={check} toggleCheckBox={offCheckBox} />
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
