import styled from '@emotion/styled';

import { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import cookie from 'cookie';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Context from '@contexts/Context';

import ProgressBar from '@newsletter/ProgressBar';
import ActionButton from '@common/ActionButton';

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

  strong {
    margin: 0px 6px;
    font-weight: 300;
  }
`;

const ButtonRow = styled.div`
  margin: 16px 635px 160px;

  display: flex;
  justify-content: right;
`;

const NewsletterForm = styled.div`
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

    a {
      color: ${main};
    }

    strong {
      font-weight: 500;
    }
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

  .content-listitem-nested {
    list-style-type: circle;
  }

  .content-img {
    width: 100%;
    margin-bottom: 24px;

    border-radius: 4px;
  }
`;

const toKoreanTags = {
  DRUG: '약품',
  SLEEP: '수면',
  CLEANING: '세면',
  FOOD: '음식',
  ENVIRONMENT: '환경',
  OTHERWISE: '기타',
  ALL: '전체',
};

const toQueryTags = {
  ALL: 'all',
  DRUG: 'medicine',
  SLEEP: 'sleep',
  CLEANING: 'water',
  FOOD: 'food',
  ENVIRONMENT: 'env',
  OTHERWISE: 'etc',
};

const newsletterDatas = {
  1: {
    title: '샤워, 목욕, 세면, 습관으로 아토피 관리',
    content:
      "<span class='content-text'>기온이 높아지면서 찾아오기 시작한 여름.<br />땀이 나기 쉬운 환경의 계절이 함께 오면서 관리에 대해 신경써야 될 시간이 다가와 우려하시는 분들도 있을 것 같습니다.</span><span class='content-text'>그래서 세면에 대한 글을 통해 기존에 관리하시던 분들에게는 리마인더 역할을, 접한지 얼마 안 되는 분들에게는 정보를 제공하고자 합니다.</span><div class='content-line'></div><header class='content-header'>💦 간단하게 샤워로</header><span class='content-text'>과거에 잦은 샤워와 세면은 피부 건조를 일으킬 수 있어 제한하는 것을 권했지만,<br />오히려 최근 오염된 피부가 주는 악영향이 더 크므로 잦은 샤워를 권하고 있습니다.</span><span class='content-text'>전문가들은 아토피 환자들에게 <a class='content-a'>다음과 같은 내용들의 샤워 습관</a>을 권했습니다.</span><ul class='content-list'><li class='content-listitem'>미지근한 온도의 물</li><li class='content-listitem'>너무 길지 않게 15분 이내로 샤워 진행할 것</li><li class='content-listitem'>샤워 후 3분 이내에 전신에 보습제를 바를 것</li></ul><div class='content-line'></div><header class='content-header'>🛁 좀 더 세밀하게 목욕으로</header><span class='content-text'>목욕도 샤워와 마찬가지로 과거 연구에서는 피부 손상을 촉진시킨다고 생각해 목욕 횟수를 일주일에 1번으로 줄이는 것으로 치료를 권했습니다.</span><span class='content-text'>최근 연구는 이러한 내용과는 반대로 오히려 <a class='content-a'>목욕을 통한 위생 유지가 아토피 증상 완화에 매우 중요하다는 결과</a>가 나왔습니다.<br />과거의 연구 결과에 영향을 미친 것은 목욕 그 자체가 아닌 (지나치게 뜨거운 물, 때밀이 사용, 피부를 문질러 닦는 목욕 습관, 자극성 바디 소프 사용)인 것으로 지목되고 있네요.</span><span class='content-text'>이러한 아토피 환자들에게 권해지는 목욕 방법은 다음과 같습니다.</span><ul class='content-list'><li class='content-listitem'>하루 1회의 목욕을 권장</li><li class='content-listitem'>땀이 많이 나는 여름에는 하루 2회까지도 권장</li><li class='content-listitem'>중성이나 약산성의 저자극성 세정제를 사용 권장</li><li class='content-listitem'>때를 미는 등의 피부를 자극하는 목욕 습관은 피할 것</li><li class='content-listitem'>목욕 끝난 후 10분 내 바로 보습제를 전신에 바를 것</li></ul><div class='content-line'></div><span class='content-text'>샤워도, 목욕도 피부를 세정해주는 효과는 있지만 둘 다 모두 마무리 후 보습제를 통한 보습을 중요하게 언급하고 있는 만큼, 마무리 후 보습에도 신경을 써야 하겠습니다.</span><span class='content-text'>마지막으로 최근 아토피 환자 분들을 위해 <a class='content-a'>충남 수안보 온천이 제공하는 혜택</a>에 대해 간단히 말씀드리며 참고가 되기를 바랍니다.</span><ul class='content-list'><li class='content-listitem'>대한 아토피 협회와 공무원 연금 공단이 수안보 온천에 대해 협약 체결</li><li class='content-listitem'>전국 아토피 환자들에게 저렴한 비용으로 수안보 온천 이용</li></ul>",
    createdAt: '2022-10-02',
    tagType: 'CLEANING',
  },
  2: {
    title: '새로운 대안, JAK 억제제?',
    content:
      "<span class='content-text'>아토피 증상 개선에는 스테로이드제부터 여러 종류의 면역 억제제와 생물학적 억제제, 한약까지 다양한 종류의 약품들이 사용되고 있습니다.</span><span class='content-text'>최근 들어 대형 제약사들이 아토피와 관련된 약품 제조에 노력하고 있는데, 이 중 최근 신약 허가를 받은 약품군인 JAK 억제제라는 제품군이 많아지고 있는데요.<br />이에 대한 정보를 간단하게 여러분께 알려드리고자 합니다.</span><div class='content-line'></div><header class='content-header'>💊 JAK 억제제?</header><span class='content-text'>JAK 억제제, 생소한 단어일 텐데요..!<br />면역 억제 기능을 가지며, 다른 면역 억제제를 사용해 보신 분들이라면 비슷한 효능으로 생각하실 수 있겠습니다.</span><div class='content-line'></div><header class='content-header'>🤔 현재 가능한 것일까?</header><span class='content-text'>최근 국내에서 허가를 받고 보험까지 적용된 제품은 다음의 두 가지인데요,</span><ul class='content-list'><li class='content-listitem'>애브비 - 린버크</li><li class='content-listitem'>릴리 - 올루미넌트</li></ul><span class='content-text'>아토피를 위한 신약으로써의 허가는 작년에 이미 받았지만 본격적으로 올해 5월부터 보험이 적용되기 시작했습니다!</span><span class='content-text'>해당 약품들의 적용법은 1일 1회 1정씩 먹는 형태이며, 2500명의 청소년 환자 대상으로 임상 3상까지 거쳐 승인받았습니다. 물론 해당 약품은 매우 심한 환자분들을 대상으로 한 제품으로, 발생 초기 환자분들께는 제안되지 않습니다.</span><div class='content-line'></div><header class='content-header'>🏥 보험 급여 적용 기준은...</header><ul class='content-list'><li class='content-listitem'>3년 이상 증상이 발생하고 있는 만 18세 이상의 성인</li><li class='content-listitem'>1차 치료제로 국소 치료제들을 4주 이상 적용한 후에도 조절 실패한 경우</li><li class='content-listitem'>전신 면역 억제제 적용 3개월 차에도 반응이 없거나 부작용이 발생한 경우</li><li class='content-listitem'>EASI 23점 이상</li></ul><span class='content-text'>상단의 4가지 조건을 모두 만족해야 한다고 하네요.<br />급여 적용 시 기존 1정 당 2만원 상당의 금액에서 10%만 부담하도록 변경된 급여 기준이 새롭게 산정되었다고 합니다.</span><span class='content-text'>최근 들어 신약들이 많이 나오며 아토피에 대응할 수 있는 수단이 많아지고 있는 추세입니다. 그럼에도 모든 환자분들이 곧바로 적용하기에는 아직은 이른 상황임이 아쉽습니다.<br />많은 관심도가 집중되는 만큼 아토피 환자들이 개선될 날이 빨리 오기를 기원합니다!</span>",
    createdAt: '2022-10-02',
    tagType: 'DRUG',
  },
  3: {
    title: '늘고 있는 미세먼지와 아토피',
    content:
      "<span class='content-text'>코로나가 발생하기 전부터, 이미 대한민국에서는 미세먼지가 많은 대기 환경으로 많은 사람들이 마스크에 익숙해져 있었습니다.</span><span class='content-text'>대기 중 미세먼지는 사람들의 호흡기와 피부에 악영향을 주기 때문에, 일반 사람들도 마스크를 쓰거나 외출 후 반드시 손을 씻는 등의 대응을 하고 있습니다.<br />최근에도 대한민국은 대기 중 미세먼지에 신경 쓸 수밖에 없는데 아토피 환우들에게는 어떠한 악영향을 주는지, 아토피 환우분들은 어떻게 대처해야 하는지에 대한 정보를 제공하고자 합니다.</span><div class='content-line'></div><header class='content-header'>😡 미세먼지가 미치는 악영향</header><span class='content-text'><a href='https://www.doctorsnews.co.kr/news/articleView.html?idxno=142163' target='_blank'>순천향 의대 측의 연구 결과</a>에 따르면 미세먼지와 초미세먼지가 증가할 때마다 아토피 환자들의 월 평균 병원 방문 횟수도 같이 증가하였다고 합니다.<br />이는 <a href='https://www.inews24.com/view/1389474' target='_blank'>한국표준과학연구원에서 개발한 신기술</a>로도 확인하였는데요, 대부분 각질이 손상된 아토피 환자들의 피부에는 미세먼지가 더 쉽게 침투해 염증이 악화되는 것이 드러났습니다.</span><span class='content-text'>게다가, 일반 환자들만이 아닌 임산부들의 경우에도 출산 전후 미세먼지에 노출된다면, 출산 후 아이가 생후 1년 사이 아토피를 갖게 될 확률이 타 임산부들보다 약 2배 높다는 연구 결과가 존재합니다.</span><div class='content-line'></div><header class='content-header'>❗️ 대처할 수 있는 방법</header><span class='content-text'>이러한 미세먼지에 대처할 수 있는 방법들로 <a href='https://www.jeonmae.co.kr/news/articleView.html?idxno=835440' target='_blank'>다음의 사례</a>들을 언급드릴 수 있겠는데요.</span><span class='content-text'><strong>1. 평소보다 많은 미세먼지의 대기에 외출했을 시, 빠르게 세면해주는 것</strong><br/><br/>손, 얼굴 뿐만 아니라 전신을 다 세면해주는 것도 좋으며 그 중 목욕은 세면 영역도 넓고, 피부의 이물질을 제거해 주어 피부를 건강하게 유지하는 데에 도움을 줍니다.<br />다만, 목욕을 할 경우 다음과 같은 사항들에 주의를 기울여야 할 것 같습니다.</span><ul class='content-list'><li class='content-listitem'>pH 4.5~ 5.5의 약산성 세정제 사용</li><li class='content-listitem'>지나치게 오랜 시간 동안의 목욕은 금물</li></ul><span class='content-text'>목욕과 관련한 정보에 대해 정리한 뉴스레터가 따로 있으니 <a href='https://www.weato.net/newsletter/1' target='_blank'>여기서</a> 목욕에 대해 좀 더 참고하시면 도움이 되겠습니다.</span><span class='content-text'><strong>2. 최소 하루 2회 이상 보습제 도포</strong><br/><br/>세면 시 뿐만 아니라, 세면이 안 되어 있는 상태에서도 보습제를 바르는 것은 도움이 된다고 합니다.<br />씻지 않은 상태에서의 보습제 도포가 세균의 증식을 유발한다는 증거가 없으므로 꼭 씻은 뒤가 아니더라도 자주 보습제를 발라주면 좋을 것 같습니다.<br />미국피부과의사회에 따르면 보습제의 주간 적정량 기준은 다음과 같습니다.</span><ul class='content-list'><li class='content-listitem'>소아 : 주당 100g 이상</li><li class='content-listitem'>성인 : 주당 250g 이상</li></ul><div class='content-line'></div><span class='content-text'>날마다 대기 내 미세먼지 농도를 확인하시면서 외출에 주의하시는 분들이 적지 않을 것으로 보입니다.</span><span class='content-text'>미세먼지 뿐만이 아니라 다른 상황들도 주의하셔야 하는 아토피 환우 분들이, 정보를 찾는 데에 들이시는 시간과 비용이 줄기를 바라며 오늘 하루도 힘내시기를 기원합니다!</span>",
    createdAt: '2022-10-02',
    tagType: 'ENVIRONMENT',
  },
  4: {
    title: '설거지를 하는데 갑자기 증상이?',
    content:
      "<span class='content-text'>손에 세정제와 물이 묻는 것으로부터 보호하기 위해, 고무장갑을 끼고 설거지를 하던 아토피 환자 A씨. A씨는 아토피 증상 방지를 위해 고무장갑을 끼고 설거지를 합니다.</span><span class='content-text'>그런데 설거지가 끝나고 손을 보니 아토피 증상이 발현된 걸 보고 놀랍니다.<br />이런 증상을 막으려고 고무장갑을 꼈는데 이게 어떻게 된 일일까요?</span><div class='content-line'></div><div class='content-header'>🧤 문제는 라텍스다</div><span class='content-text'>이런 상황에서 주로 원인은 <a href='https://health.chosun.com/site/data/html_dir/2022/02/16/2022021601704.html' target='_blank'>라텍스 알러지일 확률이 높다</a>고 합니다.</span><span class='content-text'>라텍스가 같이 포함된 고무장갑을 손에 끼고 설거지를 하다가, 라텍스가 피부에 닿으면서 아토피 현상이 발생한 것입니다. 원인은 원래부터 라텍스 알러지가 있어서였을 수도 있고 계속 고무장갑을 사용하다보니 라텍스 알러지가 생긴 걸 수도 있겠지만 결국은 고무 장갑의 라텍스가 원인인 거죠.</span><span class='content-text'>이 때는 당연히 라텍스 성분이 없는 고무 장갑을 피하는 것이 추천되나, 그 성분을 매 순간 확인하기는 어려울 때가 있죠… 설거지 할 때 고무장갑이 아닌 다른 걸 생각해본 적도 없고요. 그럴 때는 고무장갑을 끼기 전 면장갑을 착용함으로써 라텍스가 피부에 닿는 것을 방지하는 것이 좋다고 합니다.</span><span class='content-text'>그래도 설거지인데 너무 과한 우려가 아닌가 생각할 수도 있겠지만, 비염과 천식 증상도 같이 생길 수 있고 심할 경우 아나필락시스로 인해 더 큰 위험을 겪을 수도 있으니 주의해야겠습니다.</span><div class='content-line'></div><span class='content-text'>매 순간, 매 영역에서 신경써야 하는 순간들이 많아 힘들지만 꾸준하게 관리한다면 모든 환자분들이 아토피로부터 해방되는 날이 반드시 올 순간이 올 거라 믿습니다.</span>",
    createdAt: '2022-10-02',
    tagType: 'OTHERWISE',
  },
  5: {
    title: '장에 좋다는 유익균, 아토피에도 도움을?',
    content:
      "<span class='content-text'>프로바이오틱스라는 단어 많이 들어보셨나요? 생각보다 많은 분들이 이 단어를 들어보셨을 겁니다. 프로바이오틱스는 <a href='https://scienceon.kisti.re.kr/srch/selectPORSrchArticle.do?cn=JAKO201123736029113&dbt=NART' target='_blank'>장에 있는 유해 세균들을 죽이지 않고 억제하여, 공생하게 하는 미생물</a>입니다!주로 유산균이 이에 해당하죠.</span><span class='content-text'>근데, 이 프로바이오틱이 아토피하고 무슨 상관이 있냐고요?<br />지금 좀 더 이야기해보겠습니다.</span><div class='content-header'>✔️️ 장내 프로바이오틱이 주는 영향</div><span class='content-text'><a href='https://www.tandfonline.com/doi/abs/10.1080/09546634.2022.2091101?journalCode=ijdt20' target='_blank'>중국 창사대학 의대 출신 전문가가 주도한 메타분석 연구</a>에 따르면, 아토피를 가진 성인들을 대상으로 한 연구에서 프로바이오틱 보충을 통해 증상의 정도와 삶의 질이 개선되었다는 결과가 나왔다고 합니다.</span><span class='content-text'>2011년부터 2021년까지, 402명의 성인아토피 환자 중에서 프로바이오틱을 통한 치료나 관리를 받았던 208명을 대상으로 분석이 진행되었던 연구입니다. 그 중에서 상대적으로 효과가 높은 건 LS01과 BR03이라는 프로바이오틱을 서로 같이 적용했을 때로 분석되었습니다.</span><span class='content-text'>또한 <a href='https://www.donga.com/news/It/article/all/20210831/109019074/1' target='_blank'>국내 가천대 의대 출신 전문가</a>에 의하면 이러한 프로바이오틱 중 젖산균이 아토피 피부질환에도 효과적이라는 언급을 하기도 하였습니다.</span><div class='content-line'></div><div class='content-header'>🤔 먹는 영역을 넘어선 프로바이오틱스</div><span class='content-text'>이러한 프로바이오틱이 먹는 것 뿐만 아니라 바르는 것으로도 도움이 될 수 있다고 합니다!</span><span class='content-text'><a href='https://health.chosun.com/site/data/html_dir/2021/04/23/2021042300884.html' target='_blank'>미국 UC, San Diego 의대 출신 전문가의 연구</a>에 의하면 실험 참가자 중 3분의 2 이상이 1주동안 하루마다 2번씩 프로바이오틱이 들어있는 약을 피부에 발랐으며, 그 결과 실제로 피부 염증이 감소한 것으로 나타났다고 합니다.</span><span class='content-text'>부작용도 적어 새로운 치료제의 가능성이 보이기도 하는데요, 다만 아직 좀 더 연구가 필요해 실제 환자들이 사용하기까지에는 상대적으로 시간이 더 소요될 것 같습니다.</span><span class='content-text'>이러한 프로바이오틱의 이용은 사람들의 면역을 증진시킴으로써 아토피에 도움을 주는 것이 기본 원리인데요, 모든 사람들에게 프로바이오틱 이용이 유효하지는 않은 것 같습니다.</span><span class='content-text'><a href='https://health.chosun.com/site/data/html_dir/2018/09/14/2018091400039.html' target='_blank'>분당 서울대병원 측 소화기 내과 교수님</a>에 따르면 면역 억제제를 복용하여 면역력이 떨어져 있는 사람한테 균혈증, 패혈증 등의 부작용이 발생한 사례들이 있다고 합니다. 면역 억제제를 사용하는 일부 아토피 환우분들은 주의하셔야 할 것으로 보이네요.</span><div class='content-line'></div><span class='content-text'>또한, 이 외에도 크론병, 장누수증후군 환자, 과민성장증후군, 항생제 복용자 등의 사람들에게는 위험할 수 있다고 하니 내가 적용해도 괜찮은 관리법인지를 전문가와 이야기해보고 진행하는 것이 좋을 것으로 보입니다.</span>",
    createdAt: '2022-10-02',
    tagType: 'FOOD',
  },
  6: {
    title: '일부 환자들에게 보험 적용되기 시작한 JAK억제제들',
    content:
      "<span class='content-text'>WEATO가 발행했던 <a href='https://www.weato.net/newsletter/2' target='_blank'>JAK 억제제 관련 뉴스레터</a> 혹시 기억하시나요? 아토피 환자분들에게 새로운 치료제가 생길 수 있다는 내용의 글이었는데, 잘 기억이 안 나신다면 바로 위의 링크를 클릭하셔서 확인하실 수 있습니다!</span><span class='content-text'>그 때 저희가 국내 보험 급여로 산재된 두 가지 먹는 형태의 JAK 억제제 올루미언트와 린버크에 대해서 말씀드렸었죠. 보험 급여가 적용된지 벌써 몇개월이 지나고 있는 지금, 어떤 식으로 대한민국의 아토피 환자들이 사용하고 있는지에 대해 살펴보고자 합니다.</span><div class='content-line'></div><div class='content-header'>💊️ JAK 억제제, 실제로 어떻게 쓰이고 있나</div><span class='content-text'>보험 급여 산정 전까지는 린버크는 1정당 21,000원 상당의 가격을, 올루미언트는 1정당 20,600원 상당 가격이었지만, 산정 특례에 해당하는 환자들은 이 금액의 10%만 내면 되서 환자분들의 부담을 많이 줄였습니다!</span><span class='content-text'>최근 나온 신약 중 국내에서 사용이 가능한 약품은 생물학적 억제제인 듀피젠트 이후 이 두 약품들 뿐인데요, 급여산정이 되었지만 아직 현 약품들의 체제에 대한 아쉬운 목소리가 들리고 있습니다.</span><span class='content-text'>면역 억제제이므로 급여 기준을 주의하는 것은 맞으나, 이러한 기준이 신약들로의 접근이 어렵다는 이야기와 <a href='https://www.pharmnews.com/news/articleView.html?idxno=204935' target='_blank'>‘교차투여’에 대한 이야기</a>가 그러한 사례들인데요. 특히 교차 투여는 앞서 말한 두 의약품에, 듀피젠트까지 세 의약품 중 1개 제품이라도 이용을 시작했을 경우, 다른 의약품 이용에 대한 급여는 적용하지 않는 게 이슈가 되고 있는데요. 해당 약품이 맞지 않아 다른 약품을 사용하려고 할 때 급여기준을 적용하지 않는 기준이 장벽이 되고 있습니다.</span><span class='content-text'>이에 대해 아토피 환우회에서도 사람마다 약의 효과가 다를 수 있는데 이러한 급여 기준은 개별 차이를 고려하지 않았다고 언급했습니다.</span><div class='content-line'></div><div class='content-header'>🤔 그렇다면 해외는 어떻게 약이 적용되는데?</div><span class='content-text'>미국에 대해 이야기해볼까요? 그 전에 미국의 의료 체계는 대한민국과 굉장히 다르고 복잡하기 때문에, 최대한 간소하게 말씀드리겠습니다! 그리고 이중에서도 현재 올루미언트는 미국에서 아토피를 대상으로 아직 허가가 안 되었기 때문에 린버크만 말씀드리겠습니다.</span><span class='content-text'>자본주의 대표국가답게 미국에서의 약가는 정부의 규제보다는 기업들에 의해 관리 되어 지는데요, 이 중 린버크는 <a href='https://www.rinvoq.com/resources/save-on-rinvoq-costs/rebate' target='_blank'>제조사 측에서 운영하는 환급 프로그램</a>을 신청했을 시, 처방전과 영수증을 모아서 기업 측에 제출할 시 최소 1달에 5달러로 구매할 수 있는 프로그램을 운영하고 있습니다.</span><span class='content-text'>그렇다면 미국에서는 다른 약과 같이 사용 가능하게 규제가 되어 있을까요? <a href='https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/211675s004lbl.pdf' target='_blank'>미국 FDA 측에서 린버크의 아토피 대상 허가 내역</a>에 따르면 미국 역시도 다른 JAK 억제제, 생물학적 면역조절제, 다른 면역 억제제와의 사용을 권장하고 있지 않습니다. 이 부분은 미국과 대한민국이 유사한 양상을 보이는데, JAK 억제제의 아토피 대상 승인이 1년도 안 넘은 상황에서 조심해야 될 사항이 많아서 그렇지 않을까 싶네요.</span><span class='content-text'>린버크가 승인된 유럽에서는 어떨까요? 역시 마찬가지로 <a href='https://www.ema.europa.eu/en/documents/product-information/rinvoq-epar-product-information_en.pdf' target='_blank'>린버크와 다른 면역억제제, JAK억제제, 항류마티스용 면역억제제와의 교차투여에 대해서는 권장하지 않는다</a>고 언급합니다. 다만, 유럽에서는 듀피젠트 복용에 대해서는 따로 언급이 되어 있지는 않습니다.</span><div class='content-line'></div><span class='content-text'>그렇다면 기존에 사용하던 약품들이 안 맞으면 급여 적용을 받을 수 있는 방법은 없는 걸까요?</span><span class='content-text'>건강보험심사평가원에서는 이러한 두 약품을 같이 적용하고 있는 사람들을 위해 10월 31일까지 다음과 같은 기준들을 세워 병용하는 사람들에게 급여 기준을 부여하고 있습니다!</span><ul class='content-list'><li class='content-listitem'>5월 22일 전까지 린버크, 올루미언트와 듀피젠트를 복용했던 환자는 최초 투약 시점 기준으로 현재 급여 기준 충족</li><li class='content-listitem'>위의 기준에 만족하지 않더라도,</li><ul class='content-list'><li class='content-listitem'>아토피 진단 이후 전신 면역억제제 투약 이력 확인</li><li class='content-listitem'>부작용 등의 사유로 전신 면역 억제제 사용은 아니지만 EASI 23, SCORAD 40, IGA4이상의 아토피 중증도 확인할 수 있는 지표 기록 존재할 경우</li></ul></ul><span class='content-text'>위의 두 경우에 해당하는 환자분들은 신청을 할 경우 급여 적용을 받을 수 있다고 하니 참고하시기 바랍니다!</span>",
    createdAt: '2022-10-02',
    tagType: 'DRUG',
  },
  7: {
    title: '플라스틱, 잘 신경 써서 아토피 예방을',
    content:
      "<span class='content-text'>아이가 태어나기를 기다리시는 임산부 분들. 아토피나 알러지를 앓으셨던 분들은 새로 태어날 아이는 건강하기를 간절히 소망하십니다. 그런데 임신 중에 아이의 아토피와 알러지에 미치는 요소는 유전만 있는 게 아니라는 거 알고 계신가요? 플라스틱에서 나오는 ‘프탈레이트’라는 환경호르몬이 배 속에 있는 아이들에게 아토피를 일으킬 수도 있다고 합니다. 다음 단락에서 더 설명드리도록 할게요.</span><div class='content-line'></div><div class='content-header'>어떻게 영향을 주는데?</div><span class='content-text'><strong>‘프탈레이트’</strong>는 화장품, 식품의 포장, 의료기기, 장난감과 같은 상품들에서 주로 발생한다고 해요.</span><span class='content-text'>삼성서울병원과 건국대병원, 고신대병원 측 전문가들의 연구에 따르면 정확히는 그 중에서도 <a href='https://www.hankookilbo.com/News/Read/A2021122008550004757' target='_blank'>‘모노벤질프탈레이트’라는 성분이 임산부와 함께하고 있는 아이에게 아토피를 발생시킬 확률이 16% 높인다</a>고 합니다.</span><div class='content-line'></div><div class='content-header'>어떻게 막을 수 있는데?</div><span class='content-text'>식약처에서 발행한 <a href='https://www.mfds.go.kr/brd/m_227/view.do?seq=33285' target='_blank'>‘유해물질 간편 정보지’</a>에 따르면 프탈레이트 노출을 피하려면 자주 물을 마시고, 뜨거운 음식이나 음료를 담을 때 유리, 도자기, 스테인리스로 된 용기와 컵을 사용하기를 권장하고 있습니다. 어쩔 수 없이 플라스틱을 사용한다고 하여도 내열 온도가 높은 제품을 사용하는 걸 추천하고 있습니다.</span><span class='content-text'>또한 세정제의 경우에도 화학제품보다 천연 제품 중심을 사용하고, 청소와 환기를 자주하여 혹시 남아있을 프탈레이트를 청소하는 것도 좋다고 합니다.</span><div class='content-line'></div><span class='content-text'>다가올 출산일에 가뜩이나 신경 쓸 일이 가득한데, 더 신경써야 할 일이 많아지는 느낌이네요. 그래도 저희의 정보를 통해 곧 만나실 자녀분과 함께 건강한 삶을 살 수 있기를 기원합니다.</span>",
    createdAt: '2022-10-09',
    tagType: 'ENVIRONMENT',
  },
  8: {
    title: '잘 때 쓰는 침대 시트는 어떤 게 좋지?',
    content:
      "<span class='content-text'>침대 시트를 구매할 때 인테리어와 맞는지, 부드러운지, 어떤 소재가 사용되었는지를 확인하고 구매하죠. 아토피 환우분들은 여기서 침대시트에 사용된 소재가 자신에게 맞는지 안 맞는지 역시 확인해야하는 몇몇 번거로운 과정을 더 거쳐야 하죠. 이러한 침구류를 알아보실 때 도움이 될 수 있는 정보를 작성해 보려고 합니다.</span><div class='content-line'></div><div class='content-header'>침구류는 어떤 걸 구매해야 할까?</div><span class='content-text'>미국 아이비리그인 <a href='https://www.everydayhealth.com/eczema/eczema-proof-your-house-a-room-by-room-guide/' target='_blank'>코넬 의대 Weill Cornell Medical School 출신 피부과 전문가</a>는 “아토피 환자들은 물과 같은 기본적인 일상 생활들에도 영향받기 쉽다”고 언급하며 가정 내 그중에서도 침실에 대해서는 다음과 같은 주의를 기울여야 한다고 말했습니다.</span><ul class='content-list'><li class='content-listitem'>매트리스를 방진 커버로 덮을 것</li><li class='content-listitem'>주기적으로 뜨거운 물로 침대 시트 세탁할 것</li><li class='content-listitem'>강한 염료나 향을 가진 침구류는 기피를 권장</li><li class='content-listitem'>울과 합성섬유와 같은 소재의 침구류는 기피할 것을 권장</li></li></ul><div class='content-line'></div><div class='content-header'>우리나라에서 안심하고 살 수 있는 침구류는?</div><span class='content-text'>이러한 기준들을 충족하는 제품을 번거롭게 자세히 찾아 봐야 할까요? 이러한 과정을 좀 더 편하게 할 수 있는 정보가 있습니다. 국내에 나오는 침구류들에게 주어지는 여러 인증 마크들 중에서도 <a href='https://www.mk.co.kr/news/business/view/2022/01/25455/' target='_blank'>1% 미만의 제품들만이 ‘대한아토피협회 추천 제품’ 인증 마크를 받는다</a>고 합니다.</span><span class='content-text'>이 인증 마크는 민감성 피부, 아토피를 가진 사람들도 안심하고 사용할 수 있음을 인증받았다는 증표라고 합니다. 최근에는 퀵슬립이라는 브랜드가 해당 인증마크를 받은 제품의 대표 사례라고 할 수 있겠습니다. 침구류를 구매할 시 해당 인증 마크를 받은 제품인지를 확인하면서 구매한다면 수면 영역에서 아토피를 관리하는 데에 도움이 될 것 같습니다.</span>",
    createdAt: '2022-10-09',
    tagType: 'SLEEP',
  },
  9: {
    title: '쓸 수 있는 클렌저는 어떤 것들이?',
    content:
      "<span class='content-text'>많은 아토피 환우분들께서 잘 알고 계시겠지만 피부에 대한 세면을 잘 관리하는 것이 아토피 증상과 관리에 주는 영향은 매우 큽니다. 씻는 시간부터 온도와 세정제까지… 신경 써야 할 영역이 너무 많죠.</span><span class='content-text'>오늘은 이 중에서 세정제에 대해 살펴볼까 합니다. <a href='https://www.everydayhealth.com/eczema/best-soap-for-eczema-atopic-dermatitis/' target='_blank'>뉴욕 Mount Sinai 병원의 피부과 전문 교수</a>는 <strong>“맞지 않는 세정제품을 사용함으로 인해 발생하는 해로움이 크다”</strong>고 하므로 알맞은 세정제를 서택해서 사용하는 것이 중요하다고 하는데요, 좀 더 살펴보도록 하겠습니다.</span><div class='content-line'></div><div class='content-header'>🧼 피부 관리할 때 비누를 사용?</div><span class='content-text'>요즘은 피부 관리할 때 많은 분들이 전용 세정제를 사용하시겠지만, 혹시 아직 비누를 사용하고 계시는 분들이 있다면 주의하셔야 할 것 같습니다. 2021년 미국 5000개 병원 중 14위로 선정된 <a href='https://www.everydayhealth.com/eczema/best-soap-for-eczema-atopic-dermatitis/' target='_blank'>뉴욕 마운트 시나이 병원의 전문가</a>에 따르면 <strong>“기존의 비누들은 대체로 피부 보습에 영향을 주는 유분까지 제거하게 되어 오히려 아토피 발진에 악영향을 줄 수 있어 아토피 환자들에게는 적합하지 않다”</strong>고 합니다.</span><span class='content-text'>일반 표피층이 가지는 pH(4~5)와 염기성인 기존 비누들의 pH(9~10)간 차이도 크고요.<br />미국 알러지, 천식, 면역 학회(AAAAI)에 의하면 그 중에서도 로릴 황산 나트륨이 포함된 비누는 아토피 환자들에게 해로운 물질을 만들어낼 수 있다고도 하니 비누를 사용하기는 쉽지 않아 보입니다.</span><div class='content-line'></div><div class='content-header'>나에게 알맞은 세정제?</div><span class='content-text'>사람마다 그 증상과 정도가 다르듯이, 세정제 역시도 사람마다 다르기 때문에 주의해야 하는데요. 앞서 말한 전문가가 언급한, 알맞은 세정제를 찾기 위한 시작점들에 대해 말씀 드리겠습니다.</span><span class='content-text'><strong>1. 폼 클렌징 사용을 주의할 것</strong></span><span class='content-text'>일반적으로 사용 시 거품을 만들어 내는 세정제는 보다 건조하게 하는 경향이 있으므로 아토피 환자들이 사용하기에는 주의할 것을 권장합니다.</span><span class='content-text'><strong>2. 향수에 사용되는 물질을 주의할 것</strong></span><span class='content-text'>일반적으로 세정제들에는 좋은 향을 위해 특정 물질들을 추가하는 경우가 많은데요, 아토피 환자들의 민감한 피부에는 이런 물질들이 영향을 줄 수 있기에 좋지 않은 영향을 주는 물질이라고 생각된다면 주의할 것을 권장합니다. 특히 그 중에서도, 미국의 국가 아토피 연합회에 의하면 <a href='https://www.everydayhealth.com/eczema/best-soap-for-eczema-atopic-dermatitis/' target='_blank'>다음과 같은 물질을 함유한 세정제들</a>이 아토피에 좋지 않은 영향을 주었다고 하니 참고하시기 바랍니다.</span><ul class='content-list'><li class='content-listitem'>티트리오일, 우레아(요소), 레티노이드, 라놀린, 계면활성제(코카미도프로필베타인), 에탄올, 프로필렌 글리콜</li></ul><div class='content-line'></div><span class='content-text'>아토피라는 질환이 가장 어려운 점은 사람들마다 모두 다 다른 양상을 지녔다는 점인데요. 오늘 읽으시는 이 정보가 환우 개개인 분에게 알맞은 개선법을 찾을 수 있는 시작점이 되기를 기원합니다!</span>",
    createdAt: '2022-10-09',
    tagType: 'CLEANING',
  },
  10: {
    title: '환경_내가 지금 쓰는 헤어 제품, 이런 성분들 있나?',
    content:
      "<span class='content-text'>친구들과의 약속, 중요한 사적인 만남을 나가기 전 화장을 신경 써서 하시거나, 평소와는 다른 느낌으로 바꾸기 위해 머리에 염색을 하는 등의 새로운 시도를 하는 경우가 종종 있죠.</span><span class='content-text'>그런데 이럴 때 사용하는 화장품이나 헤어 제품에서 다음과 같은 2가지 물질들이 있는지 한 번 확인해보시는 게 좋을 듯 합니다.</span><span class='content-text'>일상에서 사용하는 제품의 성분에서 주의해야 할 2가지 성분에 대해 설명하겠습니다!</span><div class='content-line'></div><div class='content-header'>💄 화장품, 파라벤 방부제가 얼마나 들었지?</div><span class='content-text'>국내 순천향대 피부과와 미국 존스홉킨스 의대 피부과에서 <a href='https://www.hankookilbo.com/News/Read/A2021052910310002704' target='_blank'>5가지 화학 물질과 피부 건강과의 상관관계에 대한 공동연구</a>를 진행했습니다.</span><span class='content-text'>그 중 주요한 결과들은 다음과 같이 정리할 수 있는데요.</span><ul class='content-list'><li class='content-listitem'>화장품과 헤어 제품, 음식물 방부제에 많이 들어있는 <u>‘메틸파라벤’의 체내 농도가 높을수록 간지러움증과 아토피성 습진 발생률 증가</u></li><li class='content-listitem'>주로 선크림의 성분인 벤조페논-3의 체내 농도는 <u>아토피성 습진 발생률과 무관</u></li><li class='content-listitem'>치약과 손세정제에 주로 사용되는 항균 물질인 <u>트리클로산은 체내 농도가 높을수록 아토피성 습진 발생률 감소</u></li></ul><span class='content-text'>이러한 결과를 바탕으로 주요 연구자인 김수영 교수에 따르면 ‘구강 청결과 손 위생은 아토피 피부염의 악화를 방지해주며, 일상 제품들에 들어가는 방부제 성분은 가려움증과 아토피성 습진에 악영향을 주므로 주의가 필요’ 하다고 하니 성분에 주의하시는 게 좋을 것 같습니다.</span><div class='content-line'></div><div class='content-header'>💇‍♀ 내가 쓰는 머리 제품에 있는 p-페닐렌디아민?</div><span class='content-text'>한 가지 성분에 대해서 더 말씀드리면서 글을 끝내고자 합니다!</span><span class='content-text'><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4513401' target='_blank'>인도 국립 의대 중 1곳인 Dr.Rajendra Prasad Government Medical College측의 연구</a>에 따르면 헤어 염색에 사용되는 성분인 p-페닐렌디아민은 아토피성 피부염을 유발할 수 있는 원인 중 하나라고 합니다.</span><span class='content-text'>54명을 대상으로 해당 성분이 있는 염색 물질을 통해 연구를 진행했으며 그 중 <u>49명은 두피와 관련된 피부염</u>을, <u>23명은 얼굴과 목에 접촉성 피부염</u>이 발생한 것을 확인했습니다.</span><span class='content-text'>이렇듯 해당 성분이 들어간 염색 제품은 피부염을 발생시키기 쉬운 상황이며, 가뜩이나 더 피부가 예민한 아토피 환자들은 해당 제품들이 발생시킬 수 있는 피부 장벽 손상으로 증상 악화로 이어질 수 있다고 경고합니다. 그렇기에 염색을 하시기 전, 해당 성분이 들어간 염색 제품인지 확인하는 것이 좋을 것이라고 연구자들은 권장합니다.</span><span class='content-text'>미용실에서 염색을 할 때 해당 성분 이름이 들어간 제품은 주의하면서 염색을 하시는 것이 좋을 것 같네요.</span>",
    createdAt: '2022-10-09',
    tagType: 'ENVIRONMENT',
  },
  11: {
    title: '약품_듀피젠트 해외에서는 어떻게 관리할까',
    content:
      "<span class='content-text'>지난 번 <a href='https://www.weato.net/newsletter/25' target='_blank'>듀피젠트가 어떤 약품인지, 국내에서는 어떻게 다뤄지는지에 대한 뉴스레터</a>에 대해 기억하시나요?</span><span class='content-text'>이번에는 해외에서 듀피젠트가 어떤 가격과 방식으로 판매되는지에 대해서 더 알아보고자 합니다!</span><div class='content-line'></div><div class='content-header'>🇺🇸 미국에서의 승인과 가격 현황</div><span class='content-text'>앞선 기사에서 듀피젠트의 가격이 비교적 높은 편이라고 말씀드렸었죠. 그렇다면 미국에서는 어느 정도의 가격인지, 보험 기준은 어떻게 되는지에 대해 살펴보고자 합니다!</span><span class='content-text'>듀피젠트는 <a href='https://www.drugs.com/history/dupixent.html' target='_blank'>미국 FDA에서 2017년 3월 28일부터 아토피 환자를 대상으로 처방이 승인</a>되었습니다.</span><span class='content-text'>미국에서 듀피젠트 주사형태 제품이 2개 들어가 있는 1 박스 단위로 살펴보면, 원가는 <a href='https://www.dupixent.com/support-savings/cost-insurance' target='_blank'>박스당 3300달러</a>, 한화로 <strong>약 476만 원</strong>, <strong>주사 한 번 당 230만 원의 가격</strong>인 셈인데요… 당연히 원가로 사지는 않고 보험에서 공제해주는 가격에 해당 약품을 사용하게 됩니다.<br />참고로 듀피젠트는 1달에 2주를 주기로 총 2번 정도의 투약이 이뤄집니다.</span><span class='content-text'>미국의 건강 보험은 한국과는 다르게 매우 복잡한 체제를 갖고 있고, <a href='https://www.hhs.gov/answers/medicare-and-medicaid/what-is-the-difference-between-medicare-medicaid/index.html' target='_blank'>놀랍게도 65세 이상과 저소득층, 정부에서 정하는 특정 질환자가 아닌 사람들을 위한 공공보험은 없는 상황</a>입니다…</span><span class='content-text'>그래서 미국 일반 사보험에 들었을 때를 기준으로 평균 가격을 살펴보면, 보험 기준에 따라 다르겠지만 <strong>사보험자 중 60%가 보험을 통해 월마다 14만원 미만의 비용</strong>을, <strong>40%는 14만원 이상의 비용</strong>을 지불한다고 합니다.</span><span class='content-text'>1달에 2번의 주사를 맞는 걸 생각해보면 <strong>회당 7만원 내외</strong>의 가격 선에서 변동이 있는 편인건데, 우리나라의 회당 7만원 상당의 가격과 비슷한 수치네요..</span><span class='content-text'>이 중 14만원보다 적은 가격으로 약품을 이용하는 사람들의 기준을 국내에서 확인해 보다 적은 가격으로 환자 분들이 이용할 수 있는 순간이 왔으면 좋겠네요</span><div class='content-line'></div><div class='content-header'>📺️ 듀피젠트가 광고도 한다고?</div><span class='content-text'>듀피젠트는 생물학적 억제제로 투여받는 형태는 주사인데, 이러한 약품이 광고를 할 수 있다는 것에 의아해아시는 분들이 많을 것 같습니다.</span><span class='content-text'>미국의 경우, 우리나라와는 다르게 의약품들이 광고도 가능하기에 일어난 현상인데 간단하게 그 <a href='https://www.ispot.tv/ad/ZQaG/dupixent-roll-up-your-sleeves-rachel-debbie-and-max' target='_blank'>광고 영상</a>을 한 번 보고 오시죠.</span><span class='content-text'>이러한 광고에 대해 <a href='https://www.health.harvard.edu/blog/harvard-health-ad-watch-a-new-injection-treatment-for-eczema-202209272824' target='_blank'>하버드 대 의대 졸업 이후 학부 조교수로 재직 중인 Robert H.Shmerling</a>은 다음과 같은 의견들을 언급했습니다.</span><ul class='content-list'><li class='content-listitem'>아토피 피부질환에서 중요한 원인 요소 중 하나인 IL-4라는 요인을 막아주는 최초의 생물학적 약품임은 맞음</li><li class='content-listitem'>연고나 보습제, 크림, 젤 등의 일상 제품들로 인한 치료가 안 되는 증상이 심한 환자들이 고려해야 할 것</li><li class='content-listitem'>생물학적 억제제로 비용이 많이 소요되는 것을 고려할 것</li><li class='content-listitem'>광고보다는 FDA, NIH 등에서 언급하는 정보를 기준으로 판단할 것</li></ul><span class='content-text'>이러한 점들을 언급하며 광고를 과신하지 말 것을 언급했는데요, 미국에서도 마찬가지로 이러한 약품들에 대해서 사전에 충분한 정보를 숙지하고 판단할 것을 이야기하는 것을 보면 이러한 정보들이 아토피 환우분들에게 잘 전달되어야 하는 게 중요하다는 생각이 드네요.</span>",
    createdAt: '2022-10-09',
    tagType: 'DRUG',
  },
  12: {
    title: '기타_광선 치료도 받는 아토피, 그 효과는?',
    content:
      "<span class='content-text'>연고부터 주사, 식이요법, 한의학까지 그 치료법의 범위가 다양한 아토피.<br />그 치료법들 중에서 <u>광선치료</u>도 있다는 것 알고 계셨나요?</span><span class='content-text'>그런데 약과 주사는 앞서서 뉴스레터 뿐만 아니라 의학적인 근거가 있는데… 정말로 아토피 환자들한테 도움을 줄 수 있을까요?</span><span class='content-text'>광선치료가 아토피에 어떻게 영향을 줄 수 있는지 알아보겠습니다.</span><div class='content-line'></div><div class='content-header'>🟪 자외선으로 아토피를 치료한다고?</div><span class='content-text'>레이저 치료의 원리에 대해서는 들어보셨나요?</span><span class='content-text'>레이저 치료는 레이저의 <u>일시적인 에너지</u>를 이용해 주로 얼굴에 발생하는 기미나 주근깨를 치료하는 데에 사용됩니다.</span><span class='content-text'>광선치료는 여기서 더 나아가 더 에너지가 강한 자외선을 이용해 기미나 주근깨보다 심한 건선, 아토피피부염, 백반증, 여드름 등의 피부질환에 적용되어 치료한다고 합니다!</span><span class='content-text'>구체적으로 도움이 되는 이유는 이러한 자외선 치료가 <u>아토피 피부염을 발생시키는 염증 세포의 기능을 억제시킬 수 있기 때문</u>이어서라고 합니다!</span><span class='content-text'><a href='https://www.k-health.com/news/articleView.html?idxno=60410' target='_blank'>매주 1~3회 정도 실시하며, 부작용도 낮고 피부암발생위험도 상대적으로 낮은 편으로 어린이와 고령층도 안전하게 받을 수 있는 치료 과정</a>이라고 합니다.</span><div class='content-line'></div><div class='content-header'>❓ 효과는 어느 정도나 있을까?</div><span class='content-text'>이스라엘 최고 수준의 대학 중 하나인 히브리 대학 의학대학 측의 연구 결과에 따르면 <a href='https://pubmed.ncbi.nlm.nih.gov/36052749' target='_blank'>자외선 중에서도 A1 자외선이 피부 치료에 도움이 되었다는 결과</a>가 나왔다고 합니다.</span><span class='content-text'>자외선 광선 치료와 피부 질환 간의 상관 관계를 위한 전체 피부 질환 환자 335명 중 아토피 환자가 163명이 포함된 연구에 의하면, 중간 정도 이상의 치료를 8일 이상 적용 받았을 때 다양한 피부 조건에도 효과적인 치료 결과를 보여주었다고 합니다.</span><span class='content-text'>그러나 해당치료는 주로 <u>가벼운 증상의 아토피 환자들</u>에게 사용되는 방법이며, 자외선으로 치료를 받는 상황이라 <u>일상 속 자외선을 주의</u>해야하는 사항들도 있으니 전문가와 충분한 상담 이후 진행하시는 게 좋을 것 같습니다.</span><span class='content-text'>또한, <u>치료의 효과가 나타날 때까지 걸리는 시간이 긴 편</u>이며 처음 치료할 때는 <u>일광화상과 같은 증상</u>이 나타날 수도 있으니 이런 부분을 주의해야 할 것 같네요!</span>",
    createdAt: '2022-10-09',
    tagType: 'OTHERWISE',
  },
  13: {
    title: '셀러리 주스에 대해 들어보신 적 있나요?',
    content:
      "<span class='content-text'>한 때, 디톡스와 야채 주스와 관련된 유행이 있었던 것 기억하시나요?<br />유행과 함께 많은 분들이 건강을 관리하기 위해 더욱 더 많은 연관 식품을 섭취해 체내에 있는 독소를 제거하려고 하셨죠.</span><span class='content-text'>하지만 체내에 있는 독소가 제거되면 건강에 좋으나 많은 인터넷에 게시된 <a href='https://www.hidoc.co.kr/healthstory/news/C0000600608' target='_blank'>‘디톡스 다이어트’가 과학적으로 효과가 있는지에 대해서는 근거가 없는 상황</a>입니다.</span><span class='content-text'>이번엔 이처럼 음식과 관련해 한 번은 생각해보면 좋을 내용에 대해 다루고자 합니다.<br />‘셀러리 주스’와 아토피 간의 영향력에 대한 이야기를 써 보려고 합니다.</span><div class='content-line'></div><div class='content-header'>🥬 일단 그래도 야채면 좋지 않을까?</div><img class='content-img' src='https://user-images.githubusercontent.com/6462456/196865140-576ff3ab-ba42-437e-994b-f17a68945e1b.png' /><span class='content-text'>미국의 Anthony William이라는 사람에 대해 알고 계시나요?<br />그 사람의 말에 따르면 셀러리주스를 매일 16온스씩 마시는 것은 여드름, 건선, 그리고 여러 피부염에 좋다고 주장합니다.</span><span class='content-text'>그러면 셀러리주스를 지금 사서 아토피를 관리해야 할까요?</span><span class='content-text'>셀러리주스 자체는 사실 건강에 좋습니다. 야채와 채소에 들어있는 성분들의 대부분이 건강에 도움된다는 건 누구나 알고 있을겁니다.</span><span class='content-text'>셀러리주스가 <a href='https://www.webmd.com/diet/health-benefits-celery-juice' target='_blank'>다음과 같은 성분들</a>을 갖고 있다고 하는데요.</span><ul class='content-list'><li class='content-listitem'>비타민 A, C, K</li><li class='content-listitem'>칼슘, 마그네슘 등의 무기물</li><li class='content-listitem'>항산화제</li></ul><span class='content-text'>결론적으로 말하면 <strong>셀러리주스만으로 아토피를 관리하면 좋아진다는 말은 근거가 없습니다</strong>.</span><div class='content-line'></div><div class='content-header'>🤔 셀러리는 건강에 좋지만 아토피에 효능을?</div><span class='content-text'>만약 셀러리주스를 먹는 것만으로 아토피가 좋아진다고 한다면 믿지 않는 게 좋을 것 같습니다.</span><span class='content-text'>당연히 셀러리 자체에는 건강에 도움을 주는 좋은 성분들이 많습니다.<br />그러나 셀러리 주스가 아토피에 효능을 준다는 부분은 좀 더 살펴봐야 하는데요.</span><span class='content-text'>먼저, <a href='https://www.goodrx.com/well-being/diet-nutrition/benefits-celery-juice' target='_blank'>University of Pennsylvania 의학 박사인 Katie E. Golden이 검수를 진행한 내용</a>에 따르면 셀러리에 있는 항산화 작용은 동물의 염증 작용을 줄여주는 것은 확인되었으나 사람한테도 적용되는지에 대해서는 아직 과학적으로 근거가 밝혀진 내용이 없습니다.</span><span class='content-text'>다음으로, Anthony William이라는 사람은 의학이나 식품 관련 전문가가 아닙니다. 본인이 영혼과 접촉하는 의료 영매라고 주장하는 사람의 주장을 기반으로 한 사람으로, 기네스 펠트로, 로버트 다우니 주니어 같은 유명인들이 따른다고는 하나 과학적인 근거가 없습니다.</span><span class='content-text'>그렇기에 건강 개선 차원에서, 식단 조절 차원에서가 아닌 아토피 관리만을 위해서라면 그 효능은 과학적으로 근거가 없기에 이 부분을 주의하셔야겠습니다.</span><span class='content-text'>혹여나 이를 상업적으로 이용하는 사람들이 나온다면, 글을 읽으신 이용자 분들은 현명한 판단으로 올바른 소비와 습관으로 더 나은 아토피 관리를 할 수 있기를 기원합니다.</span>",
    createdAt: '2022-10-16',
    tagType: 'FOOD',
  },
  14: {
    title: 'P&G 사에서 투자한 아토피 크림',
    content: `<span class='content-text'>이번 세면 뉴스레터에서는 특별하게 제품에 대해 소개하는 내용으로 진행해보고자 합니다.</span><span class='content-text'>지난 번 중간 피드백 때 <strong>제품에 대한 구체적인 정보</strong>가 있으면 좋을 것 같다는 응답을 확인해 읽으시는 분들에게 도움 될 수 있는 제품 정보를 제공하고자 작성하는 것이므로, 읽으시고 느낀 점을 다시 여쭤본 뒤 <strong>이용자 분들에게 도움되는 쪽으로 제작할 예정</strong>이니 참고 바랍니다!</span><span class='content-text'>P&G라는 회사에 대해서 다들 알고 계신가요?<br />미국의 유명한 세면, 일상용품 기업이죠.<br /></span><span class='content-text'>이 기업에서 투자한 <a href='https://practicaldermatology.com/news/pg-ventures-reintroduces-bodewell-line-for-eczema-and-psoriasis' target='_blank'>Bodewell이라는 스타트업</a>의 <strong>Eczema Daily Calming Cream</strong>이라는 이름의 아토피 진정 크림에 대해서 설명해보려 합니다.</span><div class='content-line'></div><div class='content-header'>🔍 어떤 성분으로 만들어졌는지?</div><span class='content-text'>주요 성분들만 나열하면 다음과 같습니다. 구체적인 성분표는 <a href='https://bodewellskin.com/eczema-daily-calming-cream' target='_blank'>해당 제품의 홈페이지</a>에서 더 찾아보실 수 있으니 혹시 해당 성분중 알러지가 있으시다면 참고하시면 좋을 것 같습니다.</span><ul class='content-list'><li class='content-listitem'>귀리가루 1%</li><li class='content-listitem'>비타민 B3</li><li class='content-listitem'>비타민 E</li><li class='content-listitem'>코코넛 오일</li><li class='content-listitem'>보습 성분</li><li class='content-listitem'>그 외 수분, 은사시나무 껍질 추출, 마로니에 나무 씨앗 추출물 등 기타 성분들</li><li class='content-listitem'>스테로이드 성분 없음</li></ul><span class='content-text'>해당 크림은 증상이 발생할 때마다 혹은 하루에 2번 이상 바르는 것을 권장하고 있습니다.</span><div class='content-line'></div><div class='content-header'>🔬 실제 효능?</div><span class='content-text'>실제로 <a href='https://practicaldermatology.com/news/pg-ventures-reintroduces-bodewell-line-for-eczema-and-psoriasis' target='_blank'>4주간의 이용자 기록</a>을 확인해보니</span><ul class='content-list'><li class='content-listitem'>이용자 중 90%가 피부가 건강해졌다고 응답</li><li class='content-listitem'>이용자 중 80%가 피부 트러블이 발생하는 날이 감소했다고 응답</li></ul><span class='content-text'>또한 해당 테스트를 했던 이용자 분들의 의견을 가져오면</span><ul class='content-list'><li class='content-listitem'>"1년에 6~8번 정도의 발진을 경험하였으나, 해당 제품을 8주간 사용하며 증상 발진이 거의 사라졌다."</li><li class='content-listitem'>"사용 전에는 매일, 매순간 가려움증을 경험하였으나 해당 제품 사용 후 그 빈도가 적어져 가끔 느끼는 정도로 되었다. 향이 없어 부담없이 사용하였다."</li></ul><span class='content-text'>와 같은 의견들이 있었습니다.</span><div class='content-line'></div><div class='content-header'>💲 그러면 가격은?</div><span class='content-text'>미국 홈페이지에서는 <strong>1개당 $30달러</strong>로 한화 기준 약 <strong>개당 43,000원</strong>의 가격으로 제공하고 있습니다.</span><span class='content-text'>제품 홈페이지에서는 해당 제품에 대해 부담을 느낄 경우, <strong>60일간의 사용기간 동안 증상 개선이 없으면 환불 조치</strong>를 해준다고 하는데 <strong>국내</strong>에서는 어떨지는 더 알아봐야겠습니다.</span><span class='content-text'>이번 뉴스레터는 여러 제품 중 일부 로션, 크림 제품을 소개하는 첫 번째 뉴스레터였습니다!<br />추후 보다 도움될 수 있는 내용으로 여러분들에게 찾아가도록 하겠습니다.</span>`,
    createdAt: '2022-10-16',
    tagType: 'CLEANING',
  },
  15: {
    title: 'EASI 점수가 어떤 거죠?',
    content: `<span class='content-text'>이용자 분들께서는 저희 웹서비스 처음 가입하실 때 기억 나시나요?</span><span class='content-text'>그 때 저희가 증상의 정도를 1부터 4단계까지로 나눠서 여쭤봤었죠.<br />앞서 말한 간단한 증상 점수가 아닌 실제로 전문가분들이 증상의 정도를 측정하는 점수가 있다는 것 알고 계신가요?</span><span class='content-text'>EASI 점수라고 하는 아토피 증상을 나타내는 점수에 대해 소개합니다!</span><div class='content-line'></div><div class='content-header'>😗 EASI…점수가 뭐죠?</div><img class='content-img' src='https://user-images.githubusercontent.com/6462456/196870648-22e3aae9-7776-48c6-bda7-70451358cd8f.png' /><span class='content-text'>EASI 점수는 Eczema Area and Severity Index의 약자로, <strong>습진중증도평가지수</strong>입니다.<br />실제 아토피 증상이 생겼을 때 피부에 발생하는 증상의 붉기와 크기, 부위 등을 종합해서 내는 점수입니다!</span><span class='content-text'><a href='https://journals.lww.com/dermatitis/Fulltext/2022/05000/The_Eczema_Area_and_Severity_Index_A_Practical.4.aspx' target='_blank'>1998년 건선 환자들의 증상 측정을 위한 Psoriasis Area and Severity Index라는 건선 중증도 평가지수에서 아토피에 맞춰서 수정</a>해 임상을 거쳐가며 수정한 점수로 전문가 분들에 의해 6분 정도 안에 진행된다고 합니다.</span><span class='content-text'>우리나라의 기준에 맞춘 EASI 측정 현황에 따르면, 총 0점부터 72점까지 산출되며 국내에서는 <a href='http://www.bosa.co.kr/news/articleView.html?idxno=2133170' target='_blank'>16점 이상의 환자를 ‘중등도’ 아토피피부염, 23점 이상의 환자를 ‘중증’ 아토피피부염으로 분류</a>한다고 합니다.</span><div class='content-line'></div><div class='content-header'>➗ 이걸 측정하면 어디에 사용하나요?</div><span class='content-text'>저희 서비스를 지금까지 이용하신 분들이라면 알고 계시겠지만, 요즘 들어서 아토피 환자분들을 위한 신약들이 많이 나오고 있는 상황입니다. 읽지 못하신 분들은 <a href='https://www.weato.net/newsletter/14' target='_blank'>JAK 억제제</a>와 <a href='https://www.weato.net/newsletter/25' target='_blank'>듀피젠트</a>를 주제로 해 이전에 발행한 뉴스레터를 확인해주세요!</span><span class='content-text'>이러한 신약들이 최근 아토피 환자분들에게 어느 정도 효과가 있다는 결과가 나왔지만, 신약이므로 보험 급여 기준 설정이 다소 모호합니다.</span><span class='content-text'>바로 이 급여 기준 설정 중 하나가 ‘EASI’ 점수입니다. 신약의 보험 급여 기준 중 하나가 EASI 점수로 실제로 해당 급여 기준이 설정되었을 때 몰라서 당황한 환우분들이 적지 않으셨다고 합니다.<br />뿐만 아니라 전문가 분들의 연구와 증상 개선 정도 파악의 지표가 이 EASI 점수라고 하니 많은 곳에 사용되고 있네요.</span><span class='content-text'>중등도 이상의 환우분들에게는 이러한 정보를 점검하는 게 중요하니 병원 방문 시 본인의 EASI 점수를 확인하는 것도 좋을 것 같습니다.</span><span class='content-text'>이렇듯 아토피 환우분들의 관리에도 큰 영향을 주는만큼 추후 WEATO 내에서 환우 개인 분들의 EASI 점수를 측정할 수 있도록 하고자 계획 중에 있습니다.<br />본인의 아토피 질환의 상태를 확인하시며 구체적으로, 과학적으로 아토피를 관리하실 수 있기를 기원합니다!</span>`,
    createdAt: '2022-10-16',
    tagType: 'OTHERWISE',
  },
  16: {
    title: '“스테로이드제”에 대해서',
    content: `<span class='content-text'>이번 뉴스레터는 많은 아토피 환자분들이 사용하셨을 스테로이드제에 대해 다뤄보고자 합니다.<br />치료제로 많이 사용되기도 하면서도, 부작용으로 많은 우려가 있는 스테로이드제.<br />어떤 건지를 알아야 두려움도, 좋은 점도 명확히 인지할 수 있겠죠?</span><span class='content-text'>이번 뉴스레터는 스테로이드제에 대한 첫번째 이야기입니다.</span><div class='content-line'></div><div class='content-header'>💊 스테로이드제는 어떤 약인걸까?</div><span class='content-text'>먼저 <a href='http://www.health.kr/Menu.PharmReview/_uploadfiles/스테로이드제.pdf' target='_blank'>스테로이드제가 어떤 기능을 하는 약품</a>인지에 대해서 알아보겠습니다.</span><span class='content-text'>스테로이드는 우리 몸 안에서 합성되는 호르몬의 이름이고, 신체의 면역과 염증반응에 영향을 줍니다.<br />이러한 신체 반응들을 조절하면서 우리 몸의 면역체계를 관리하는 데 기여하죠.<br />스테로이드제는 이러한 면역과 관련된 부신피질호르몬과 성호르몬을 관리하는데 영향을 주지만, 주로 부신피질호르몬인 ‘코르티솔’의 기능을 하는 약품을 의미하기도 합니다.</span><span class='content-text'>스테로이드제가 부신피질호르몬제로서 역할을 할 때 영향을 주는 내용들은 다음과 같습니다.</span><ul class='content-list'><li class='content-listitem'>항염증 작용을 통한 염증 반응 약화</li><li class='content-listitem'>면역 반응을 억제</li></ul><div class='content-line'></div><div class='content-header'>❓ 아토피에 왜 스테로이드제를 사용하는 걸까?</div><span class='content-text'>많은 분들이 아시겠지만 아토피의 원인과 치료법들은 매우 다양한 상황입니다.<br />다만, 그 중에서도 최근 연구에서 피부 장벽에 큰 영향을 미치는 <strong>‘필라그린’</strong>이라는 유전자가 아토피와 밀접한 관계가 있다는 결과가 나왔습니다.</span><span class='content-text'>이러한 아토피 피부염이 발생할 경우, <a href='https://www.snubh.org/service/info/com/view.do?BNO=445&Board_ID=B004' target='_blank'>피부에서 발생하는 염증 물질들이 염증과 다른 장기에도 면역 반응을 일으킬 수 있습니다</a>.<br />그렇기에 이러한 작용을 방지하고자 스테로이드제가 아토피에 사용되고 있습니다.</span><span class='content-text'>실제로도 아토피 뿐만 아니라 류마티스 관절염, 알레르기성 질환와 같은 면역과 염증성 질환에 사용되고 있습니다.<br />이러한 효능과 목적으로 처방받는 스테로이드제. 많은 분들이 우려하시는 부작용은 어떨까요?</span><span class='content-text'>다음 스테로이드제 관련 뉴스레터에서는 그 부작용과 실제 사용 사례에 대해서 더 알아보도록 하겠습니다.</span>`,
    createdAt: '2022-10-16',
    tagType: 'DRUG',
  },
  17: {
    title: '주위 환경이 변하는 환절기, 습도는 어떻게 확인하고 계신가요?',
    content: `<span class='content-text'>나무들에 단풍이 들면서 온도가 떨어지고, 일교차와 낮밤의 시간이 바뀌는 가을.</span><span class='content-text'>아토피 환자분들은 달라진 대기를 준비하기 위해 보습제 등을 통해 피부의 습도를 관리해 외부 환경으로부터의 관리를 준비하고 계실 텐데요.<br />외부의 습도변화가 아닌 실내의 습도에 대해서는 어떻게 관리하고 계신가요?</span><div class='content-line'></div><div class='content-header'>💧 습도가 아토피에 주는 영향</div><span class='content-text'>기본적으로 습도와 피부가 관계가 있듯이, 아토피에도 영향을 줄 것이라는 것에 대해 아는 분들이 많으실 것 같습니다.</span><span class='content-text'>좀 더 구체적으로 어떤 습도가 아토피에 어떤 영향을 주는지에 대해서 살펴보겠습니다.</span><span class='content-text'><a href='https://www.hidoc.co.kr/healthstory/news/C0000673502' target='_blank'>인체에 건강한 습도는 40~60%</a> 라고 합니다. 대부분 사람들은 여기서 더 건조해지는 부분에만 주목해 건조한 대기를 주의하는데요, 반대로 습한 환경에서는 어떤 영향이 있을까요?</span><span class='content-text'>오히려 습해지는 환경이라면 아토피 환자들에게 악영향을 미칠 수 있다고 합니다.</span><span class='content-text'>기본적으로도 습도가 60%를 넘는 순간부터 땀이 잘 증발되지 않는 문제도 있는데,  아토피가 발생할 확률 역시 높아진다고 합니다.</span><span class='content-text'>특히 청소년층이 이에 취약한데, <a href='https://www.sedaily.com/NewsVIew/264JCD22MW' target='_blank'>목포 카톨릭대학 측 전문가가 조사한 결과</a>에 따르면 실제로 초등학교 저학년층 약 3500명을 대상으로 조사해보니 <u>집안 환경이 습한 경우 아토피 발생률이 1.9배</u>가 되었다고 합니다.</span><div class='content-line'></div><div class='content-header'>✅ 할 수 있는 습도 관리?</div><span class='content-text'>실내환경에서 습도를 관리할 수 있는 도구로 가장 먼저 떠오르는 것은 아무래도 가습기죠.<br />그렇다면 무조건적인 가습기 설치가 아토피 환자들에게 도움이 될까요?</span><span class='content-text'>실내의 대기가 건조한 경우 가습기를 통한 관리가 권장되기는 합니다.</span><span class='content-text'>그런데 <a href='https://www.medicalnewstoday.com/articles/faqs-humidifier-for-eczema#can-a-humidifier-make-eczema-worse' target='_blank'>인제 백병원과 USC의 피부과 전문의가 공동연구를 한 결과</a>에 따르면 <u>가습기가 있던 집안에서 자란 아이들이 아토피가 발생할 확률이 그렇지 않은 집안보다 44% 높았다</u>고 합니다.</span><span class='content-text'>다만, 원인은 가습기 자체가 아닌 <u>가습기의 잘못된 활용</u>이었던 것으로 파악이 됩니다.<br />그러므로 가습기를 사용해서 관리를 하려면 다음과 같은 사항들에 주의하면서 사용해야 하겠습니다.</span><ul class='content-list'><li class='content-listitem'><u>사용 전 청소</u>를 통해 오히려 증상을 악화시킬 수 있는 먼지나 균 등의 오염물질에 주의할 것</li><li class='content-listitem'><u>실내 습도가 60%</u>를 넘는다면 가습기 사용을 기피할 것</li></ul>`,
    createdAt: '2022-10-23',
    tagType: 'ENVIRONMENT',
  },
  18: {
    title: '전문가와의 문의 : 수면(1)',
    content: `<span class='content-text'>이번 뉴스레터는 수면과 관련된 특정 주제를 다룬다기보다는 아토피 연관 전문가가 수면과 아토피와 관련된 내용에 대해서 진행한 Q&A를 정리하는 내용을 다루고자 합니다!</span><span class='content-text'>연관 전문가는 <a href='https://www.nationaljewish.org/doctors-departments/providers/researchers/lisa-j-meltzer' target='_blank'>Lisa Meltzer 박사</a>로 플로리다 대학의 임상, 건강 심리학 박사 학위를 이수했으며 만성질환을 앓고 있는 아이들의 수면에 대해 주로 연구하고 있으며 현재는 미국의 병원 중 상위 50위권인 국립 유대 병원과 American board of sleep medicine이라고 하는 미국 수면 관련 의학 학회의 회원입니다!</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/197383420-c3696928-47f3-40db-a178-88def67ba5d0.png' /><div class='content-line'></div><div class='content-header'>🌙 많은 아토피 환자들이 왜 낮동안 수면이 아닌 밤의 수면에 이상이 있나요?</div><span class='content-text'>여러 가지 이유가 있다고 하는데</span><ul class='content-list'><li class='content-listitem'>피부의 온도는 낮보다 <u>침대에 있을 수면 시간대에 올라가기 시작</u>하는데 이러한 현상이 가려움을 악화</li><li class='content-listitem'>우리가 피곤해지면 <u>뇌 중에서도 긁는 것을 방지하는 부분이 가장 먼저 수면에 들기 시작</u>하기 때문</li><li class='content-listitem'>수면 도중 발생한 가려움증으로 <u>부족해진 수면을 낮잠으로 보충</u>하기 때문</li></ul><span class='content-text'>이러한 요소들로 인해 밤의 수면에 장애가 발생한다고 합니다.</span><span class='content-text'>아토피로 인해 밤의 수면을 방해받고 있다면, “낮 시간의 가려움증에 대한 관리”, “새로운 나에게 맞는 수면 관리법”을 찾는 것이 좋을 것이라고 언급하네요.</span><div class='content-line'></div><div class='content-header'>🤦‍♂️ 자면서 가려움증이 발생할 때 손을 가만히 둘 수 있는 방법이 있나요? 이미 손에 장갑과 비닐을 써보는 건 해봤습니다…</div><span class='content-text'>자기 전 <u>부드러운 종류의 쥘 수 있는 장난감 같은 물건들을 손에 쥐고</u>, 잠에 드는 것을 권장한다고 합니다.<br />혹은 가려움증 발생 시 <u>다른 곳으로 관심을 돌리는 명상</u> 등에 대한 방법을 권장합니다.</span><span class='content-text'>이에 대해서는 지난 <a href='https://www.weato.net/newsletter/32' target='_blank'>PMR과 관련한 뉴스레터</a>도 적용해보시기를 추천합니다!</span>`,
    createdAt: '2022-10-23',
    tagType: 'SLEEP',
  },
  19: {
    title: '글루텐 프리, 아토피는?',
    content: `<span class='content-text'>“글루텐 프리” 음식 제품. 들어보신 적 있으신가요?</span><span class='content-text'>밀가루에 있는 성분인 글루텐은 단백질 성분 중 하나로 쫄깃한 식감과 반죽이 부풀게 하는 데 기여하는데요.</span><span class='content-text'>이 글루텐이 없는 밀가루 제품을 글루텐 프리라고 하죠. 아토피 환우 분들 중 몇몇은 증상을 관리하시면서 이 글루텐과 관련된 사항들 때문에 밀가루 음식을 기피하셨던 분들도 계실 겁니다.</span><span class='content-text'>그런데 이 글루텐, 정말 아토피와 관련이 있는 걸까요?</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/197383782-381d4667-bc3e-4697-ad6e-8814dad85615.png' /><div class='content-line'></div><div class='content-header'>🍞 글루텐과 아토피 어떤 관련이 있는지?</div><span class='content-text'>2011년, <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7800432' target='_blank'>Southern Denmark 의대 측에서 글루텐과 당뇨병, 류마티스 관절염, 셀리악병, 크론병, 궤양성 대장염과의 연관성에 대한 연구 결과</a>를 발표한 적이 있었죠.</span><span class='content-text'>그 중 <a href='https://www.amc.seoul.kr/asan/mobile/healthinfo/disease/diseaseDetail.do?contentId=32038' target='_blank'>셀리악병은 글루텐에 대한 예민도가 증가하며 나타나는 알러지, 자가면역 질환의 일종</a>입니다.</span><span class='content-text'>결과 발표와 함께 식품 시장은 글루텐 프리 제품과 관련해 열을 올리게 되었습니다. 뿐만 아니라 셀리악병과 포진상 피부염간의 연관성으로 인해 글루텐은 포진상 피부염과 관련이 있다는 것도 밝혀지게 되었죠.</span><span class='content-text'>포진상 피부염은 그 증상이 아토피랑 굉장히 유사한데, 그렇다면 글루텐과 아토피 간의 관계는 어떨까요.</span><span class='content-text'>앞서 언급한 <a href='https://pubmed.ncbi.nlm.nih.gov/15208605' target='_blank'>셀리악병과 아토피 간의 연관성이 일반 사람들보다 3배 이상 높다는 연구 결과</a>가 확인되었으나, 실제로 1년간의 글루텐 프리 식단이 아토피 환자들의 수에 영향을 주지는 않았습니다.</span><span class='content-text'>그 외에도 기타 연구들이 있었으나 해당 연구들 역시 글루텐 프리와 아토피 간 명확한 관계를 밝혀 내지는 못 했습니다.</span><div class='content-line'></div><div class='content-header'>😟 그래서, 글루텐 피하면서 먹어야 돼?</div><span class='content-text'>결론을 말씀드리면, 아토피 증상이 심한 분들이 아니면 크게 유효하지는 않습니다.</span><span class='content-text'>물론 글루텐 프리 제품이 일부 증상에 도움을 주는 것은 사실이나, 아토피만을 봤을 때는 높은 영향을 준다고 할 수는 없습니다.</span><span class='content-text'>Harvard 의대를 졸업후 Northwest 대학의 피부과 전문의인 <a href='https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=18098' target='_blank'>Peter Lio</a>와 Illinois 의대 출신의 피부과 전문의 <a href='https://quincymedgroup.com/people/sumul-gandhi' target='_blank'>Sumul Gandhi</a>에 따르면</span><ul class='content-list'><li class='content-listitem'>모두를 위한 방법이 아닌 증상이 매우 심한, 밀가루 알러지가 있는 인원한테 유효</li><li class='content-listitem'>매우 어린 아이들한테는 오히려 유효하지 않음</li><li class='content-listitem'>비용적으로 글루텐 프리 음식들은 약 5배 이상 더 비쌈</li></ul><span class='content-text'>같은 요소들을 고려해서 적용하는 것이 좋을 것으로 보입니다.</span>`,
    createdAt: '2022-10-23',
    tagType: 'FOOD',
  },
  20: {
    title: '월마다 여성분들이 아토피가 심해지는 것 같은 이유!',
    content: `<span class='content-text'>이번 뉴스레터는 여성분들과 연관이 있는 내용인데요.<br />여성분들은 월마다 정기적으로 신경쓰이시는 기간이 있으시죠.</span><span class='content-text'>그런데 이 시기와 아토피가 연관성이 있을 수도 있다는 사실은 알고 계셨을까요?</span><div class='content-line'></div><div class='content-header'>👩 성호르몬과 아토피의 관계</div><span class='content-text'><a href='https://www.mdcsnyc.com/provider/marisa-k-garshick-md' target='_blank'>미국 Tufts 의대 출신으로 현재 Cornell 피부과 조교수인 Marisa Garshick</a>에 따르면 성호르몬이 낮아지는 월경주기 1주 전 쯤, 낮아진 성호르몬 수준으로 인해 피부가 건조해져 아토피 증상이 발현될 수 있다고 합니다.</span><span class='content-text'><a href='https://www.webmd.com/skin-problems-and-treatments/eczema/eczema_hormones_link#:~:text=Hormone fluctuations during your period,cause your eczema to flare' target='_blank'>연관되는 연구결과</a>를 보면 실제로 월경 주기 1주 전쯤부터 아토피 발진 현상을 경험한 인원은 20~50%정도라고 합니다.</span><span class='content-text'>물론 아토피에 영향을 미치는 요인은 단지 호르몬 주기 뿐만은 아니겠지만, 유독 월경 1주 전부터 증상이 발생되는 분들이라면 연관성에 대해서 의심해보는 것이 좋을 듯 합니다.</span><span class='content-text'>원인은 <u>기존의 아토피</u>가 월경 주기 당시 호르몬 변화로 인해서 증상이 발생하는 것이거나 혹은 <u>‘자가면역 프로게스테론 피부염’</u>이라는 드문 질환일 수 있다고 합니다.</span><div class='content-line'></div><div class='content-header'>❓ 확인해보니 월경 주기와 아토피 발생 시기가 유독 유사했다면?</div><span class='content-text'><a href='https://advancing-derm.org/scholars-class-2018/ivy-lee' target='_blank'>UC, San Francisco 의대 출신으로 USC 피부과 조교수인 Ivy Lee</a>는 이에 대해</span><ul class='content-list'><li style='font-weight: 500;'><a href='https://www.wellandgood.com/eczema-flare-before-period' target='_blank'>“ 기존 아토피라면 동일한 대응을 하면 되지만 자가면역 프로세스테론 피부염이라면, 전문가와 상의해 해당 증상과 시기에 대한 조치를 취해야 한다 “</a></li></ul><span class='content-text'>고 말했습니다.</span><span class='content-text'>혹시나 유독 <u>해당 시기에만 더욱 심해지는 분들이 있으시다면 한 번 상의를 받아보시는 게</u> 좋을 듯 하네요.</span><span class='content-text'>앞서 말한 두 전문가가 권장한 <a href='https://www.wellandgood.com/eczema-flare-before-period' target='_blank'>3가지 아토피 환자들에게 좋은 제품</a>을 간단히 언급하면서 뉴스레터를 마무리하겠습니다.</span><ul class='content-list'><li class='content-listitem'>Dove사의 Sensitive skin body wash<br />: 앞서 언급한 Ivy Lee 전문가가 아토피 환자들에게 권장하는 제품으로 보습에 좋은 성분들과 피부에 유익한 프리바이오틱스 성분으로 구성</li><li class='content-listitem'>Vaincream사의 Gentle Facial clenser</li><li class='content-listitem'>La Roche Posay사의 Lipikar AP+M Triple repair Moisturizing cream<br />: 미국 내 아토피 협회에서 인정받은 얼굴, 신체를 위한 보습제 크림. 아토피 증상을 가진 환자들에게 유효한 효과를 보여왔음</li></ul>`,
    createdAt: '2022-10-23',
    tagType: 'OTHERWISE',
  },
  21: {
    title: '“스테로이드제”에 대해서(2)',
    content: `<span class='content-text'>지난 번 약품 관련된 뉴스레터에서 <a href='https://www.weato.net/newsletter/40' target='_blank'>스테로이드제에 대한 내용</a>을 다루기 시작했죠.</span><span class='content-text'>이번 뉴스레터에서는 스테로이드제 어떤 것을 걱정해야 하고, 실제로는 어떤지에 대한 내용으로 스테로이제 내용을 마무리 짓겠습니다!</span><div class='content-line'></div><div class='content-header'>😨 발생할 수 있는 부작용은 어떤 게 있나요?</div><span class='content-text'><a href='http://www.health.kr/Menu.PharmReview/_uploadfiles/스테로이드제.pdf' target='_blank'>한국 약학 정보원</a>과 <a href='https://www.ncbi.nlm.nih.gov/books/NBK424899' target='_blank'>독일 건강관리 품질효능 연구소 IQWiG</a>에 따르면 아토피 환자들에게 주로 처방되는 부신피질호르몬제의 경우에는 오히려 다음과 같은 부작용들이 발생할 수 있다고 합니다.</span><ul class='content-list'><li class='content-listitem'>신체 면역 기능이 저하되어 오히려 세균감염을 유발 및 악화 가능</li><li class='content-listitem'><u>장기적</u>으로 투여할 경우 다음과 같은 연관되는 질병들 발생 위험<ul class='content-list'><li class='content-listitem-nested'>당뇨병, 월경 이상, 소아 성장 억제, 소화성 궤양, 골다공증, 백내장 등</li></ul></li><li class='content-listitem'><u>피부가 얇아지는 현상</u></li><li class='content-listitem'><u>피부 색소의 변화나 물집 발생 위험</u></li><li class='content-listitem'><u>모세혈관 확장증</u> 발생 위험</li></ul><span class='content-text'>스테로이드의 오남용으로 인한 부작용들이 무시무시한데요.</span><span class='content-text'>혹시나 <u>전문가와의 상의 없이 스테로이드제를 이용해 관리하시려는 분</u>들이 계시다면, 그 생각을 멈추시고 바로 <u>전문가와 상의를 하시는 것</u>을 강력히 권장드립니다.</span><span class='content-text'>이렇게 위험한 부작용이 있는 제품을 전문가의 관리 없이 사용하는 것은 매우 위험하며, ‘위험성 인지 못한 스테로이드 부작용’ 사례 중 하나가 될 수도 있으니까요.</span><div class='content-line'></div><div class='content-header'>❓ 그럼에도 스테로이드제</div><span class='content-text'>이러한 부작용들이 있음에도 왜 스테로이드제를 사용할까요?</span><span class='content-text'>이런 부작용들은 <u>장기적으로 강도 높은 약품</u>을 사용했을 때나 발생 가능한 부작용들이기 때문입니다.</span><span class='content-text'>스테로이드제에 저러한 부작용들이 있지만 높은 강도, 장기간 사용과 같은 사항들만 아니라면 너무 걱정하지 않으셔도 되며 현재 아토피 치료에서 가장 유효한 약물치료법이기도 합니다.</span><span class='content-text'>또한 전문가 분들도 스테로이드제에 대해 잘 알고 계시기에 스테로이드제 강도를 나타낸 7개 등급 중에서 <a href='http://www.health.kr/Menu.PharmReview/_uploadfiles/아토피피부염(Atopic Dermatitis) (2).pdf' target='_blank'>피부가 얇은 소아나 노년 계층에게는 권고된 등급보다 1단계 낮은 제품을 사용하게 하도록 지침에 언급</a>되어 있습니다.</span><span class='content-text'>현재 전세계 아토피 환자들을 위해 배포된 가이드라인 중 가장 많이 사용되고 있는 지침은 2018년 유럽 주요의대 전문가들이 공동 제작한 “<a href='https://onlinelibrary.wiley.com/doi/full/10.1111/jdv.14891' target='_blank'>2018 European guidelines treatment for atopic eczema</a>” 라는 치료 가이드라인입니다.</span><center><img style='width:70%; margin-bottom:24px;' src='https://user-images.githubusercontent.com/6462456/198220291-31740184-78c4-4f7d-8f01-769319d880e3.png' /></center><span class='content-text'>2022년 10월 19일에 진행된 아토피 치료와 관련된 웨비나에서 <u>하버드 의대를 졸업한 Northwest 피부과 전문의인 Peter Lio</u>는 해당 가이드라인이 현재까지도 여타 가이드라인보다 ‘명확한 접근성’, ‘실효성’, ‘신뢰성’ 부분을 보장하는 가이드라인이라고 언급했습니다. 해당 가이드라인 내에서 Mild, 즉 WEATO 점수 2단계 이상인 분들부터 스테로이드제를 처방하는 것을 확인 가능합니다.</span><span class='content-text'>그럼에도 사용하시면서 심상치 않은 증상들이 보인다면 전문가와의 상의가 필요합니다.</span><span class='content-text'>해당 웨비나에서 Peter Lio는 이러한 스테로이드제의 위험성도 역시 이야기함과 동시에 최근 들어 개발되고 있는 <u>스테로이드제의 대안 약물들</u>에 대해서 함께 이야기하였습니다.</span><span class='content-text'>Peter Lio는 지금 가장 유효한 방법이기는 하지만, 부작용을 무시 못 하기에 보다 안정적인 대안들을 현재 연구중이라고 하였으며 조만간 아토피 환우분들이 이런 여러 대안들 중 자신에게 알맞은 치료법을 적용하는 사회가 올 것이라고 언급했습니다.</span><span class='content-text'>보다 안정적인 대안들이 개발되어, 아토피 환우분들께서도 걱정없이 치료받을 수 있는 시간이 오기를 기대합니다!</span>`,
    createdAt: '2022-10-27',
    tagType: 'DRUG',
  },
  22: {
    title: '전문가와의 문의 : 수면(2)',
    content: `<span class='content-text'>지난 번 <a href='https://www.weato.net/newsletter/42' target='_blank'>Lisa Meltzer 박사와의 수면과 아토피에 관한 질의응답</a> 2번째입니다!</span><span class='content-text'>미처 못 다룬 이야기를 추가적으로 더 언급하여 해당 질의응답 내용을 마무리하고자 합니다!</span><div class='content-line'></div><div class='content-header'>🥛 자기 전 먹는 우유나 탄수화물이 아토피와 수면에 어떤 영향을 주나요?</div><span class='content-text'>역류성 식도염과 같은 식도염이나 위와 장의 문제가 없다면, 수면 전의 간단한 간식을 수면습관 개선측면에서 권장하는 편입니다.</span><span class='content-text'>그러나 <a href='https://medlineplus.gov/ency/article/002332.htm' target='_blank'>수면에 도움이 되는 트립토판</a>을 위해서 우유와 육류를 섭취하려고 한다면, <u>우유는 4L(리터) 이상</u>을 <u>육류는 약 900g(그램)이상</u>을 섭취해야 수면에 도움이 됩니다. 그만큼 우유와 육류를 먹는 것은 생각보다 부담스럽고 도움도 적을 것입니다.</span><span class='content-text'>Lisa Meltzer는 그러한 식품 대신 <u>요거트나 그래놀라 바와 같은 가벼운 식품들</u>을 섭취할 것을 언급했습니다.</span><div class='content-line'></div><div class='content-header'>💊 베나드릴 같은 항히스타민제를 사용하고 있는데 장기 사용시 악영향이나, 수면 중 가려움에 영향이 있나요?</div><span class='content-text'>수면 심리학자로 약 처방에 관해서는 언급을 삼갔으나, 항히스타민제의 장기 사용으로 인한 수면에 대한 영향이 과학적으로 밝혀진 바가 없다고 언급하며 몇일 간은 효능이 있을 수 있으나 장기적인 효능은 없을 가능성이 있다고 하였습니다.</span><span class='content-text'>또한 수면을 위해 해당 약품을 복용 중에 있다면, 전문가와 수면 관련 약품에 대해 상의하는 것을 권장했습니다.</span><div class='content-line'></div><div class='content-header'>🛌 쿨링 베개가 수면에 도움을 줄까요?</div><span class='content-text'>과학적으로 ‘쿨링 베게’가 수면에 효과를 주었다는 근거는 없으나, Lisa Meltzer 본인의 진료 경험들에 근거했을 때 수면 전에 신체를 ‘시원하게 해 주는 것’은 매우 효과가 좋았다고 언급하였습니다!</span><span class='content-text'>수면을 위해 멜라토닌이 분비되기 시작하면 피부와 팔과 같은 부위들을 통해 체온이 상승하게 되는데 이러한 체온 증가는 수면시에 가려움증이 발생하는 원인이 된다고 합니다.</span><span class='content-text'>그렇기에 수면시 신체를 시원하게 해 주는 것은 이러한 가려움증의 원인인 체온 증가를 방지해줘 수면에큰 도움이 될 것이라고 언급하였습니다.</span>`,
    createdAt: '2022-10-27',
    tagType: 'SLEEP',
  },
  23: {
    title: 'MD크림, 들어보셨나요?',
    content: `<span class='content-text'>아토피 환우분들께서는 연고부터 보습제와 음식까지 그 치료의 영역이 매우 넓은데요.<br />특히, 보습로션과 크림 등으로 관리하시는 분들이 적지 않으실 것으로 보입니다.</span><span class='content-text'>다만, 약의 경우 보험이 적용되서 비용적으로 부담이 줄기는 하지만, 다른 제품들에서는 보험이 적용이 안 되어 순전히 자신의 금액으로 지출을 해야 되는 상황인데요.<br />이 중 보습제와 크림 중 MD크림은 보험급여 적용이 된다는 점 알고 계셨나요?</span><span class='content-text'>이번 뉴스레터는 이 MD 크림에 대한 이야기를 작성해보려 합니다!</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/198222286-1e4aceaa-8f9c-4b09-8e7b-3fc1a862c43b.png' /><div class='content-line'></div><div class='content-header'>🧴 MD크림은 어떤 거지?</div><span class='content-text'>MD 크림은 Medical Device의 줄인 말로, 한마디로 의료기기로써 인정을 받은 크림 제품을 의미합니다!</span><span class='content-text'><a href='https://www.beautynury.com/news/view/95494/cat/10' target='_blank'>화장품과 성분이 동일하면서도 의료기기로 인정</a>받으며, <u>손상된 피부장벽에 물리적인 보호막</u>을 만들어 건조해지는 것으로부터 보호해주는 이 크림은, <u>피부과에서 처방</u>해 사용되는 크림으로 ‘피부과 화장품’이라는 이름으로도 불립니다.</span><span class='content-text'>주로 <u>화상이나 민감성 피부, 아토피 환자분</u>들에게 피부과에서 처방을 한다고 합니다.</span><div class='content-line'></div><div class='content-header'>♻️ 크림이 보험급여를 적용받는다고?</div><span class='content-text'>가장 중요한 점은 이 크림은 <u>의료기기로 등록되어 있어 실손보험에 비용 청구가 가능하다는 점</u>입니다!</span><span class='content-text'>통상적으로 해당 제품을 처방받은 후 제품을 실비 청구하게 되어 승인된다면 약 5000~8000원 정도 되는 통원비를 공제한 나머지 금액을 청구받을 수 있습니다!<br />평균적으로 개당 3만 5천원 이상 하는 제품들에서 약 2만 7천원 이상을 급여받을 수 있다는 의미죠!</span><span class='content-text'>하지만 보험급여 적용이 되는 제품이면서도 일상에서 서로 거래가 빈번할 수 있는 제품이라는 점으로 일반인 간 거래가 일어날 수 있는 제품인데요.</span><span class='content-text'>실제로 특정 환자가 한번에 10개를 처방받고 남은 크림을 당근마켓에 거래하는 등의 사례가 발생하면서, <a href='https://www.medipana.com/article/view.php?news_idx=293620' target='_blank'>보험업계에서는 그 기준을 엄격히 올리고 환자당 진료 1회당 1개까지만 적용을 해주는 등과 같이 MD크림에 실비 적용 기준을 많이 높인 상황</a>입니다.</span><span class='content-text'>또한 이러한 처방받은 제품을 허가받지 않은 <u>전문가가 아닌 개인의 임의로 거래하는 행위</u>가 적발될 경우 <a href='https://www.beautynury.com/news/view/95494/cat/10' target='_blank'>의료기기법 위반으로 3년 이하의 징역, 300만원 이하의 벌금형</a>을 받을 수도 있습니다.</span><span class='content-text'>당연히 이러한 제품을 임의로 거래하는 것은 하지 않으셔야 하겠지만, 또 이러한 비윤리적인 사례들로 아토피 환자분들을 위한 나은 환경이 제한되는 점들은 안타깝습니다.</span><span class='content-text'>그러나 조만간 이러한 부분들이 개선되며, 아토피 환우분들이 편하게 살 수 있는 세상이 오리라 기대하며 글을 마치겠습니다!</span>`,
    createdAt: '2022-10-27',
    tagType: 'CLEANING',
  },
  24: {
    title: '키토 식단, 아토피에는 도움되나요?',
    content: `<span class='content-text'>‘키토제닉 식단’이라는 단어를 들어보신 분 있으신가요?</span><span class='content-text'>한 때, ‘키토김밥’, ‘키토 다이어트’가 유명인들이 사용하는 식단이라고 해서 많은 분들이 따라하기도 하셨는데요.</span><span class='content-text'>다이어트를 위해 이런 식단을 적용하시는 분들도 있겠지만…키토 식단 건강에 정말 괜찮은 걸까요?</span><span class='content-text'>WEATO는 잘못된 정보로 괴로워하시는 아토피 환자 분들을 위해, 혹시나 이러한 정보로 아토피를 위해서 적용하시려는 분들이 가지실 궁금증에 집중했습니다.</span><span class='content-text'>그래서 이번 뉴스레터는 키토식단과 아토피에 대해서 이야기해보려 합니다!</span><div class='content-line'></div><div class='content-header'>🥚 키토식단은 어떤 거지?</div><span class='content-text'>키토 식단은 <a href='https://health.chosun.com/site/data/html_dir/2022/06/29/2022062902005.html' target='_blank'>탄수화물을 줄이고 지방 양을 늘이도록 구성된 식단</a>을 의미합니다. 탄수화물의 포도당 대신 지방의 ‘케톤체’라는 물질로부터 에너지원을 삼게 하는 식단인데요.</span><span class='content-text'>가장 널리 알려진 식단 음식으로는 키토제닉 김밥이 있죠.</span><span class='content-text'>그런데 이 키토식단의 시작이 다이어트를 위한 용도가 아닌 어떤 질병에 걸린 환자들을 위한 치료식이라는 것에 대해서는 알고 계신가요?</span><span class='content-text'>이렇게 탄수화물이 적고 지방을 높인 키토 식단의 목적은 <a href='http://realfoods.co.kr/view.php?ud=20210903000102' target='_blank'>소아 간질과 같은 신경증 환자들의 발작을 막기 위해 약물 치료가 진행될 수 없는 환자들의 치료</a>입니다.</span><span class='content-text'>그렇기에 실제 2021년 식약처에서 의사와 약, 영양 전문가들로 구성한 자문단들로부터의 자문을 통해 오히려 일반인이 이러한 식단을 지속적으로 적용할 경우에는 지방을 과하게 섭취해 두통, 피로감, 탈수 증상, 어지러움 등과 같은 증상들이 발생할 수 있다고 언급하였습니다.</span><div class='content-line'></div><div class='content-header'>😮 그러면 아토피에는 어떤 영향이 있는거지?</div><span class='content-text'>앞서 말한 것처럼 신경증 환자들에게는 효과가 있지만 과학적으로 아토피 환자들에게 도움되는 지에 대해서는 근거가 없습니다.</span><span class='content-text'>게다가 기본적으로 키토제닉 식단은 적용하는 사람들의 피부에 악영향을 끼칠 수 있습니다.</span><span class='content-text'><a href='https://www.everydayhealth.com/eczema/can-keto-diet-help-treat-eczema' target='_blank'>미국의 Arizona 의대 피부과 전문의인 Vivian Shi는 키토제닉 식단으로 많은 피부염 사례가 발생</a>하였다고 언급하였습니다. 이러한 발진 증상을 Keto Rash라고도 하는데요. 탄수화물을 줄이면서 필수적인 영양분의 결핍으로 인해 발생하는 것으로 추정되고 있씁니다.</span><span class='content-text'>이렇게 키토제닉 식단으로 인해 색소침착가려움발진 증상이라는 오히려 아토피와 유사한 가려움과 발진을 유발하는 증상이 나타나는 것을 <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5945928' target='_blank'>2018년 하와이 의학 저널</a>과 <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6558236' target='_blank'>2019년 세계 피부과 의학 저널</a>에서 발표되었습니다.</span><span class='content-text'>물론 <a href='https://www.linkedin.com/pulse/keto-gluten-free-paleo-do-diets-help-your-eczema-jessica-tran/?trk=public_profile_article_view' target='_blank'>몇몇 사람들은 도움이 되었다는 후기</a> 등이 들리기도 하였지만, 기존부터 곡물이나 유제품에 안 좋은 영향을 받았거나 극히 적은 사례들로 아토피를 위해 키토식단을 적용하려 하신다면 권장을 드리지 못 할 것 같네요.</span>`,
    createdAt: '2022-10-27',
    tagType: 'FOOD',
  },
  25: {
    title: '가을철 아토피 환자들에게 좋은 소재의 옷들',
    content: `<span class='content-text'>가을의 쌀쌀한 공기는 더 따뜻한 옷을 꺼내게 만들죠.<br />또 그만큼 따뜻한 옷 중에는 입고 싶던 옷들도 있을텐데요.</span><span class='content-text'>지난 번에는 <a href='https://www.weato.net/newsletter/31' target='_blank'>가을과 아토피와 관련 있는 알러지 간의 관계에 대한 뉴스레터</a>가 있었죠.</span><span class='content-text'>이번에는 가을 철 아토피 환자들이 입어도 괜찮은 의류 소재들에 대해 뉴스레터입니다!</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/198225189-462206fe-6334-4315-bc2d-9092d20f9f4c.png' /><div class='content-line'></div><div class='content-header'>🧥 면, 그리고 메리노 울 소재!</div><span class='content-text'>면 소재가 피부에 주는 피해가 적어서 아토피 환자분들에게 좋은 소재라는 정보는 많이들 알고 계실 것 같습니다.</span><span class='content-text'>메리노 울이라는 소재에 대해서는 들어보셨나요? 일반적인 울 소재와는 다른 메리노 울은 다음과 같은 특징들을 가지고 있습니다.</span><ul class='content-list'><li class='content-listitem'>기존 울이 0.035~0.04mm의 섬유라면 메리노 울은 0.012~0.021mm 크기의 섬유</li><li class='content-listitem'>보다 얇은 섬유크기로 인해 보다 얇고 부드러움</li></ul><span class='content-text'>여기에서 더 나아가 <a href='https://pubmed.ncbi.nlm.nih.gov/30864970' target='_blank'>Dermatitis라고 하는 세계 피부과 전문 저널에 게재된 루이빌 의대 출신 전문가가 진행한 연구</a>에 따르면 경도와 중등도에 해당하는 분들이 메리노 울 소재의 의류와 폴리에스테르 같은 일반 소재의 의류를 입었을 때, 메리노 울을 입은 환자들이 증상 개선에 효과가 있었다고 합니다!</span><span class='content-text'><a href='https://profiles.mountsinai.org/gibran-shaikh' target='_blank'>미국 뉴욕에 위치한 Mount Sinai 병원의 뉴욕 의대를 졸업한 피부과 전문의인 Gibran Shakiah</a>는 이러한 메리노 울 소재의 의류가 환자들에게 도움될 것이라고 언급했습니다.</span><div class='content-line'></div><div class='content-header'>🌲 실크와 라이오셀</div><span class='content-text'>실크 역시도 면과 같이 아토피 환자들에게 괜찮은 소재로 유명한 의류 소재죠.<br />그렇다면 라이오셀이라는 소재에 대해서는 들어보셨나요?</span><span class='content-text'>라이오셀은 친환경 셀룰로오스 소재로써 나무에서 섬유를 추출해 만든 소재입니다.<br />친환경 소재답게 피부에 주는 자극이 적으며, 정전기도 적고 통기성 역시 우수하다고 합니다.</span><span class='content-text'>대표적인 브랜드로는 유칼리투스 나무로 라이오셀 섬유를 제작하는 <a href='https://www.tencel.com/kr' target='_blank'>‘Tencel’이라는 브랜드</a>가 있습니다.</span><span class='content-text'><a href='https://pubmed.ncbi.nlm.nih.gov/19321117' target='_blank'>클리블랜드 의대 병원에서 아토피 환자들에게 해당 소재와 면 소재 옷을 입고 수면의 질을 비교하는 연구</a>를 진행하였을 때, 습도와 부드러움 측면에서 더 선호되었으며 보다 적은 가려움증의 양상이 발견되었다고 하네요!</span><div class='content-line'></div><div class='content-header'>❔ 하이포알러제닉?</div><span class='content-text'>마지막으로 하이포 알러제닉 소재입니다.</span><span class='content-text'>하이포알러제닉이라는 단어가 생소하실텐데요,<br />앞서 언급한 면과 실크 등의 소재와 같이 <u>알러지 유발이나 아토피 증상 유발을 줄여주는 소재</u>로 제작한 의류입니다.</span><span class='content-text'>피부에 닿는 의류를 구매하실 때 해당 소재로 제작되어있는지 참고하시는 정도로 활용해주시면 좋을 것 같습니다!</span>`,
    createdAt: '2022-10-27',
    tagType: 'OTHERWISE',
  },
  26: {
    title: '대한민국 사람들과 잘 안 맞는 유제품, 아토피에는 어떨까',
    content: `<span class='content-text'>어릴 때, 키가 크려면 우유를 많이 먹어야 한다는 말 많이 들으시지 않았나요? 젊은 세대분들은 학교에서 제공되는 급식 우유가 떠오르시는 분들은요?</span><span class='content-text'>이렇게 제공되는 우유들에 비교해 봤을 때 연구에 따르면, 대한민국 사람의 약 75%로 많은 사람들이 유당 불내증을 갖고 있다고 합니다.</span><span class='content-text'>그래서 우유를 마시는 게 오히려 건강에 안 좋을 수도 있다는 이야기들과 함께 우유를 기피하거나, 대체재를 찾거나, 락토프리라는 키워드 등의 트렌드에 영향을 주었었죠.</span><span class='content-text'>그리고 이러한 영향으로 우유가 아토피에 안 좋기 때문에 먹지 않아야 한다는 말도 있는데…과연 이게 사실일까요?</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/200979455-41a6b1e9-156e-4b7c-af6e-5ea281d61ab6.png' /><div class='content-line'></div><div class='content-header'>🥛 우유의 어떤 부분이 원인이 되는 걸까?</div><span class='content-text'><a href='https://www.verywellhealth.com/casey-gallagher-md-4685028' target='_blank'>University of California, San Francisco 출신의 피부과 전문의인 Casey Gallagher</a>가 검수한 내용에 따르면,주로 음식 알러지와 연관이 크기 때문에라고 합니다. 많은 음식 알러지가 유제품이 원인인 편이며, 미국에서도 아토피 환자의 30%가 음식 알러지가 원인인 것 처럼 두 가지가 연결되며 우유를 마시지 않는게 좋은 편이라는 말이 퍼지게 된 것으로 보입니다.</span><span class='content-text'>또한, <a href='https://mdtoday.co.kr/news/view/1065573735145576' target='_blank'>Journal of Allergy and Clinical Immunology라고 하는 국제 알러지 학술 저널에 발표된 연구</a>에 따르면 알러지를 유발하는 식품의 섭취를 기피하며 표준적인 치료를 함께하였을 때가 기피하지 않고 치료를 하였을 때보다 증상 개선도가 높다고 합니다. 유제품도 알러지 유발 식품 중 한 개로 적용되어 이러한 결과가 나왔습니다.</span><div class='content-line'></div><div class='content-header'>🙅 그래도 걱정되는데 아예 먹지 말아야 되나?</div><span class='content-text'>앞서 이야기한 국제 알러지 학회 측 연구 결과에서 기피 치료를 하지 않았지만 <u>표준적인 아토피 치료만을 적용한 사람들의 증상 개선도는 41%</u>입니다.</span><span class='content-text'><u>기피 치료와 함께 표준 치료를 적용한 사람들의 개선도는 평균 50%</u>로, 매우 차이난다고 하기에는 다소 아쉬운 부분이 느껴집니다.</span><span class='content-text'>또한, 아토피 피부염의 원인은 사람마다 매우 다양한 편이라 유제품이 원인이 아닌 사람들에게는 오히려 아무 효과가 없을 수도 있습니다.</span><span class='content-text'>그렇기에 다음과 같은 사항들을 지켜보면서 관리하는 게 적합하겠습니다.</span><ul class='content-list'><li class='content-listitem'>유제품을 섭취하였을 때 아토피 증상이 발생하는지를 관찰한다</li><li class='content-listitem'>섭취 시마다 증상이 발생하였을 경우, 이를 기록하거나 기억하여 전문가와 상담 후 유제품과의 관련성을 파악한다</li><li class='content-listitem'>만약 아이가 섭취 후 중등도 이상의 증상이 발생할 경우, 섭취를 중단하는 것이 좋을 것</li></ul><span class='content-text'>유제품에는 <u>칼슘과 인, 비타민 D, 단백질과 같은 유익한 성분</u>들이 많기 때문에, 무조건적인 기피는 좋지 않을 것입니다.</span><span class='content-text'>비타민 D가 아토피에 어떤 도움이 되는지는 이 <a href='https://www.weato.net/newsletter/33' target='_blank'>링크의 뉴스레터</a>를 통해서 확인하세요!</span><span class='content-text'>게다가 <a href='https://www.journalofdairyscience.org/article/S0022-0302(19)30133-X/fulltext' target='_blank'>중앙대 의대에서 진행된 연구</a>에 따르면, <u>케피르와 요거트같이 발효되서 효소가 첨가된 유제품들은 오히려 아토피 증상 개선에 도움을 줄 수 있다</u>고도 합니다.</span><span class='content-text'>이러한 이점들이 있는 유제품을 무턱대고 끊기보다, 섭취하시면서 잘 관찰하여 환자분의 증상과 맞지 않다고 생각이 들 때 조절하시는 게 더 도움이 될 것 같네요.</span>`,
    createdAt: '2022-11-03',
    tagType: 'FOOD',
  },
  27: {
    title: '애드트랄자, 이건 또 어떤 약품이야?',
    content: `<span class='content-text'>미리 이용하셨던 분들은 보셨겠지만, 최근 아토피 환자들이 사용할 수 있는 약물 치료가 굉장히 다양해지고 있는 추세입니다.</span><span class='content-text'>주사형 치료제인 듀피젠트부터, JAK 억제제까지.</span><span class='content-text'>과거 스테로이드제만이 적용되던 때보다는 아토피 환자들께서 본인에게 맞는 치료법을 선택할 수 있는 범위가 늘어나고 있는 상황인데요.</span><span class='content-text'>이번에는 이들과는 또 다른 새로 연구되고 있는 ‘애드트랄자’라는 약품에 대해 알아볼까 합니다.</span><div class='content-line'></div><div class='content-header'>💉 또 새로운 약? 이건 어떤 약인데?</div><span class='content-text'>덴마크의 제약기업인 레오파마에서 아토피 환자들을 대상으로 연구한 약품입니다.</span><span class='content-text'>레오파마는 피부 질환 대상으로 전문적인 제약 기업으로, 대표적인 상처치료제 중 하나인 ‘후시딘’이 이 기업에서 만들었던 약품입니다.</span><span class='content-text'>그런 레오파마에서 만든 이 약품은 ‘애드트랄자’라는 이름으로, 듀피젠트와 비슷한 ‘<u>생물학적 억제제</u>’ 로 부작용에 대한 우려가 타 약품들 보다 적은 편입니다.</span><span class='content-text'>혹시 듀피젠트가 어떤 약품인지 모르시는 분은 <a href='https://www.weato.net/newsletter/25' target='_blank'>이 링크</a>를 통해서 확인해주세요!</span><span class='content-text'>듀피젠트처럼 우리의 몸에서 면역 작용을 발생시키는 인터루킨이라는 물질을 억제시켜주어 증상을 약화시켜주는 약품입니다. 듀피젠트가 2가지 인터루킨을 억제한다면, 애드트랄자는 1가지 인터루킨을 억제한다는 차이가 있는데요.</span><span class='content-text'><a href='https://www.newsthevoice.com/news/articleView.html?idxno=24545' target='_blank'>실제 임상실험</a>에서 아토피 증상 점수가 <u>75% 이상 개선된 인원이 75% 이상</u>이며, <u>가려움증의 개선 비율은 위약군과 비교했을 때 2~3배 정도</u>였습니다.</span><span class='content-text'>듀피젠트와 유사하게 <u>중등도 이상 중증의 증상</u>을 보이는 환자 분들을 대상으로 하는 약품이며, <u>2주마다 2번씩 주사의 형태로 투여</u>합니다.</span><div class='content-line'></div><div class='content-header'>🇰🇷 다른 약들처럼 이 약품도 우리나라에서?</div><span class='content-text'>최근 임상이 완료된 약품인만큼 아직 이 약품은 <u>국내에서 승인이 되지는 않았습니다</u>.<br />일부 다른 나라에서는 승인이 되었는데 미국과 유럽, 캐나다, 영국, 그리고 아랍에미리트가 그 국가들입니다!<br />또한, 일본에는 올해 1월에 신청을 한 상황이라 올해 안에 그 승인 여부가 발표될 거라고 합니다.</span><span class='content-text'>특히나 최근에 유럽에서는 <a href='https://www.yakup.com/news/index.html?mode=view&nid=274538' target='_blank'>기존에 만 18세 이상의 중등도 이상의 아토피 환자들에게만 승인되었던 범위에서, 12세~17세까지의 청소년들을 대상으로 적용 승인 연령대가 확장</a>되기도 했습니다.</span><span class='content-text'>이러한 애드트랄자의 급여와 할인이 적용되지 않은 가격은 한 상자당, 즉 <a href='https://www.drugs.com/price-guide/adbry' target='_blank'>한 달 분에 약 450만원에 해당</a>하는데요…<br />급여 비적용가만 봤을 때는 듀피젠트의 가격과도 비슷한 가격입니다.</span><span class='content-text'>현재 영국에서 이에 대한 급여 적용 건이 논의 중에 있으며, 대한민국에서 승인이 되었을 경우 이와 유사하거나 듀피젠트와 유사하게 급여 적용이 되지 않을까 싶네요.</span><span class='content-text'>최근 건강보험 재정도 적자인 현황이라 급여 적용의 상황이 달라질 수도 있겠지만, 이러한 새로운 치료 선택지들이 환자들에게 최적인 상태로 다양해져 자신에게 맞는 치료법을 찾을 수 있는 날이 오기를 기원합니다.</span>`,
    createdAt: '2022-11-03',
    tagType: 'DRUG',
  },
  28: {
    title: '코넬 의대 출신이 이야기하는 바디워시',
    content: `<span class='content-text'>지난 10월 1달 간의 피드백 중 제품에 대한 구체적인 정보가 있으면 좋을 것 같다는 응답을 확인해 읽으시는 분들에게 도움 될 수 있는 제품 정보를 제공하고자 작성하는 뉴스레터입니다.</span><span class='content-text'>추후 피드백을 더 받으며며 <strong>이용자 분들에게 도움되는 쪽으로 제작할 예정</strong>이니 참고바라며 해당 뉴스레터는 광고 목적이 없이 전문가들이 권장하는 제품을 선택하고 알아본 뒤 작성하는 내용임을 말합니다!</span><span class='content-text'>이번에 소개해 볼 제품은 샤워할 때 사용하는 바디워시 제품입니다.</span><span class='content-text'>Wiley 코넬 의학대학을 졸업하고 현재 뉴욕의 Mount Sinai 병원에서 피부과 조교수인 <a href='https://glamderm.com/about-us/our-physicians' target='_blank'>LIAN A. MACK</a>는 아토피 환자들에게 <strong>Eucerin</strong> 기업의 <strong>Eczema relief body wash</strong>라는 세면 제품을 권장했습니다.</span><div class='content-line'></div><div class='content-header'>🤨 믿을 수 있는 바디워시일까?</div><span class='content-text'>실제 피부과 연관된 전문가가 추천한 제품이기는 하지만 신뢰할 수 있는지에 대해서는 좀 더 설명을 해야겠죠?</span><span class='content-text'>일단, 이 제품은 <a href='https://www.byrdie.com/best-body-washes-for-eczema-5078972#toc-best-overall-eucerin-eczema-relief-cream-body-wash' target='_blank'>일반적으로 거품 폼이 만들어지는 클렌저 제품과는 다르게 폼이 생성되지 않아 피부에 주는 자극이 덜한 편</a>입니다.</span><span class='content-text'>이 바디 워시는 2% 농도의 오트밀 혼합용액이 주요 성분이며, 향을 위한 화합물들이 첨가되어 있지 않으며 피부에 해롭지 않은 성분들로 구성이 되어 있습니다.</span><span class='content-text'>실제로 <a href='https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a7c4ab13-e8b5-552c-e053-2a95a90a959b&type=display' target='_blank'>FDA 측에서 작성한 성분 표</a>를 보면 위의 내용들을 확인 가능하십니다.</span><div class='content-line'></div><div class='content-header'>🔬 실제 효능?</div><span class='content-text'>앞서 말한 성분 중 오트밀 혼합용액 성분은 아토피 환자분들의 가려움증과 발진 증상을 완화해주는 역할을 합니다.</span><span class='content-text'>또한 이 제품에 있는 세라마이드 성분은 화합물들이 첨가되어 있지 않아 피부 장벽을 보충하는데에 기여합니다.</span><span class='content-text'>다만, 향이 무첨가되어 있고 샤워를 할 때 일반적으로 거품이 발생하는 바디 워시들과는 다르게 거품이 생기지 않아 이런 특징들에 신경 쓰시는 분들이라면 유의하셔야겠습니다.</span><div class='content-line'></div><div class='content-header'>💲 이 바디 워시의 가격은?</div><span class='content-text'>유세린은 독일에 위치한 스킨케어 제품 전문 기업으로, 국내에서 올리브영과 치코르 같은 업체에도 그 브랜드가 입점해 있습니다.</span><span class='content-text'>다만, 아쉽게도 해당 제품이 각 매장에서 판매하는지에 대한 내용은 찾지는 못 했기에 미국 기준으로 가격을 말씀드리자면 400ml 들이에 11달러로 11월 8일 기준 약 15000원에 해당하는 가격입니다.</span><span class='content-text'>아마존이나 쿠팡 같은 온라인 쇼핑 업체들에서는 해당 제품이 등록되어 있어 해당 가격에 배송비가 추가되어서 이 점을 고려하셔야겠네요.</span><span class='content-text'>미국 내에서도 가성비가 우수한 제품으로 알려진 편으로, 혹시 연관 제품에 다소 부담을 느끼고 있거나 새로운 세면용품에 대한 고려가 있던 분이라면 참고하시면 좋을 것 같습니다.</span>`,
    createdAt: '2022-11-03',
    tagType: 'CLEANING',
  },
  29: {
    title: '아토피 증상과 심혈관의 관계?',
    content: `<span class='content-text'>아토피 피부염은 접촉된다고 남들에게 감염되지 않는 전염병이 아닌 건 이미 많은 분들이 알고 계실 겁니다.<br />그렇다면 아토피 피부염 질환이 있는 환자는 아토피 때문에 다른 질환에 영향을 받게 될까요?</span><span class='content-text'>오늘은 그 중 아토피와 심혈관 질환과의 관계에 대해서 알아보겠습니다.</span><span class='content-text'>해당 뉴스레터의 근거는 <a href='https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis' target='_blank'>2022년도 초에 미국 아토피 학회에서 발간한 아토피 피부염 치료 가이드라인</a>에 기반합니다.</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/200984259-79c1fc49-2197-4435-80e1-46697deb20ae.png' /><div class='content-line'></div><div class='content-header'>🫀 피부질환과 혈관 질환 사이에 관계가 있을 수 있나?</div><span class='content-text'>아토피 증상은 면역체계와 관련이 있다는 건 많은 분들이 알고 계시겠죠.</span><span class='content-text'>면역체계는 혈관 속 단백질과도 관련이 있습니다.<br />혈관 속의 <u>단백질로 된 효소과 물질들이 혈관을 타고 흐르며 신체 여러 군데에 면역과 관련된 반응을 일으키기 때문</u>인데요.</span><span class='content-text'>아토피 증상이 발생되는 것도 이러한 단백질 물질들과도 관련이 있기 때문에 심혈관 질환과의 관련성이 있다고 언급이 되는 것입니다.</span><span class='content-text'>해당 가이드라인 내에서도 <a href='https://www.aad.org/member/clinical-quality/guidelines/atopic-dermatitis' target='_blank'>아토피 질환은 몇몇 심혈관 질환과의 연관성이 다소 있다</a>고 언급을 하고 있습니다.</span><div class='content-line'></div><div class='content-header'>☑️ 신경써야 할 부분들?</div><span class='content-text'>그렇지만 일반적으로는 <u>고혈압, 동맥 질환, 울혈성 심부전 등과의 연관도가 매우 낮은 편</u>이라는 연구 결과들이 있기에 매우 유의해야 할 부분들까지는 아닌 것으로 보입니다.</span><span class='content-text'>그러나, 완전히 주의를 내려놓기에는 안 될 것 같은 연구 결과들이 존재합니다.</span><span class='content-text'><a href='https://www.everydayhealth.com/eczema/eczema-linked-to-potential-for-other-health-problems' target='_blank'>아토피와 관련해 진행한 단면조사연구</a>에서는 다음과 같은 결과가 나왔습니다.</span><ul class='content-list'><li class='content-listitem'>아토피 환자들은 일반 사람보다 비만에 걸릴 확률이 36% 높음</li><li class='content-listitem'>아토피 환자들은 일반 사람보다 고콜레스테롤 수치를 가지게 될 확률이 13% 높음</li></ul><span class='content-text'>또, <a href='https://www.health.harvard.edu/diseases-and-conditions/eczema-may-signal-higher-risk-of-cardiovascular-problems' target='_blank'>영국 의학 저널(BMJ)에서 18년도에 발표한 연구 결과</a>에 따르면 중증 이상의 아토피 환자들의 경우 심장 마비, 심장 질환, 심장 세동과 같은 질환들로 인한 위험성이 40~50% 이상 높았으며, 뇌졸중 위험성은 20% 높았습니다.</span><span class='content-text'>이 연구는 <u>5년 간 385,000명의 경도부터 중증까지의 성인 아토피 환자들을 추적</u>하였으며, <u>체중과 흡연, 음주의 위험까지 고려</u>하였다는 것에 의의가 있는데요.</span><span class='content-text'>그런가 하면 <a href='https://www.jaad.org/article/S0190-9622(22)00080-9/fulltext' target='_blank'>아토피 환자들은 당뇨병과는 오히려 반비례 관계를 가질 수 있다는 연구 결과</a>도 존재합니다.</span><ul class='content-list'><li class='content-listitem'>아토피 환자들은 <u>전체적인 당뇨병 유형의 위험도가 매우 낮은 편</u>이며, 그 중에서도 <u>특히 2형 당뇨병의 위험성이 매우 낮음</u></li><li class='content-listitem'>단, 대부분의 <u>신진대사 증후군과의 연관성이 높을 수 있음</u></li></ul><span class='content-text'>아토피를 관리하시면서 증상과 이러한 심혈관 질환들과의 연관이 의심스러우신 적이 있으시다면, 전문가와 상의를 해보는게 좋을 듯 합니다.</span>`,
    createdAt: '2022-11-03',
    tagType: 'OTHERWISE',
  },
  30: {
    title: 'Winter is coming, 아토피도 준비',
    content: `<span class='content-text'>가을이 다가온지 엊그제 같은데 벌써 겨울이 빠르게 오는 것 같네요.<br />언론들에서 언급하던 기후변화가 체감되는 느낌입니다.</span><span class='content-text'>11월이 되면서 영동지역, 남부지역은 벌써 건조특보가 나오고 서울은 11월 초인데도 최저기온이 영하까지 도달하고…<br />이렇게 건조해지는 대기는 피부에도 영향을 주기 때문에 미리 준비가 필요한데요.</span><span class='content-text'>겨울이 오기 전, 아토피 환자들에게 도움되는 내용들에 대한 뉴스레터를 적어보려 합니다!</span><span class='content-text'>이번 뉴스레터는 전체적인 내용들을 간략하게 나열해서 보여드리고 추후 세부적으로 더 도움되는 내용을 더 작성하겠습니다!</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/200985802-2451bc22-be64-4dae-a1f1-09386e5f5c69.png' /><div class='content-line'></div><div class='content-header'>❄️ 외출 시 주의해야 할 내용들</div><span class='content-text'>겨울철의 대기는 건조한데 이렇게 건조한 대기는 피부 속 수분을 가져가게 되고, 건조해진 피부로 가려움증을 유발해 아토피 환자들의 증상 악화를 유발하게 됩니다.</span><span class='content-text'>이런 겨울철에 외출할 때 아토피 환자분들이 주의하면 도움 될 내용들입니다!</span><ul class='content-list'><li class='content-listitem'>외출 시 입는 옷들의 소재에 주의할 것. <u>면 소재와 같은 소재 중심의 의류</u>를 택하며 <u>모직 등 소재의 의류</u>는 피할 것<br />다음의 두 링크에서 이러한 의류의 소재와 겨울철 의류에 대한 내용을 더 자세히 살펴볼 수 있습니다.<br /><ul class='content-list'><li class='content-listitem'><a href='https://www.weato.net/newsletter/24' target='_blank'><strong>쌀쌀해지는 날씨에 꺼낸 겨울 옷들…아토피는?</strong> 뉴스레터</a></li><li class='content-listitem'><a href='https://www.weato.net/newsletter/49' target='_blank'><strong>가을철 아토피 환자들에게 좋은 소재의 옷들</strong> 뉴스레터</a></li></ul></li><li class='content-listitem'>춥고 건조한 대기로부터 피부를 보호하는 것도 중요하나, <u>땀이 날 정도로 옷을 입지는 말 것</u></li><li class='content-listitem'><strong><a href='https://health.clevelandclinic.org/winter-eczema' target='_blank'>장갑 등을 착용해 손도 보호하는 것이 좋음</a></strong> by 미국 Cleveland 병원</li><li class='content-listitem'>아토피 환자들의 피부는 <u>세균이나 바이러스에 더 취약해 외출 전후로 손을 자주 씻어 줄 것</u></li></ul><div class='content-line'></div><div class='content-header'>🏠 실내에서는 어떤 걸 신경써야 할까?</div><span class='content-text'>다음으로는 실내에서 겨울철 주목할 만한 내용들입니다!</span><ul class='content-list'><li class='content-listitem'><a href='https://www.healthline.com/health/skin-disorders/winter-eczema-treatment#avoid-hot-baths' target='_blank'><strong>겨울철에는 목욕과 샤워의 비중을 줄이는 것을 권장.</strong></a> 또한 목욕이든 샤워든 <u>뜨거운 물로 하지 말고 미지근한 정도의 물</u>로 할 것</li><li class='content-listitem'>샤워와 목욕에 들이는 <u>시간도 줄이는 것</u>을 권장. 아토피를 앓고 있는 아이의 경우에는 <u>5~10분을 넘기지 않는 것을 권장</u></li><li class='content-listitem'><a href='https://m.health.chosun.com/svc/news_view.html?contid=2020021001293' target='_blank'><strong>샤워와 목욕 시 비누보다는 ‘약산성’ 클렌저를 사용하는 것</strong></a>이 피부장벽 회복에 도움</li><li class='content-listitem'>세면 전후 <u>보습제를 자주 바르는 것을 권장</u></li><li class='content-listitem'>실내 공기가 건조하지 않게 <u>가습기 혹은 빨래를 실내에서 건조시키는 등을 통해 적정 수준의 습도를 유지</u>할 것</li></ul><span class='content-text'>또한, <a href='https://www.jacionline.org/article/S0091-6749%252814%252901114-2/abstract' target='_blank'>Massachusetts General Hospital에서 진행한 연구</a>에 따르면 <u>비타민 D</u> 역시 겨울철 아토피에 도움이 될 수 있으니 햇빛을 통하거나 보충제를 통해 섭취하면 좋을 듯 합니다!</span>`,
    createdAt: '2022-11-03',
    tagType: 'ENVIRONMENT',
  },
  31: {
    title: '달콤한 꿀, 피부에 바르기도 한다고?',
    content: `<span class='content-text'>꿀은 달콤하면서도 건강에 좋은 성분들을 가지고 있어 건강을 이야기할 때 자주 같이 언급되는 식품 중 하나입니다.<br />고르곤졸라 피자와 같이 먹기도 하고, 호떡에 들어가기도 하고, 약과를 만들 때 사용되기도 하는 등 이미 일상 여러 음식에서 적용되고 있죠.</span><span class='content-text'>그런데 이런 꿀을 피부에 바르기도 하는 관리법도 있다고 하는데 혹시 들어보신 적 있을까요?</span><span class='content-text'>이번 뉴스레터는 이렇게 꿀을 피부에 바르는 게 정말 아토피에 도움이 되는지에 대해 알아보는 뉴스레터입니다.</span><center><img class='content-img' src='https://user-images.githubusercontent.com/6462456/201504288-49d44e61-3e65-44fa-8358-cf52488e3200.png' style='width: 60%;' /></center><div class='content-line'></div><div class='content-header'>🍯 좋은 치료 효과를 지니고 있는 벌꿀</div><span class='content-text'>많은 분들에게 꿀은 음식으로만 익숙할 수도 있지만 사실 고대 이집트 시대부터 피부 미용을 위해 사용되었습니다.</span><span class='content-text'>벌꿀에는 미네랄과 산화방지제, 프로폴리스 등 인체에 좋은 성분이 다양하게 포함되어 있습니다.</span><span class='content-text'><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7693943' target='_blank'>Aston 대학교와 영국 그레이트 웨스턴 대형 병원 간 공동 연구</a>에 의하면 벌꿀이 항균 작용과 감염에 효능이 있다고 밝혀지기도 했으며, <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5418133' target='_blank'>사우디 아라비아 왕립 대학교와 Southampton 대학, Cardiff metropolitan 대학 간 공동 연구</a>에서는 꿀이 아토피 환자들에게 다소 긍정적인 영향을 주었다는 연구 결과가 나오기도 했습니다.</span><span class='content-text'>이는 <a href='https://www.everydayhealth.com/eczema/honey-secret-clear-skin-you-have-eczema' target='_blank'>벌꿀이 가진 다음과 같은 효능들</a> 때문으로 추정되는데요.</span><ul class='content-list'><li class='content-listitem'>벌꿀의 메틸글리옥살이라는 성분으로 인한 항균 작용</li><li class='content-listitem'>피부의 습도 유지에 도움을 줌</li></ul><div class='content-line'></div><div class='content-header'>⚠️ 그렇다면 도움되는 것도 사실일까? 주의사항!</div><span class='content-text'>그러나 벌꿀이 아토피 증상에 영향을 주었다는 연구 결과가 있으나 아직은 그 수가 적으며, <u>전문가들은 효과가 있을 수는 있지만 아직 과학적인 연구가 부족하고 보다 안정적인 선택지들이 있기에</u> 굳이 꿀을 피부에 바르는 것을 권장하지는 않습니다.</span><span class='content-text'>그리고 앞서 말한 연구 결과들은 ‘마누카 꿀’이라고 하는 <u>뉴질랜드의 마누카 숲에서 생산되는 꿀과 의료용 꿀들로 적용이 된 연구</u>라 일반적인 꿀들은 유효하지 않습니다.</span><span class='content-text'>또한 다음과 같은 사람들은 더욱 주의해야 하는데요,</span><ul class='content-list'><li class='content-listitem'><u>벌꿀에 알러지</u>가 있다면 오히려 <u>발작 현상</u>을 일으킬 수 있으므로, 이러한 알러지가 있는지 확인이 필요함</li><li class='content-listitem'>u>당뇨병</u>을 지닌 사람들은 이러한 행위가 혈당치에 영향을 줄 수도 있으니 주의가 필요</li><li class='content-listitem'><a href='https://www.everydayhealth.com/botulism/guide' target='_blank'>생후 1년이 지나지 않은 유아는 오히려 꿀을 피부로 바르는 행위로 보툴리즘이라고 하는 마비증상</a>이 나타날 수 있으니 금지</li></ul><span class='content-text'>보다 많은 연구들이 진행되어 정말 벌꿀이 아토피에 도움을 줄 수 있는지 규명되서, 새로운 안정적인 치료 선택지가 나올 수 있다면 좋을 것 같네요.</span>`,
    createdAt: '2022-11-10',
    tagType: 'FOOD',
  },
  32: {
    title: '자기 전 젖은 드레싱으로 피부 둘러싸기',
    content: `<span class='content-text'>최근 들어 불면증으로 잠에 들기 힘든 한국인이 많아지고 있다고 합니다.<br />이런 상황 속, 아토피 환우분들과 환자의 보호자 분들의 수면은 건강하신가요?</span><span class='content-text'>아토피는 환우 분들, 보호자 분들의 수면에도 영향을 주는데요.<br />이번 뉴스레터는 그런 아토피 환자분들에게 도움될 수 있는 한가지 관리법에 대해 작성해보려 합니다.</span><span class='content-text'>바로 Wet wrap 이라고 하는 방법에 대해서입니다!</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/201504558-8c91ad6c-6f47-4c26-9677-cb2744ed78ce.png' /><div class='content-line'></div><div class='content-header'>💧 젖은… 랩 방법?</div><span class='content-text'><strong>젖은 붕대</strong>, <strong>젖은 드레싱 치료법</strong>이라고도 불리는데요.<br />한마디로 수분이 담긴 소재로 증상 부위를 둘러싸는 방법입니다!</span><span class='content-text'><a href='https://pubmed.ncbi.nlm.nih.gov/25017527' target='_blank'>미국에 있는 National Jewish Health 측에서 진행한 연구</a>에서 이 방법의 효과를 입증하였으며, 미국에서는 병원에서 주로 권장하는 관리 방법 중 1가지라고 하는데요. Cleveland 대학병원의 피부과 전문의인 <a href='https://my.clevelandclinic.org/staff/7887-melissa-piliang' target='_blank'>Melissa Piliang</a>도 아토피 환자들에게 많이 추천하는 방법 중 하나라고 합니다.</span><span class='content-text'>이 방법이 사용되는 경우는 주로 중등도 이상의 증상을 지닌, 기존 스테로이드 치료제가 유효하지 않은, 어린 아이들이라고 합니다.</span><span class='content-text'>미국 Mayo clinic의 알러지 전문가인 <a href='https://www.mayoclinic.org/biographies/montejo-jenny-m-m-d/bio-20477218' target='_blank'>Jenny Montejo</a>에 의하면 특히나 중증의 증상을 보이는 영유아들에게 매우 효과적이라고 말합니다.</span><span class='content-text'>부작용이 매우 적으며 있으며 아토피로 인해 느끼는 통증과 가려움증을 경감시켜줘 아기들이 울거나 잠을 설치는 것에 큰 도움이 된다고 합니다.</span><div class='content-line'></div><div class='content-header'>💬 그럼 어떻게 하면 되는 건데?</div><center><img class='content-img' src='https://user-images.githubusercontent.com/6462456/201504744-1f0d3c8e-9b4c-41c4-a457-ab7ac582336c.png' style='width: 60%;'/></center><span class='content-text'>이 치료법을 사용하기 전, 거즈와 드레싱이 깨끗한 상태로 관리되어 있는지를 확실히 해야 합니다.</span><span class='content-text'>적용하는 방법은 위에 있는 그림과 같은데요, 이를 설명해보면</span><ul class='content-list'><li style="list-style-type: decimal;">따뜻한 물로 면으로 된 거즈, 의료용 드레싱을 약간 적실 수 있도록 한다.</li><li style="list-style-type: decimal;">적신 거즈, 의료용 드레싱을 증상 부위에 둘러싼다.</li><li style="list-style-type: decimal;">이렇게 둘러싼 부위를 건조한 거즈, 의료용 드레싱으로 한 번 더 둘러싼다.</li><li style="list-style-type: decimal;">둘러싼 부위 위로 잠옷이나 트레이닝 복과 같은 옷을 입는다.</li><li style="list-style-type: decimal;">최소 2시간에서 수면 시간동안 내버려둔다.</li></ul><span class='content-text'>이와 관련해서 <a href='https://www.amc.seoul.kr/asan/healthtv/video/videoDetail.do?videoId=1094' target='_blank'>서울 아산병원에서 영상</a>을 만들었는데요, 이 링크를 참조하시고 적용하셔도 좋을 듯 합니다!</span><span class='content-text'>부작용이 적어 많이 추천되는 방법이기도 하지만, 증상 부위가 머리카락 등으로 깨끗하지 않은 상태에서 진행된다면 오히려 감염 위험성을 높일 수 있으니 반드시 모든 게 깔끔한 상태에서 진행하셔야겠습니다!</span><span class='content-text'>또한, 만약 <u>스테로이드제를 바르고 계시는 환자분이라면 이 방법은 스테로이드 흡수량을 높일 수 있으므로</u> 이에 대해서 반드시 의사와 상의를 하고 해주셔야 합니다!</span>`,
    createdAt: '2022-11-10',
    tagType: 'SLEEP',
  },
  33: {
    title: '아토피 후 남는 흉터… 없앨 수 있을까?',
    content: `<span class='content-text'>아토피 증상은 피부에 발생해서 직장에 있을 때, 약속이 있을 때 증상이 생기면 항상 당황스럽게 하는데요.<br />더 나아가서 증상이 나아져도 가끔, 피부에 그 흔적이 남는 경우가 있죠…</span><span class='content-text'>증상도 곤란한데 흔적까지 남아버려서 힘들게 하는 아토피.</span><span class='content-text'>이번에는 그 흔적이 왜 생기는지, 막을 수 있는 방법은 없는지에 대한 뉴스레터입니다.</span><center><img class='content-img' src='https://user-images.githubusercontent.com/6462456/201505185-b993ad27-226f-40d8-844a-b92351bbf680.png' style='width: 60%;'/></center><div class='content-line'></div><div class='content-header'>😢 증상은 가라앉는데 흔적은 왜?</div><span class='content-text'>아토피 증상이 발생한 피부에 증상이 나아지고 난 후에도 유독 다른 피부와는 색깔이 다르게 되는 경우가 있죠. 영어권 국가에서는 이걸 <strong>Eczema scar</strong>라고 표현합니다.</span><span class='content-text'>주로 붉거나 밝은 피부톤을 가진 분들은 다른 피부보다는 밝은 색이, 어두운 피부톤을 가진 분들은 다른 피부보다 어두운 색의 형태로 드러난다고 합니다.</span><span class='content-text'>원인은 <a href='https://www.verywellhealth.com/eczema-scars-5200943' target='_blank'>증상이 발생하고 참기 어려운 정도의 가려움증이 생겨 긁다가 피부에 출혈이 발생할 정도의 상처가 발생한 후 회복하는 과정</a>에서 생긴다고 합니다.</span><span class='content-text'>또한, 장기간의 스테로이드제 복용도 이러한 아토피 흔적을 남길 수 있는 원인이 될 수 있다고 합니다.</span><div class='content-line'></div><div class='content-header'>🩺 예방하거나 없앨 수 있어?</div><span class='content-text'>초기에는 그 부위만 색이 많이 다를 수 있지만 Miami 의대 출신의 피부과 전문의인 <a href='https://www.verywellhealth.com/ask-an-expert-are-pigmentation-changes-from-eczema-permanent-5219375' target='_blank'>Heather Woolery-Lloyd</a>는 대부분은 영구적으로 강한 색차이를 보이지는 않을 것이라고 합니다.</span><span class='content-text'>시간이 가면 이 아토피 흔적은 점점 옅어지기는 하지만 완전히 사라진다고 언급되지는 않네요...</span><span class='content-text'>특정한 시술이 아니면 완벽히 제거할 수는 없지만 이러한 일을 <a href='https://www.verywellhealth.com/eczema-scars-5200943' target='_blank'>예방하거나 외출 시 관리 방법들</a>은 다음과 같습니다.</span><span class='content-text'><strong>[예방]</strong></span><ul class='content-list'><li class='content-listitem'>오트밀을 녹인 미지근한 물에 10~15분 간 목욕을 통해 가려움증 완화</li><li class='content-listitem'>증상 부위를 시원하게 해서 가려움증을 경감</li><li class='content-listitem'>손톱을 짧게 잘라 긁어도 상처가 나지 않게 유의</li></ul><span class='content-text'><strong>[관리]</strong></span><ul class='content-list'><li class='content-listitem'>밝은 피부톤이라면 미백크림을 흉터부위에 발라 밝은 색으로 만듬</li><li class='content-listitem'>검증되거나 처방받은 흉터용 연고를 통해 흉터의 색을 옅게 함</li><li class='content-listitem'>다소 통증이 있고, 다수의 치료를 진행해야 하나 레이저 치료를 진행</li></ul>`,
    createdAt: '2022-11-10',
    tagType: 'OTHERWISE',
  },
  34: {
    title: '일광욕, 피부에 안 좋은 영향을 줄까?',
    content: `<span class='content-text'><a href='https://www.weato.net/newsletter/36' target='_blank'>자외선으로 아토피를 치료하는 광선 치료</a>에 대한 뉴스레터 기억하시나요?</span><span class='content-text'>광선 치료에 사용되는 자외선을 일상 생활에서도 쉽게 접할 수 있는데요, 바로 태양입니다!</span><span class='content-text'>햇빛은 자외선 말고도 비타민 D를 합성시켜줘 인체에 도움을 줄 수 있는데요, 이러한 영향 때문에 일광욕을 즐기시는 분들도 많습니다.</span><span class='content-text'>그런데 피부 자극에 예민한 아토피 환자 분들은 이러한 일광욕에 대해 예민한데, 어떻게 햇빛을 관리해야 하는지에 대해 알아보시죠!</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/201505636-9a176055-12ec-4129-93a6-2afd6aea24db.png' /><div class='content-line'></div><div class='content-header'>☀️ 햇빛은 아토피에 어떤 영향을?</div><span class='content-text'>앞서 말한 것처럼 햇빛에는 자외선 성분이 있어 염증을 억제해주며, 비타민 D를 합성하는 데에 도움을 줘 아토피 환자들에게 도움을 줄 수 있습니다.</span><span class='content-text'>게다가 <a href='https://www.jacionline.org/article/S0091-6749(19)30028-4/fulltext' target='_blank'>호주의 Western Australia 대학 측 연구</a>에 따르면 도움을 넘어서 햇빛에 노출이 잘 안 되면 아토피에 걸릴 확률이 높아진다는 연구 결과가 있습니다. 해당 연구팀은 비타민 D보다는 자외선이 이에 중요한 역할을 하였다고 분석했습니다. 그렇기에 충분한 일광욕을 한다면 아토피를 치료하는 데에도 도움이 될 수 있습니다.</span><span class='content-text'>그런데 이렇게 좋은 역할을 하는 햇빛이 일광욕을 했더니 오히려 증상이 악화되었다는 이야기도 있는데요.</span><span class='content-text'>이는 지나친 시간동안 일광욕을 해 오히려 피부가 손상이 되었거나, 햇빛 알러지가 생기게 된 경우, 광선치료를 받고 있는 상황에서 지나친 자외선 노출이 진행된 경우들이 해당합니다.</span><span class='content-text'>그렇기에 올바른 방법으로 일광욕을 하는 것이 중요하겠습니다.</span><div class='content-line'></div><div class='content-header'>📘 올바른 방법?</div><span class='content-text'>이러한 일광욕을 아토피 환자들이 도움되게끔 할 수 있는 적절한 내용들은 다음과 같습니다.</span><ul class='content-list'><li class='content-listitem'>University of California, San Francisco 피부과 교수인 <strong><a href='https://nationaleczema.org/blog/sun-exposure-and-eczema' target='_blank'>Peter M. Elias</a></strong>에 의하면 오전 10시~오후 3시 경에 진행하는 것이 좋으나 강한 직사광선이나 오랜 시간 노출되는 것은 기피할 것</li><li class='content-listitem'>SPF 15등급 정도에 해당하는 자외선 차단제를 바르는 것을 권장하나, 본인 피부 상황에 맞춰 변경하는 것도 좋음</li><li class='content-listitem'>1주일에 몇 번 정도의 주기로 진행하며 한 번 할 때마다 10~30분 동안 진행할 것을 권장</li><li class='content-listitem'>통풍성이 좋은 긴 옷을 입어 약한 피부에 닿는 햇빛의 강도를 경감</li></ul>`,
    createdAt: '2022-11-10',
    tagType: 'ENVIRONMENT',
  },
  35: {
    title: '세면 제품 살 때, 이 성분들은 주의!',
    content: `<span class='content-text'>지난 번 세면 뉴스레터에서는 전문가가 추천하는 제품에 대한 뉴스레터를 작성했었죠.</span><span class='content-text'>이번에는 제품 1개를 소개하는 걸 넘어서, 주의해야 할 성분에 대해서 좀 더 구체적으로 설명하는 뉴스레터를 써보려 합니다.</span><span class='content-text'>기피해야 될 성분들은 전문가들이 언급하는 성분들만 작성할 예정이니, 이를 참고하시고 일상의 세면과 화장에 도움되기를 바랍니다!</span><img class='content-img' src='https://user-images.githubusercontent.com/6462456/201505916-53950048-91e1-4c3a-92e7-e73d6be0e9a2.png' /><div class='content-line'></div><div class='content-header'>📑 전문가들이 언급하는 피해야 할 성분 리스트</div><span class='content-text'>다음의 목록들은 미국의 Northwestern 대학 피부과 조교수인 <strong>Peter Lio</strong>, Children's Hospital of Philadelphia에서 피부과 전문의로 재직 중인 <strong>Jeff Yu</strong>가 언급하는 <a href='https://nationaleczema.org/blog/8-skincare-ingredients-to-avoid' target='_blank'>피해야 할 성분들</a>입니다.</span><ul class='content-list'><li class='content-listitem'>향이 있는 물질<ul class='content-list'><li style='list-style: circle;'>좋은 향을 위해 첨가가 되기는 하지만, 이러한 성분들이 아토피 환자들의 피부에는 악영향을 끼쳐 기피하는 것을 권장</li></ul></li><li class='content-listitem'>에센셜 오일<ul class='content-list'><li style='list-style: circle;'>천연 향 물질도 합성 향 물질과 거의 비슷한 수준으로 알러지 성분을 유발 가능</li><li style='list-style: circle;'>예를 들어 찻잎의 경우 항균, 항박테리아 성분 등 유익한 기능이 많으나 알러지를 유발할 위험도 높아 기피하는 것을 권장</li></ul></li><li class='content-listitem'>요소 (우레아)<ul class='content-list'><li style='list-style: circle;'>건선과 굳은살, 티눈에는 유익할 수 있으나 아토피 환자들의 피부장벽을 손상시킬 수 있음</li></ul></li><li class='content-listitem'>라놀린<ul class='content-list'><li style='list-style: circle;'>양털에서 추출한 기름으로 아토피 증상 유발의 원인이 될 수 있음</li></ul></li><li class='content-listitem'>레티노이드<ul class='content-list'><li style='list-style: circle;'>항노화작용에 도움을 주지만 역시 증상 유발의 원인이 되기도 하므로 기피하거나 사용해도 매우 적은 성분이 들어있어야 함</li></ul></li><li class='content-listitem'>코카미도프로필베타인<ul class='content-list'><li style='list-style: circle;'>샴푸, 바디워시 등 다양한 세면용품에서 사용하는 성분으로 접촉성 피부염 유발 가능</li></ul></li><li class='content-listitem'>프로필렌글리콜<ul class='content-list'><li style='list-style: circle;'>스테로이드제 연고, 액체 항히스타민제에도 많이 포함된 성분으로 만약 해당 성분에 알러지가 있다면 <u>약품치료임에도 불구하고 증상이 나타날 수도 있음</u></li></ul></li><li class='content-listitem'>에탄올<ul class='content-list'><li style='list-style: circle;'>젤 형태의 제품에 많이 포함되어 있으며, 아토피 환자의 피부를 건조하게 하고 통증을 발생할 수 있어 기피를 권장</li></ul></li></ul>`,
    createdAt: '2022-11-10',
    tagType: 'CLEANING',
  },
};

function Newsletter(props) {
  const router = useRouter();
  const { newsletterId } = props;
  const newsletterData = newsletterDatas[newsletterId];
  console.log(newsletterId, newsletterData);

  const { login, user, token } = useContext(Context);

  const [percentage, setPercentage] = useState(0.0);

  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [scrap, setScrap] = useState(false);
  const [scrapCount, setScrapCount] = useState(0);

  const getScrollPercentage = () => {
    const scroll = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const viewport = scrollHeight - clientHeight;
    const percentage = (scroll / viewport) * 100;

    return setPercentage(percentage);
  };

  // 스크롤 퍼센테이지 진행 바 업데이트 로직
  useEffect(() => {
    window.addEventListener('scroll', getScrollPercentage);
    return () => window.removeEventListener('scroll', getScrollPercentage);
  }, []);

  // 페이지 로딩 후 기본 값 세팅
  useEffect(() => {
    setLike(newsletterData.likeChecker);
    // setLikeCount(newsletterData.likeCount);
    setScrap(newsletterData.bookmarkChecker);
    // setScrapCount(newsletterData.bookmarkCount);
  }, []);

  const onClickLike = async (event) => {
    if (!login) {
      router.push(`/login`);
      return;
    }

    try {
      if (!like) {
        const response = await axios({
          method: 'post',
          url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/likes`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLike(true);
        setLikeCount(response.data.likecount);
        // alert('좋아요 완료');
      } else {
        const response = await axios({
          method: 'delete',
          url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/likes`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLike(false);
        setLikeCount(likeCount - 1);
        // alert('좋아요 취소 완료');
      }
    } catch (error) {
      if (error.response.status === 400) {
        setLike(!like);
      } else {
        alert(error);
      }
    }
  };

  const onClickScrap = async (event) => {
    if (!login) {
      router.push(`/login`);
      return;
    }

    try {
      if (!scrap) {
        const response = await axios({
          method: 'post',
          url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/bookmarks`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setScrap(true);
        setScrapCount(response.data.bookmarkCount);
        // alert('스크랩 완료');
      } else {
        const response = await axios({
          method: 'delete',
          url: `https://www.weato.kro.kr/api/newsletters/${newsletterId}/bookmarks`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setScrap(false);
        setScrapCount(response.data.bookmarkCount);
        // alert('스크랩 취소 완료');
      }
    } catch (error) {
      if (error.response.status === 400) {
        setScrap(!scrap);
      } else {
        alert(error);
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title>뉴스레터 - {newsletterData.title}</title>
      </Head>

      <ProgressBar percentage={percentage} />

      <Content>
        <ContentHeader>
          <Link href={`/newsletter`}>
            <a>뉴스레터</a>
          </Link>
          <strong>&#xE001;</strong>
          <Link href={`/newsletter?tag=${toQueryTags[newsletterData.tagType]}`}>
            <a>{toKoreanTags[newsletterData.tagType]}</a>
          </Link>
        </ContentHeader>

        <NewsletterForm>
          <header className="header">{newsletterData.title}</header>
          <span className="header-subscription">
            본 뉴스레터는 전문기자의 기사를 기반으로 작성되었습니다.
          </span>
          <date className="header-date">
            {newsletterData.createdAt.slice(0, 10).replaceAll('-', '.')}
          </date>
        </NewsletterForm>

        <NewsletterForm
          dangerouslySetInnerHTML={{ __html: newsletterData.content }}
        />
      </Content>

      <ButtonRow>
        <ActionButton
          btnType="like"
          value={likeCount}
          onClick={onClickLike}
          active={login && like}
        />
        <ActionButton
          btnType="scrap"
          value={scrapCount}
          onClick={onClickScrap}
          active={login && scrap}
        />
      </ButtonRow>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;

  return {
    props: {
      newsletterId: query.id,
    },
  };
};

export default Newsletter;
