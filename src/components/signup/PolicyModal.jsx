import styled from '@emotion/styled';

import { useState, useRef } from 'react';

import Image from 'next/image';

import Button from '@common/ButtonContainer';

import { Headline2 } from '@styles/FontStyle';

import { text_black } from '@styles/Colors';

import icon_quit_black from '@public/signup/icon_quit_black.png';

const Layout = styled.div`
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  width: 650px;
  height: 715px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: white;
`;

const TopBox = styled.div`
  width: 100%;
  height: 117px;

  position: relative;

  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 117px;

    display: flex;
    justify-content: center;
    align-items: center;

    ${Headline2}

    color : ${text_black};
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  padding: 0px 49px;

  .header {
    font-size: 16px;
    font-weight: 700;
    margin-top: 14px;
    margin-bottom: 18px;
  }

  .text {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 18px;
  }

  .list {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 18px;

    list-style: disc outside none;
  }

  .listitem {
    list-style: disc outside none;
  }

  .table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    margin: 8px 0px 24px;

    tr {
      height: 155px;
    }

    th {
      margin: 0px 16px;
      padding: 0px 16px;

      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      text-align: center;

      border: 1px solid black;
    }

    td {
      &:nth-child(3) {
        max-width: 163px;
      }
      &:nth-child(4) {
        max-width: 120px;
      }
      &:nth-child(5) {
        max-width: 76px;
      }

      font-size: 12px;
      font-weight: 300;
      line-height: 18px;
      text-align: center;

      padding: 0px 14px;

      border: 1px solid black;
    }
  }

  span:last-child {
    margin-bottom: 32px;
  }
`;

const QuitBox = styled.div`
  width: 24.45px;
  height: 24.45px;

  position: absolute;
  top: 43px;
  right: 43.55px;
`;

const ButtonRow = styled.div`
  height: 100px;
  display: flex;
`;

const PolicyModal = ({ setModalActive, setCheck }) => {
  const [confirm, setConfirm] = useState(true);
  const scrollRef = useRef(null);

  const onCheck = (event) => {
    if (confirm) {
      setCheck(true);
      setModalActive(false);
    }
  };

  const handleScroll = (event) => {
    if (
      event.currentTarget.scrollTop >=
      event.currentTarget.scrollHeight - event.currentTarget.clientHeight
    ) {
      setConfirm(true);
    }
  };

  return (
    <Layout>
      <TopBox>
        <QuitBox
          onClick={() => {
            setModalActive(false);
          }}
        >
          <Image src={icon_quit_black} width={24.45} height={24.45} alt="" />
        </QuitBox>

        <div className="header">이용약관</div>
      </TopBox>

      <ContentBox ref={scrollRef} onScroll={handleScroll}>
        <span className="header">[민감정보(건강정보) 수집 및 이용약관]</span>
        <span className="text">
          All.G는 개인 민감정보보호법 제23조(민감정보 처리제한), 동법 시행령 제
          18조(민감정보 범위), 표준지침 제15조 (민감정보처리), 민감정보 정의,
          종류, 동의사항 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의
          민감정보 처리제한 규정을 준수하며, 관련 법령에 의거한
          개인민감정보취급방침을 정하여 이용자 권익 보호에 최선을 다하고
          있습니다.
        </span>
        <span className="text">
          본 개인 민감정보취급방침은 회사가 제공하는 Weato (이하
          &#8220;서비스&#8221;)에 적용되며 다음과 같은 내용을 담고 있습니다.
        </span>

        <span className="header">[민감정보 수집 및 이용 목적]</span>
        <span className="text">
          저희는 민감정보를 다음의 목적을 위해 취급합니다. 취급한 민감정보는
          다음 목적 이외의 용도로는 사용되지 않으며 목적 변경 시에는 사전 동의를
          구할 예정입니다.
        </span>
        <table className="table">
          <thead>
            <tr>
              <th>구분</th>
              <th>필수</th>
              <th>민감정보 수집항목</th>
              <th>이용항목</th>
              <th>보유기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>네이버 회원가입</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
            <tr>
              <td>나이</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
            <tr>
              <td>아토피 병력 기간</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
            <tr>
              <td>아토피 재발 여부</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
            <tr>
              <td>아토피 증상 정도</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
            <tr>
              <td>아토피 관리 영역</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
            <tr>
              <td>추가 관심사</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
            <tr>
              <td>아토피 증상 점수</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
            <tr>
              <td>아토피 관리 방법</td>
              <td>필수</td>
              <td>
                나이, 아토피 병력 기간, 아토피 재발 여부, 아토피 증상 정도,
                아토피 증상 점수, 아토피 관리 영역, 아토피 관리 방법, 추가
                관심사
              </td>
              <td>
                맞춤 정보 서비스 제공, 서비스 이용에 대한 분석 및 통계 제공,
                연구 및 통계분석자료 활용
              </td>
              <td>회원탈퇴 전까지</td>
            </tr>
          </tbody>
        </table>
        <ul className="list">
          <li className="listitem">
            제3조 개인 민감정보 수집 및 이용에 대한 동의
          </li>
          <li className="listitem">
            &#8220;회사&#8221;는 이용자들이 &#8220;회사&#8221;의 개인 민감정보
            보호정책 또는 이용약관의 내용에 대하여 「동의 합니다.」버튼을 클릭할
            수 있는 절차를 마련하여, 「동의합니다.」버튼을 클릭하면 개인
            민감정보 수집 및 이용에 대해 동의한 것으로 봅니다.
          </li>
        </ul>

        <ul className="list">
          <li className="listitem">제4조 개인 민감정보의 처리 및 보유 기간</li>
          <li className="listitem">
            &#8220;회사&#8221;는 이용자가 회원자격을 유지하고 있는 동안 수집된
            이용자의 개인정보를 보유·이용할 수 있으며, 이용자가 탈퇴하거나
            자격을 상실할 경우에는 이용자의 별도 요청이 없더라도 수집된
            회원정보를 삭제 및 파기합니다. 단, 이용자의 회원탈퇴 또는 회원자격
            상실에도 불구하고 다음의 정보에 대해서는 아래의 이유로 명시한 기간
            동안 보존하며, 이용자의 처리정지, 삭제 요구권의 대상이 되지
            아니합니다.
          </li>
        </ul>

        <ul className="list">
          <li className="listitem">휴면회원의 정보</li>
          <li className="listitem">
            보유 회원이 1년 이상 서비스를 이용하지 않고 연체나 채무불이행 상태가
            아닌 경우 해당 회원의 아이디는 &#8220;휴면회원&#8221;으로
            처리됩니다. 휴면회원으로 처리되면 회원 로그인을 비롯한 모든 서비스에
            대한 이용이 정지되고, &#8220;회사&#8221;는 휴면회원의 개인정보를
            제1항 및 제2항에 따른 정보 보유의 대상이 아닌 한 다른 ID와 별도로
            관리합니다. &#8220;회사&#8221;는 휴면회원 처리 예정일 30일 전 해당
            사실을 사전 안내하며, 회원은 휴면회원 처리일 이후에 서비스에서
            휴면상태 해지신청을 하는 즉시 다시 정상적으로 서비스를 이용할 수
            있습니다.
          </li>
        </ul>

        <span className="header">[동의거부의 권리]</span>
        <span className="text">
          귀하께서는 &#8220;Weato&#8221;의 민감정보 수집 및 이용에 대한 동의
          거부권이 있으며 동의 거부 시에는 Weato 서비스 이용이 불가능합니다.
        </span>
      </ContentBox>

      <ButtonRow>
        <Button
          text={'확인'}
          btnType={'6'}
          onClick={onCheck}
          disabled={!confirm}
        />
      </ButtonRow>
    </Layout>
  );
};

// PolicyModal.defaultProps = {
//   active: false,
// };

export default PolicyModal;
