import styled from '@emotion/styled';

import { useScrollPercentage } from 'react-scroll-percentage';

import ProgressBar from '@newsletter/ProgressBar';
import Button from '@newsletter/ButtonContainer';
import NewsletterForm from '@newsletter/NewsletterForm';

import { Display1, Subhead3, Headline1, Body2 } from '@styles/FontStyle';
import {
  main,
  gray02,
  gray05,
  gray06,
  gray07,
  text_black,
  tag_etc,
} from '@styles/Colors';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 83px 300px 0px;
`;

const ContentHeader = styled.header`
  width: 100%;

  margin-bottom: 101px;
  padding-bottom: 23px;

  ${Subhead3}

  color : ${text_black};
  border-bottom: 3px solid ${gray06};
`;

const ButtonRow = styled.div`
  margin: 16px 635px 160px;

  display: flex;
  justify-content: right;
`;

const NewsletterFormNew = styled.div`
  width: 650px;

  display: flex;
  flex-direction: column;

  .header {
    width: 100%;

    margin-bottom: 24px;

    ${Display1};

    text-align: center;

    color: ${text_black};
  }

  .header-subscription {
    width: 100%;

    margin-bottom: 28px;

    ${Body2};

    text-align: center;

    color: ${gray05};
  }

  .header-date {
    width: 100%;

    margin-bottom: 27px;

    ${Body2};

    text-align: right;

    color: ${gray07};
  }

  .content-text {
    margin-bottom: 24px;

    ${Body2};

    line-height: 24px;
    text-align: left;

    color: ${text_black};
  }

  .content-line {
    width: 100%;

    margin: 16px 0px 40px;

    border-top: 1px solid ${tag_etc};
  }

  .content-header {
    margin-bottom: 20px;

    ${Headline1};

    color: ${text_black};
  }

  .content-a {
    color: ${main};
  }

  .content-list {
    margin-bottom: 24px;

    list-style: disc outside none;
    line-height: 28px;
  }

  .content-listitem {
    list-style: disc outside none;
  }
`;

function Newsletter(props) {
  const [ref, percentage] = useScrollPercentage({
    // rootMargin: '100px',
    threshold: 0.48,
  });

  return (
    <Layout ref={ref}>
      <ProgressBar percentage={percentage * 100} />

      <Content>
        <ContentHeader>뉴스레터 &#xE001; 세면</ContentHeader>
        <NewsletterFormNew>
          <header className="header">
            샤워, 목욕...세면 습관으로 아토피 관리
          </header>
          <span className="header-subscription">
            본 뉴스레터는 전문기자의 기사를 기반으로 작성되었습니다.
          </span>
          <date className="header-date">2022-05-25</date>

          <>
            <span className="content-text">
              기온이 높아지면서 찾아오기 시작한 여름.
              <br />
              땀이 나기 쉬운 환경의 계절이 함께 오면서 관리에 대해 신경써야될
              시간이 다가와 우려하시는 분들도 있을 것 같습니다.
            </span>
            <span className="content-text">
              그래서 세면에 대한 글을 통해 기존에 관리하시던 분들에게는 리마인더
              역할을, 접한지 얼마 안 되는 분들에게는 정보를 제공하고자 합니다.
            </span>

            <div className="content-line" />

            <header className="content-header">💦 간단하게 샤워로</header>
            <span className="content-text">
              과거에 잦은 샤워와 세면은 피부건조를 일으킬 수 있어 제한하는 것을
              권했지만,
              <br />
              오히려 최근 오염된 피부가 주는 악영향이 더 크므로 잦은 샤워를
              권하고 있습니다.
            </span>
            <span className="content-text">
              전문가들은 아토피 환자들에게{' '}
              <a className="content-a">다음과 같은 내용들의 샤워 습관</a>을
              권했습니다.
            </span>
            <ul className="content-list">
              <li className="content-listitem">미지근한 온도의 물</li>
              <li className="content-listitem">
                너무 길지 않게 15분 이내로 샤워 진행할 것
              </li>
              <li className="content-listitem">
                샤워 후 3분 이내에 전신에 보습제를 바를 것
              </li>
            </ul>

            <div className="content-line" />

            <header className="content-header">
              🛁 좀 더 세밀하게 목욕으로
            </header>
            <span className="content-text">
              목욕도 샤워와 마찬가지로 과거 연구에서는 피부 손상을 촉진시킨다고
              생각해 목욕 횟수를 일주일에 1번으로 줄이는 것으로 치료를
              권하였습니다.
            </span>
            <span className="content-text">
              최근 연구는 이러한 내용과는 반대로 오히려{' '}
              <a className="content-a">목욕 통한 위생 유지</a>가 아토피 증상
              완화에 매우 중요하다는 결과가 나왔습니다. 과거의 연구 결과에
              영향을 미친 것은 목욕 그 자체가 아닌 (지나치게 뜨거운 물, 때밀이
              사용, 피부를 문질러 닦는 목욕 습관, 자극성 바디 소프 사용)인
              것으로 지목되고 있네요. 이러한 아토피 환자들에게 권해지는 목욕
              방법은 다음과 같습니다.
            </span>
            <ul className="content-list">
              <li className="content-listitem">하루 1회의 목욕을 권장</li>
              <li className="content-listitem">
                땀이 많이 나는 여름에는 하루 2회까지도 권장
              </li>
              <li className="content-listitem">
                중성이나 약산성의 저자극성 세정제를 사용 권장
              </li>
              <li className="content-listitem">
                때를 미는 등의 피부를 자극하는 목욕습관은 피할 것
              </li>
              <li className="content-listitem">
                목욕 끝난 후 10분 내 바로 보습제를 전신에 바를 것
              </li>
            </ul>

            <div className="content-line" />

            <span className="content-text">
              샤워도, 목욕도 피부를 세정해주는 효과는 있지만 둘 다 모두 마무리
              후 보습제를 통한 보습을 중요하게 언급하고 있는 만큼, 마무리 후
              보습에도 신경을 써야되겠습니다. 마지막으로 최근 아토피 환자 분들을
              위해 <a className="content-a">충남 수안보 온천이 제공하는 혜택</a>
              에 대해 간단히 말씀드리며 참고가 되기를 바랍니다.
            </span>
            <ul className="content-list">
              <li className="content-listitem">
                대한아토피협회와 공무원연금공단이 수안보 온천에 대해 협약 체결
              </li>
              <li className="content-listitem">
                전국 아토피 환자들에게 저렴한 비용으로 수안보 온천 이용
              </li>
            </ul>
          </>
        </NewsletterFormNew>
      </Content>

      <ButtonRow>
        <Button value={200} btnType="heart" />
        <Button value={200} btnType="save" />
      </ButtonRow>
    </Layout>
  );
}

export default Newsletter;
