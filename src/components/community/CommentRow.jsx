import styled from '@emotion/styled';

import Image from 'next/image';

import {
  Subhead3,
  Subhead4,
  Body1,
  Body2,
  Tag1,
} from '../../../styles/FontStyle';
import {
  gray01,
  gray03,
  gray05,
  gray06,
  text_black,
} from '../../../styles/Colors';

import profile_sample_big from '../../../public/profile_sample_big.png';
import icon_color_heart from '../../../public/icon_color_heart.png';
import icon_blank_heart from '../../../public/icon_blank_heart.png';
import icon_reply_comment from '../../../public/icon_reply_comment.png';

const Layout = styled.div`
  padding-top: 21px;
  padding-bottom: 34px;
  padding-left: ${(props) => `${props.reply ? '74px' : '0px'}`};

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${gray03};

  background-color: ${(props) => `${props.reply ? gray01 : 'transparent'}`};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const ReplyBlock = styled.div`
  position: relative;
  top: 100px;
`;

const Name = styled.span`
  margin-left: 10px;

  ${Subhead4}

  color : ${text_black};
`;

const Date = styled.span`
  margin-left: 7px;

  ${Body1}

  color : ${gray06};
`;

const LikeText = styled.span`
  width: 40px;

  margin-left: 8px;

  ${Subhead3}

  color : ${gray05};
`;

const Content = styled.span`
  width: 775px;

  margin-left: 52px;

  ${Body2}

  color : ${text_black};
`;

function CommentRow({ name, level, content, like, date, reply }) {
  return (
    <Layout reply={reply}>
      {/* <ReplyBlock>
        <Image src={icon_reply_comment} width={16} height={16} alt=''/>
      </ReplyBlock> */}
      <Row>
        <Box>
          <Image src={profile_sample_big} width={42} height={42} alt="" />
          <Name>{name}</Name>
          <Date>{date}</Date>
        </Box>
        <Box>
          <Image src={icon_color_heart} width={20} height={18} alt="" />
          <LikeText>{like}</LikeText>
        </Box>
      </Row>

      <Row>
        <Content>
          {content.split('\n').map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </Content>
      </Row>
    </Layout>
  );
}

export default CommentRow;
