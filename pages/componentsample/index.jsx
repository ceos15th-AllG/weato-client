/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from 'next/image';

import logo_horizontal from '../../public/logo_horizontal.png';
import logo_vertical from '../../public/logo_vertical.png';
import {
  main,
  sub,
  gray01,
  gray02,
  gray03,
  gray04,
  gray05,
  gray06,
  gray07,
  text_black,
  text_white,
  semantic_red,
  tag_medicine,
  tag_sleep,
  tag_water,
  tag_food,
  tag_env,
  tag_etc,
} from '../../styles/Colors';

const ComponentLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 300px;
`;

const ComponentHeader = styled.header`
  margin-bottom: 50px;
  font-size: 36px;
  font-weight: bold;
`;

const ComponentSubHeader = styled.header`
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: bold;
`;

const ComponentContent = styled.section`
  margin-bottom: 100px;
  font-size: 18px;

  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 14px;
  }
`;

export default function ComponentSample() {
  return (
    <ComponentLayout>
      <ComponentHeader>컴포넌트 샘플 페이지</ComponentHeader>
      <ComponentContent>
        임시로 디자인시스템에서 구현한 컴포넌트들을 띄워주고 테스팅하기 위한
        화면입니다.
      </ComponentContent>

      <ComponentHeader>Logo</ComponentHeader>
      <ComponentContent>
        <div>
          <Image src={logo_horizontal} width={485} height={108} />
          <div>가로 로고</div>
        </div>
        <div>
          <Image src={logo_vertical} width={303.54} height={212.42} />
          <div>세로 로고</div>
        </div>
      </ComponentContent>

      <ComponentHeader>Color</ComponentHeader>
      <ComponentSubHeader>Main Color</ComponentSubHeader>
      <ComponentContent>
        <div
          css={css`
            background-color: ${main};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          Main
        </div>
        <div
          css={css`
            background-color: ${sub};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          Sub
        </div>
      </ComponentContent>
      <ComponentSubHeader>Semantic</ComponentSubHeader>
      <ComponentContent>
        <div
          css={css`
            background-color: ${semantic_red};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          Red
        </div>
      </ComponentContent>
      <ComponentSubHeader>Gray</ComponentSubHeader>
      <ComponentContent>
        <div
          css={css`
            background-color: ${gray01};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          Gray01
        </div>
        <div
          css={css`
            background-color: ${gray02};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          Gray02
        </div>
        <div
          css={css`
            background-color: ${gray03};
            width: 100px;
            height: 100px;
            margin-right: 20px;

            color: white;
          `}
        >
          Gray03
        </div>
        <div
          css={css`
            background-color: ${gray04};
            width: 100px;
            height: 100px;
            margin-right: 20px;

            color: white;
          `}
        >
          Gray04
        </div>
        <div
          css={css`
            background-color: ${gray05};
            width: 100px;
            height: 100px;
            margin-right: 20px;

            color: white;
          `}
        >
          Gray05
        </div>
        <div
          css={css`
            background-color: ${gray06};
            width: 100px;
            height: 100px;
            margin-right: 20px;

            color: white;
          `}
        >
          Gray06
        </div>
        <div
          css={css`
            background-color: ${gray07};
            width: 100px;
            height: 100px;
            margin-right: 20px;

            color: white;
          `}
        >
          Gray07
        </div>
      </ComponentContent>
      <ComponentSubHeader>Text</ComponentSubHeader>
      <ComponentContent>
        <div
          css={css`
            background-color: ${text_black};
            width: 100px;
            height: 100px;
            margin-right: 20px;
            color: white;
          `}
        >
          black
        </div>
        <div
          css={css`
            background-color: ${text_white};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          white
        </div>
      </ComponentContent>
      <ComponentSubHeader>Tag</ComponentSubHeader>
      <ComponentContent>
        <div
          css={css`
            background-color: ${tag_medicine};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          약품
        </div>
        <div
          css={css`
            background-color: ${tag_sleep};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          수면
        </div>
        <div
          css={css`
            background-color: ${tag_water};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          세면
        </div>
        <div
          css={css`
            background-color: ${tag_food};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          음식
        </div>
        <div
          css={css`
            background-color: ${tag_env};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          환경
        </div>
        <div
          css={css`
            background-color: ${tag_etc};
            width: 100px;
            height: 100px;
            margin-right: 20px;
          `}
        >
          기타
        </div>
      </ComponentContent>

      {/* <ComponentHeader>Button</ComponentHeader>
      <ComponentContent>
        <div></div>
        <div></div>
      </ComponentContent> */}
    </ComponentLayout>
  );
}
