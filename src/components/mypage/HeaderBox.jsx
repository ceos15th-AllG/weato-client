import styled from '@emotion/styled';

import Image from 'next/image';

import { Display1, Tag1 } from '@styles/FontStyle';

import { gray01, gray06, text_black } from '@styles/Colors';

import profile_sample_large from '@public/profile_sample_large.png';

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

const Level = styled.span`
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

  ${Tag1}

  color : ${text_black};
`;

function HeaderBox({ userData }) {
  const { name, email, gender } = userData;

  return (
    <Layout>
      <Image src={profile_sample_large} width={180} height={180} alt="" />
      <Column>
        <Level>새싹</Level>
        <Name>{name}</Name>
        <Email>{email}</Email>
      </Column>
    </Layout>
  );
}

export default HeaderBox;
