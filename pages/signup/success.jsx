import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import { Display1, Body5 } from '@styles/FontStyle';
import { text_black } from '@styles/Colors';
import Button from '@common/ButtonContainer';

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

function Success({ memberData }) {
  return (
    <Layout>
      <TopText>회원가입 성공!</TopText>

      <SubText>
        {!memberData ? `회원` : memberData.name}님의 아토피 정보를 추가로
        입력하시면
        <br />
        더욱 다양하고 정확한 정보를 얻을 수 있어요!
      </SubText>

      <ButtonBox>
        <Button text="지금 입력하기" btnType="5" href="/signup/more" />
        <Button text="나중에 작성하기" btnType="5" disabled href="/" />
      </ButtonBox>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  if (typeof window !== 'undefined') {
    const access_token = localStorage.getItem('access_token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  }

  try {
    const res = await axios.get(`https://www.weato.kro.kr/api/members`);

    if (res.status === 200) {
      return {
        props: {
          memberData: res.data,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      // redirect: {
      //   permanent: false,
      //   destination: '/404',
      // },
      props: {
        memberData: null,
      },
    };
  }
};

export default Success;
