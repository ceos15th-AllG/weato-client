import styled from '@emotion/styled';

import Button from '@common/ButtonContainer';
import NewsletterResult from '@search/NewsletterResult';
import CommunityResult from '@search/CommunityResult';
import Pagenator from '@common/Pagenator';

import { Display1, Body4 } from '@styles/FontStyle';

import { main, text_black } from '@styles/Colors';

const Layout = styled.div`
  margin: 0px 300px 167px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin: 95px 0px 30px;

  align-self: center;

  ${Display1}

  color :${text_black};
`;

const SubtitleBox = styled.div`
  width: 100%;

  margin: 100px 0px 40px;

  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.span`
  ${Body4}

  color : ${main};
`;

const ButtonBox = styled.div`
  margin-top: 60px;

  display: flex;
  justify-content: center;
`;

const PagenatorBox = styled.div`
  margin: 73px 0px 210px;

  display: flex;
  justify-content: center;
`;

const Search = ({ keyword, category }) => {
  const newsletterLength = 3;
  const communityLength = 5;

  const communityData = [
    {
      id: '0',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '1',
      category: '질문',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '2',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '3',
      category: '질문',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '4',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
  ];

  return (
    <Layout>
      <Title>
        &apos;{keyword}&apos;
        {category === 'all' ? ' 에 대한 검색결과' : undefined}
        {category === 'newsletter' ? ' 에 대한 뉴스레터 검색결과' : undefined}
        {category === 'community' ? ' 에 대한 커뮤니티 검색결과' : undefined}
      </Title>

      {category === 'all' || category === 'newsletter' ? (
        <>
          <SubtitleBox>
            <SubTitle>
              &apos;{keyword}&apos; 에 대한 뉴스레터입니다. ({newsletterLength})
            </SubTitle>
          </SubtitleBox>
          <NewsletterResult />
        </>
      ) : undefined}
      {category === 'all' ? (
        <ButtonBox>
          <Button text="더보기" btnType="4" />
        </ButtonBox>
      ) : undefined}

      {category === 'all' || category === 'community' ? (
        <>
          <SubtitleBox>
            <SubTitle>
              &apos;{keyword}&apos; 에 대한 커뮤니티 글입니다. (
              {communityLength})
            </SubTitle>
          </SubtitleBox>
          <CommunityResult communityData={communityData} />
        </>
      ) : undefined}
      {category === 'all' ? (
        <ButtonBox>
          <Button text="더보기" btnType="4" />
        </ButtonBox>
      ) : undefined}

      {category === 'newsletter' || category === 'community' ? (
        <PagenatorBox>
          <Pagenator />
        </PagenatorBox>
      ) : undefined}
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query;
  let defaultKeyword = '빈 검색어';
  let defaultCategory = 'all';

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('keyword')) {
    defaultKeyword = query.keyword;
  }

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('category')) {
    defaultCategory = query.category;
  }

  return {
    props: {
      keyword: defaultKeyword,
      category: defaultCategory,
    },
  };
};

export default Search;
