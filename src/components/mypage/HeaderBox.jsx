import styled from '@emotion/styled';

import { useContext } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import Button from '@common/ButtonContainer';

import { Display1, Tag1 } from '@styles/FontStyle';

import { gray01, gray06, text_black } from '@styles/Colors';

import profile_sample_large from '@public/profile_sample_large.png';

const Level = { 1: '새싹', 2: '일반', 3: '우수', 4: '베스트' };

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

function HeaderBox({ data }) {
  const router = useRouter();

  const { user } = useContext(Context);
  const { imageUrl, level, name, newsletterEmail } = data;

  const onClick = (event) => {
    localStorage.clear();
    document.cookie = `access_token=no_exist; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    document.cookie = `id=no_exist; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    router.push(`/`).then(() => router.reload(`/`));
  };

  return (
    <Layout>
      {!imageUrl ? (
        <>
          <Image src={profile_sample_large} width={180} height={180} alt="" />
        </>
      ) : (
        <Image src={imageUrl} width={180} height={180} alt="" />
      )}
      <Column>
        <LevelText>{Level[level]}</LevelText>
        <Name>{name}</Name>
        <Email>{newsletterEmail}</Email>
        <Button text="로그아웃" btnType="7" disabled onClick={onClick} />
      </Column>
    </Layout>
  );
}

export default HeaderBox;
