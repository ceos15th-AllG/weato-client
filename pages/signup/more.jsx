/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState, useEffect, useCallback, useContext } from 'react';

import { useRouter } from 'next/router';

import axios from 'axios';

import Context from '@contexts/Context';

import { gray05, text_black } from '@styles/Colors';

import { Display1, Subhead4, Body1, Body2, Body3 } from '@styles/FontStyle';

import RadioButton from '@common/RadioButton';
import ButtonGroup from '@signup/ButtonGroup';
import Button from '@common/ButtonContainer';

const severityLists = ['SLIGHT', 'BELOWAVG', 'ABOVEAVG', 'SEVERETY'];

const Layout = styled.div`
  margin: 122px 635px 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopText = styled.div`
  ${Display1};

  color: ${text_black};
`;

const Content = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 97px;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const RowText = styled.span`
  width: 223px;

  text-align: left;

  ${Subhead4}

  color : ${text_black};
`;

const InputField = styled.input`
  flex: 1;

  height: 60px;

  ${Body3}

  outline : none;
  border: 1px solid ${gray05};
  border-radius: 8px;

  padding: 16px 20px;
`;

const TagRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;

  margin-bottom: 20px;
`;

const TagHeader = styled.header`
  ${Subhead4}

  color : ${text_black};
`;

const TagSubHeader = styled.span`
  margin-left: 24px;

  font-weight: 500;
  font-size: 14px;

  color: ${text_black};
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RadioButtonRow = styled.div`
  display: flex;

  margin-right: 63px;
`;

const SeverityRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SeverityText = styled.span`
  ${Body3}

  color : ${text_black};
`;

export default function More() {
  const router = useRouter();
  const { user, token } = useContext(Context);

  const [since, setSince] = useState('');
  const [sinceValid, setSinceValid] = useState(false);
  const [repeat, setRepeat] = useState([
    {
      text: 'O',
      active: false,
    },
    {
      text: 'X',
      active: false,
    },
  ]);
  const [repeatValid, setRepeatValid] = useState(false);
  const [family, setFamily] = useState([
    {
      text: 'O',
      active: false,
    },
    {
      text: 'X',
      active: false,
    },
  ]);
  const [familyValid, setFamilyValid] = useState(false);
  const [tags, setTags] = useState([
    {
      text: '보습제',
      active: false,
    },
    {
      text: '스테로이드제',
      active: false,
    },
    {
      text: '식단관리',
      active: false,
    },
    {
      text: '약물치료',
      active: false,
    },
    {
      text: '세면 습관 관리',
      active: false,
    },
    {
      text: '연고치료',
      active: false,
    },
    {
      text: '광선치료',
      active: false,
    },
    {
      text: '한방치료',
      active: false,
    },
    {
      text: '기타치료',
      active: false,
    },
  ]);
  const [tagValid, setTagValid] = useState(false);
  const [severity, setSeverity] = useState([
    {
      text: '1(경미) - 보습제, 피부연화제 등만 적용',
      active: false,
    },
    {
      text: '2(경도~중등도) - 약~중간 효능의 스테로이드제 등 국소 면역 억제제 적용',
      active: false,
    },
    {
      text: '3(중등~중증) - 중간~높은 효능의 스테로이드제 등 국소 면역 억제제 적용',
      active: false,
    },
    {
      text: '4(중증 이상) - 국소 치료에도 반응하지 않는 경우',
      active: false,
    },
  ]);
  const [severityValid, setSeverityValid] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const onChangeSince = useCallback((event) => {
    setSince(event.target.value);

    if (event.target.value !== '') {
      setSinceValid(true);
    } else {
      setSinceValid(false);
    }
  }, []);
  const toggleRepeatActive = (id) => {
    setRepeat(
      repeat.map((item, index) =>
        index === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    setRepeatValid(true);
  };
  const toggleFamilyActive = (id) => {
    setFamily(
      family.map((item, index) =>
        index === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    setFamilyValid(true);
  };
  const toggleTagsActive = (id) => {
    setTags(
      tags.map((tag, index) =>
        index === id ? { ...tag, active: !tag.active } : tag
      )
    );
  };
  const toggleSeverityActive = (id) => {
    setSeverity(
      severity.map((item, index) =>
        index === id ? { ...item, active: true } : { ...item, active: false }
      )
    );
    setSeverityValid(true);
  };
  const onConfirm = async (event) => {
    if (!confirm) {
      return;
    }

    try {
      const response = await axios({
        method: 'post',
        url: `https://www.weato.kro.kr/api/members/${user.id}/additional-info`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          years: Number.parseInt(since),
          recurrence: repeat[0].active,
          familyHistory: family[0].active,
          moisturizer: tags[0].active,
          steroid: tags[1].active,
          diet: tags[2].active,
          drug: tags[3].active,
          cleaning: tags[4].active,
          ointment: tags[5].active,
          laser: tags[6].active,
          orientalMedicine: tags[7].active,
          etc: tags[8].active,
          symptomDegree:
            severityLists[
              severity.findIndex((item) => {
                if (item.active) {
                  return true;
                }
              })
            ],
        },
      });

      router.push(`/`);
    } catch (error) {
      alert(error);
      alert('서버 요청이 불가능하네요...');
    }
  };

  // 현재 관리하는 방법 입력 1개 이상인지 체크
  useEffect(() => {
    if (tags.filter((tag) => tag.active).length > 0) {
      setTagValid(true);
    } else {
      setTagValid(false);
    }
  }, [tags]);

  // 전체 폼의 조건이 만족되었는지 감지
  useEffect(() => {
    if (sinceValid && repeatValid && familyValid && tagValid && severityValid) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [sinceValid, repeatValid, familyValid, tagValid, severityValid]);

  return (
    <Layout>
      <TopText>추가 정보 입력하기</TopText>

      <Content>
        <ContentItem
          css={css`
            margin-bottom: 40px;
          `}
        >
          <Row>
            <RowText>병력*</RowText>
            <InputField
              placeholder="연 단위로 입력해주세요"
              value={since}
              onChange={onChangeSince}
            />
          </Row>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 56px;
          `}
        >
          <Row>
            <RowText>재발 여부*</RowText>
            {repeat.map(({ text, active }, index) => (
              <RadioButtonRow key={index}>
                <RadioButton
                  text={text}
                  active={active}
                  toggleActive={() => {
                    toggleRepeatActive(index);
                  }}
                />
              </RadioButtonRow>
            ))}
          </Row>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 56px;
          `}
        >
          <Row>
            <RowText>가족력 여부*</RowText>
            {family.map(({ text, active }, index) => (
              <RadioButtonRow key={index}>
                <RadioButton
                  text={text}
                  active={active}
                  toggleActive={() => {
                    toggleFamilyActive(index);
                  }}
                />
              </RadioButtonRow>
            ))}
          </Row>
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 56px;
          `}
        >
          <TagRow>
            <TagHeader>현재 관리법*</TagHeader>
            <TagSubHeader>
              현재 관리하고 있는 모든 방법에 체크해주세요.
            </TagSubHeader>
          </TagRow>
          <ButtonGroup tags={tags} toggleActive={toggleTagsActive} />
        </ContentItem>

        <ContentItem
          css={css`
            margin-bottom: 78px;
          `}
        >
          <TagHeader
            css={css`
              margin-bottom: 15px;
            `}
          >
            증상 정도(1~4)*
          </TagHeader>
          {severity.map(({ text, active }, index) => (
            <SeverityRow
              key={index}
              css={css`
                margin-bottom: 20px;
              `}
            >
              <RadioButton
                text={text}
                active={active}
                toggleActive={() => {
                  toggleSeverityActive(index);
                }}
              />
            </SeverityRow>
          ))}
        </ContentItem>

        <ContentItem>
          <Button
            text="저장하기"
            btnType="6"
            disabled={!confirm}
            onClick={onConfirm}
          />
        </ContentItem>
      </Content>
    </Layout>
  );
}
