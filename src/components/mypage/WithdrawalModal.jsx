import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import Button from '@common/ButtonContainer';

import { Headline1 } from '@styles/FontStyle';

import { text_black } from '@styles/Colors';

const Layout = styled.div`
  position: fixed;
  margin: auto;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  width: 400px;
  height: 240px;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: white;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 78px;

  .modal-text {
    ${Headline1}

    color : ${text_black};
  }
`;

const ButtonRow = styled.div`
  margin-bottom: 44px;
  display: flex;
  justify-content: center;
`;

const WithdrawalModal = ({ setModalActive }) => {
  const router = useRouter();

  const onCheck = (event) => {
    setModalActive(false);
    router.push(`/`);
  };

  return (
    <Layout>
      <ContentBox>
        <span className="modal-text">탈퇴가 완료되었습니다.</span>
      </ContentBox>

      <ButtonRow>
        <Button text={'확인'} btnType={'3'} onClick={onCheck} />
      </ButtonRow>
    </Layout>
  );
};

export default WithdrawalModal;
