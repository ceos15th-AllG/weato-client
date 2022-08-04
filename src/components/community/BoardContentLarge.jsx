import styled from '@emotion/styled';

import Image from 'next/image';

import Tag from '@community/PostTag';

import { Subhead3, Body1 } from '@styles/FontStyle';

import { gray05, text_black } from '@styles/Colors';

import icon_views from '@public/icon_gray_views.png';

const Layout = styled.div`
  height: 352px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  width: 475px;

  margin-left: 44px;

  ${Subhead3}

  color : ${text_black};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Hashtag = styled.span`
  margin-right: 57px;

  ${Body1}
  text-align : right;

  color: ${text_black};
`;

const Views = styled.span`
  width: 37.46px;

  ${Body1}
  text-align : right;

  color: ${gray05};
`;

const Date = styled.span`
  width: 111px;

  ${Body1}
  text-align : right;

  color: ${gray05};
`;

function BoardContentLarge({ posts }) {
  return (
    <Layout>
      {posts.map(({ id, category, title, comments, tag, view, date }) => (
        <Box key={id}>
          <Box>
            <Tag text={category} />
            <Title>
              {title} [{comments}]
            </Title>
          </Box>
          <Box>
            <Hashtag>#{tag}</Hashtag>
            <Box>
              <Image src={icon_views} width={17.54} height={12} alt="" />
              <Views>{view}</Views>
            </Box>
            <Date>{date}</Date>
          </Box>
        </Box>
      ))}
    </Layout>
  );
}

export default BoardContentLarge;
