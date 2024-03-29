import styled from '@emotion/styled';

import { useContext } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import LevelProfile from '@common/LevelProfile';
import Button from '@common/ButtonContainer';

import { Display1, Tag1 } from '@styles/FontStyle';

import { gray01, gray06, text_black } from '@styles/Colors';

const Level = { 1: '새싹', 2: '일반', 3: '우수', 4: '베스트', 100: '관리자' };

const Layout = styled.header`
  height: 400px;

  padding: 0px 300px;

  display: flex;
  align-items: center;

  background-color: ${gray01};
`;

const Column = styled.div`
  margin-left: 42px;

  display: flex;
  flex-direction: column;
`;

const LevelText = styled.span`
  ${Tag1}

  color : ${gray06};
`;

const Name = styled.span`
  margin-top: 8px;

  ${Display1}

  color : ${text_black};
`;

const Email = styled.span`
  margin-top: 11px;
  margin-bottom: 12px;

  ${Tag1}

  color : ${text_black};
`;

const CustomProfileContainer = styled.div`
  width: 180px;
  height: 180px;

  border-radius: 50%;
  overflow: hidden;
`;

function HeaderBox(props) {
  const router = useRouter();
  const { user } = useContext(Context);

  const { imageUrl, level, name, newsletterEmail } = props.data;

  const onLogout = (event) => {
    localStorage.clear();
    document.cookie = `token=no_exist; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    document.cookie = `id=no_exist; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    // setLogOut();

    router.push(`/`).then(() => router.reload(`/`));
    // router.replace(`/`);
  };

  return (
    <Layout>
      {!imageUrl ? (
        <LevelProfile level={level} width={180} height={180} />
      ) : (
        // <Image src={profile_sample_large} width={180} height={180} alt="" />
        <CustomProfileContainer>
          <Image src={imageUrl} width={180} height={180} alt="" />
        </CustomProfileContainer>
      )}
      <Column>
        <LevelText>{Level[level]}</LevelText>
        <Name>{name}</Name>
        <Email>{newsletterEmail}</Email>
        <Button text="로그아웃" btnType="7" disabled onClick={onLogout} />
      </Column>
    </Layout>
  );
}

export default HeaderBox;
