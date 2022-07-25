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

import Button from '../../src/components/common/ButtonContainer';
import Navbar from '../../src/components/main/Navbar';
import Tag from '../../src/components/common/Tag';

import {
  Display1,
  Headline2,
  Headline1,
  Subhead4,
  Subhead3,
  Body5,
  Body4,
  Body3,
  Body2,
  Body1,
  Tag1,
} from '../../styles/FontStyle';

import icon_heart_fill from '../../public/icon_heart_fill.png';
import icon_heart from '../../public/icon_heart.png';
import icon_search from '../../public/icon_search.png';
import icon_bookmark from '../../public/icon_bookmark.png';
import icon_bookmark_fill from '../../public/icon_bookmark_fill.png';
import icon_system from '../../public/icon_system.png';
import icon_view from '../../public/icon_view.png';
import icon_leftarrow from '../../public/icon_leftarrow.png';
import icon_rightarrow from '../../public/icon_rightarrow.png';
import icon_cancel from '../../public/icon_cancel.png';

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

    margin-right: 20px;
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

      {/* 로고 */}
      <ComponentHeader>Logo</ComponentHeader>
      <ComponentSubHeader>가로 로고</ComponentSubHeader>
      <ComponentContent>
        <div>
          <Image src={logo_horizontal} width={485} height={108} />
        </div>
      </ComponentContent>
      <ComponentSubHeader>세로 로고</ComponentSubHeader>
      <ComponentContent>
        <div>
          <Image src={logo_vertical} width={303.54} height={212.42} />
        </div>
      </ComponentContent>

      {/* 컬러 */}
      <ComponentHeader>Color</ComponentHeader>
      <ComponentSubHeader>Main Color</ComponentSubHeader>
      <ComponentContent>
        <div
          css={css`
            background-color: ${main};
            width: 100px;
            height: 100px;
          `}
        >
          Main
        </div>
        <div
          css={css`
            background-color: ${sub};
            width: 100px;
            height: 100px;
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
          `}
        >
          Gray01
        </div>
        <div
          css={css`
            background-color: ${gray02};
            width: 100px;
            height: 100px;
          `}
        >
          Gray02
        </div>
        <div
          css={css`
            background-color: ${gray03};
            width: 100px;
            height: 100px;

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
          `}
        >
          약품
        </div>
        <div
          css={css`
            background-color: ${tag_sleep};
            width: 100px;
            height: 100px;
          `}
        >
          수면
        </div>
        <div
          css={css`
            background-color: ${tag_water};
            width: 100px;
            height: 100px;
          `}
        >
          세면
        </div>
        <div
          css={css`
            background-color: ${tag_food};
            width: 100px;
            height: 100px;
          `}
        >
          음식
        </div>
        <div
          css={css`
            background-color: ${tag_env};
            width: 100px;
            height: 100px;
          `}
        >
          환경
        </div>
        <div
          css={css`
            background-color: ${tag_etc};
            width: 100px;
            height: 100px;
          `}
        >
          기타
        </div>
      </ComponentContent>

      {/* 버튼 */}
      <ComponentHeader>Button</ComponentHeader>
      <ComponentContent>
        <div>
          <Button text="type 1" btnType="1" />
        </div>
        <div>
          <Button text="type 1" btnType="1" disabled />
        </div>
        <div>{`커뮤니티 > 글쓰기 > 발행`}</div>
      </ComponentContent>
      <ComponentContent>
        <div>
          <Button text="type 2" btnType="2" />
        </div>
        <div>
          <Button text="type 2" btnType="2" disabled />
        </div>
        <div>{`커뮤니티 > 댓글 > 등록`}</div>
      </ComponentContent>
      <ComponentContent>
        <div>
          <Button text="type 3" btnType="3" />
        </div>
        <div>
          <Button text="type 3" btnType="3" disabled />
        </div>
        <div>{`회원가입 > 중복 인증`}</div>
      </ComponentContent>
      <ComponentContent>
        <div>
          <Button text="type 4" btnType="4" />
        </div>
        <div>
          <Button text="type 4" btnType="4" disabled />
        </div>
        <div>{`더보기 / 저장`}</div>
      </ComponentContent>
      <ComponentContent>
        <div>
          <Button text="type 5" btnType="5" />
        </div>
        <div>
          <Button text="type 5" btnType="5" disabled />
        </div>
        <div>{`회원가입 > 상세 정보 입력하기`}</div>
      </ComponentContent>
      <ComponentContent>
        <div>
          <Button text="type 6" btnType="6" />
        </div>
        <div>
          <Button text="type 6" btnType="6" disabled />
        </div>
      </ComponentContent>
      <ComponentContent>
        <div>
          <Button text="type 7" btnType="7" />
        </div>
        <div>
          <Button text="type 7" btnType="7" disabled />
        </div>
        <div>{`글 작성하기`}</div>
      </ComponentContent>
      <ComponentContent>
        <div>
          <Button text="type 8" btnType="8" />
        </div>
        <div>
          <Button text="type 8" btnType="8" disabled />
        </div>
      </ComponentContent>

      {/* 드롭다운 */}
      <ComponentHeader>Dropdown</ComponentHeader>
      <ComponentContent>잠시 비워 놓겠음</ComponentContent>

      {/* 네비게이션 바 */}
      <ComponentHeader>Navigation Bar</ComponentHeader>
      <ComponentSubHeader>
        팁 : 밑에 깨져 보이니까 저 위에 붙은 거 참고하세요~~
      </ComponentSubHeader>
      <ComponentContent>
        <div>
          <Navbar />
        </div>
      </ComponentContent>

      {/* 탭 그룹 */}
      <ComponentHeader>Tap Group</ComponentHeader>
      <ComponentContent>잠시 비워 놓겠음</ComponentContent>

      {/* 태그 */}
      <ComponentHeader>Tag</ComponentHeader>
      <ComponentContent>
        <div>
          <Tag text={'약품'} />
        </div>
        <div>
          <Tag text={'수면'} />
        </div>
        <div>
          <Tag text={'세면'} />
        </div>
        <div>
          <Tag text={'음식'} />
        </div>
        <div>
          <Tag text={'환경'} />
        </div>
        <div>
          <Tag text={'기타'} />
        </div>
      </ComponentContent>

      {/* 쉐도우 */}
      <ComponentHeader>Shadow</ComponentHeader>
      <ComponentContent>
        <div
          css={css`
            width: 200px;
            height: 200px;
            background-color: white;
            filter: drop-shadow(-4px -4px 10px rgba(0, 0, 0, 0.04))
              drop-shadow(5px 5px 12px rgba(0, 0, 0, 0.07));
          `}
        >
          drop-shadow 적용
        </div>
      </ComponentContent>

      {/* 박스 모서리 */}
      <ComponentHeader>Radius</ComponentHeader>
      <ComponentContent>
        <div
          css={css`
            width: 200px;
            height: 48px;
            color: white;
            background-color: green;
            border-radius: 4px;
          `}
        >
          4px
        </div>
        <div
          css={css`
            width: 200px;
            height: 96px;
            color: white;
            background-color: green;
            border-radius: 8px;
          `}
        >
          8px
        </div>
      </ComponentContent>

      {/* 체크박스 */}
      <ComponentHeader>Checkbox</ComponentHeader>
      <ComponentContent>잠시 비워 놓겠음</ComponentContent>

      {/* 타이포그래피 */}
      <ComponentHeader>Typography</ComponentHeader>
      <ComponentContent>
        <span css={Display1}>Display1 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Headline2}>Headline2 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Headline1}>Headline1 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Subhead4}>Subhead4 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Subhead3}>Subhead3 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Body5}>Body5 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Body4}>Body4 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Body3}>Body3 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Body2}>Body2 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Body1}>Body1 폰트입니다.</span>
      </ComponentContent>
      <ComponentContent>
        <span css={Tag1}>Tag 폰트입니다.</span>
      </ComponentContent>

      {/* 아이콘 */}
      <ComponentHeader>Icon</ComponentHeader>
      <ComponentContent>
        <div>
          <Image src={icon_heart_fill} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_heart} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_search} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_bookmark} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_bookmark_fill} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_system} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_view} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_leftarrow} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_rightarrow} width="40" height="40" />
        </div>
        <div>
          <Image src={icon_cancel} width="40" height="40" />
        </div>
      </ComponentContent>
    </ComponentLayout>
  );
}
