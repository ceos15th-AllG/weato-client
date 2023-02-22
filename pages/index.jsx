import styled from '@emotion/styled';

import { useContext } from 'react';

import Context from '@contexts/Context';

import CardBox from '@common/CardBox';
import Button from '@common/ButtonContainer';

import { Display1, Headline2 } from '@styles/FontStyle';
import { text_white } from '@styles/Colors';

import banner from '@public/main_banner.png';

const HomeLayout = styled.div`
  margin-bottom: 4px;
`;

const BannerLayout = styled.div`
  width: 1920px;
  height: 421px;

  background-image: url(${banner.src});
  background-size: contain;
`;

const BannerContent = styled.div`
  position: relative;

  right: 300px;
  top: 140px;

  height: 184px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const BannerText = styled.article`
  ${Headline2}

  line-height : 42px;
  text-align: right;

  color: ${text_white};
`;

const HomeContent = styled.main`
  margin: 0px 300px;
  padding-top: 90px;
`;

const CardHeader = styled.header`
  margin-bottom: 60px;
`;

const CardRow = styled.div`
  display: flex;

  justify-content: space-between;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 60px 0px 96px;
`;

function Home() {
  const { login } = useContext(Context);

  const newsletterHot = {
    data: [
      {
        id: 35,
        title: '세면 제품 살 때, 이 성분들은 주의!',
        createdAt: '2022-11-10',
        tagType: 'CLEANING',
      },
      {
        id: 34,
        title: '일광욕, 피부에 안 좋은 영향을 줄까?',
        createdAt: '2022-11-10',
        tagType: 'ENVIRONMENT',
      },
      {
        id: 33,
        title: '아토피 후 남는 흉터… 없앨 수 있을까?',
        createdAt: '2022-11-10',
        tagType: 'OTHERWISE',
      },
      {
        id: 32,
        title: '자기 전 젖은 드레싱으로 피부 둘러싸기',
        createdAt: '2022-11-10',
        tagType: 'SLEEP',
      },
      {
        id: 31,
        title: '달콤한 꿀, 피부에 바르기도 한다고?',
        createdAt: '2022-11-10',
        tagType: 'FOOD',
      },
      {
        id: 30,
        title: 'Winter is coming, 아토피도 준비',
        createdAt: '2022-11-10',
        tagType: 'ENVIRONMENT',
      },
      {
        id: 29,
        title: '아토피 증상과 심혈관의 관계?',
        createdAt: '2022-11-10',
        tagType: 'OTHERWISE',
      },
      {
        id: 28,
        title: '코넬 의대 출신이 이야기하는 바디워시',
        createdAt: '2022-11-10',
        tagType: 'CLEANING',
      },
    ],
  };
  const newsletterScrap = {
    data: [
      {
        id: 1,
        title: '샤워, 목욕, 세면, 습관으로 아토피 관리',
        createdAt: '2022-10-02',
        tagType: 'CLEANING',
      },
      {
        id: 2,
        title: '새로운 대안, JAK 억제제?',
        createdAt: '2022-10-02',
        tagType: 'DRUG',
      },
      {
        id: 3,
        title: '늘고 있는 미세먼지와 아토피',
        createdAt: '2022-10-02',
        tagType: 'ENVIRONMENT',
      },
      {
        id: 4,
        title: '설거지를 하는데 갑자기 증상이?',
        createdAt: '2022-10-02',
        tagType: 'OTHERWISE',
      },
      {
        id: 5,
        title: '장에 좋다는 유익균, 아토피에도 도움을?',
        createdAt: '2022-10-02',
        tagType: 'FOOD',
      },
      {
        id: 6,
        title: '일부 환자들에게 보험 적용되기 시작한 JAK억제제들',
        createdAt: '2022-10-02',
        tagType: 'DRUG',
      },
      {
        id: 7,
        title: '플라스틱, 잘 신경 써서 아토피 예방을',
        createdAt: '2022-10-09',
        tagType: 'ENVIRONMENT',
      },
      {
        id: 8,
        title: '잘 때 쓰는 침대 시트는 어떤 게 좋지?',
        createdAt: '2022-10-09',
        tagType: 'SLEEP',
      },
    ],
  };

  return (
    <>
      <HomeLayout>
        <div>
          <BannerLayout>
            <BannerContent>
              <BannerText>
                아토피와의 긴 여정,
                <br />
                이제는 위아토와 함께해요!
              </BannerText>
              {login ? (
                <Button text={'바로 구독하기'} btnType={'4'} href="/mypage" />
              ) : (
                <Button text={'바로 구독하기'} btnType={'4'} href="/login" />
              )}
            </BannerContent>
          </BannerLayout>

          <HomeContent>
            <CardHeader css={Display1}>이주의 아토레터</CardHeader>
            <CardBox data={newsletterHot.data} />
            <ButtonRow>
              <Button text={'전체 글 보기'} btnType={'4'} href="/newsletter" />
            </ButtonRow>

            <CardHeader css={Display1}>가장 많은 스크랩</CardHeader>
            <CardBox data={newsletterScrap.data} />
            <ButtonRow>
              <Button text={'전체 글 보기'} btnType={'4'} href="/newsletter" />
            </ButtonRow>
          </HomeContent>
        </div>
      </HomeLayout>
    </>
  );
}

export default Home;
