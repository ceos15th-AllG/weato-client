import styled from '@emotion/styled';

import Button from '../../src/components/common/ButtonContainer';
import CardBox from '../../src/components/search/CardBox';
import BoardRow from '../../src/components/search/BoardRow';

import { Display1, Body4 } from '../../styles/FontStyle';

import { main, text_black } from '../../styles/Colors';

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

const SubTitle = styled.span`
  margin: 100px 0px 40px;

  ${Body4}

  color : ${main};
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  margin-top: 60px;

  display: flex;
  justify-content: center;
`;

const Search = () => {
  const keyword = '강아지 아토피';
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
      <Title>'{keyword}' 에 대한 검색결과</Title>

      <SubTitle>
        '{keyword}' 에 대한 뉴스레터입니다. ({newsletterLength})
      </SubTitle>
      <CardBox />
      <ButtonBox>
        <Button text="더보기" btnType="4" />
      </ButtonBox>

      <SubTitle>
        '{keyword}' 에 대한 뉴스레터입니다. ({communityLength})
      </SubTitle>
      <Board>
        {communityData.map(
          ({ id, category, title, view, like, name, level }) => (
            <BoardRow
              key={id}
              category={category}
              title={title}
              view={view}
              like={like}
              name={name}
              level={level}
            />
          )
        )}
      </Board>
      <ButtonBox>
        <Button text="더보기" btnType="4" />
      </ButtonBox>
    </Layout>
  );
};

export default Search;
