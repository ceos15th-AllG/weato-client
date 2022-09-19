import styled from '@emotion/styled';

import Image from 'next/image';
import Link from 'next/link';

import Tag from '@community/PostTag';

import { Subhead3, Body1 } from '@styles/FontStyle';

import { gray05, text_black } from '@styles/Colors';

import icon_views from '@public/icon_gray_views.png';

const Layout = styled.div`
  height: 352px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  row-gap: 32px;
`;

const Box = styled.div`
  height: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  width: 475px;

  margin-left: 44px;

  ${Subhead3}

  color: ${text_black};

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
  const dict = {
    MANAGEMENT: '관리법',
    QUESTION: '질문',
    null: `태그`,
  };

  const tags = {
    DRUG: '약품',
    SLEEP: '수면',
    CLEANING: '세면',
    FOOD: '음식',
    ENVIRONMENT: '환경',
    OTHERWISE: '기타',
    ALL: '전체',
  };

  console.log(posts);

  return (
    <Layout>
      {posts.map(
        ({
          id,
          title,
          createdAt,
          author,
          tagType,
          commentsCounter,
          views,
          boardType,
        }) => (
          <Link href={`/community/post/${id}`} key={id}>
            <a>
              <Box>
                <Box>
                  <Tag text={dict[boardType]} />
                  <Title>
                    {title} [{commentsCounter}]
                  </Title>
                </Box>
                <Box>
                  <Hashtag>#{tags[tagType]}</Hashtag>
                  <Box>
                    <Image src={icon_views} width={17.54} height={12} alt="" />
                    <Views>{views}</Views>
                  </Box>
                  <Date>{createdAt.slice(0, 10)}</Date>
                </Box>
              </Box>
            </a>
          </Link>
        )
      )}
    </Layout>
  );
}

export default BoardContentLarge;
