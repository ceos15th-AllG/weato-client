import styled from '@emotion/styled';

import Image from 'next/image';
import Link from 'next/link';

import { Subhead3, Body1 } from '@styles/FontStyle';

import { gray05, text_black } from '@styles/Colors';

import icon_views from '@public/icon_gray_views.png';

const Layout = styled.div`
  height: 134px;

  display: flex;
  flex-direction: column;

  row-gap: 34px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  width: 200px;

  ${Subhead3};

  color: ${text_black};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Views = styled.span`
  width: 28px;

  margin-left: 6px;

  ${Body1}
  text-align : left;

  color: ${gray05};
`;

const Date = styled.span`
  min-width: 85px;

  margin-left: 38px;

  ${Body1}
  text-align : right;

  color: ${gray05};
`;

function BoardContentSmall({ posts }) {
  return (
    <Layout>
      {posts.map(({ id, title, createdAt, views }) => (
        <Link href={`/community/post/${id}`} key={id}>
          <a>
            <Box>
              <Title>{title}</Title>
              <Box>
                <Box>
                  <Image src={icon_views} width={17.54} height={12} alt="" />
                  <Views>{views}</Views>
                </Box>
                <Date>{createdAt.slice(0, 10)}</Date>
                {/* <Date>{'몇분 전'}</Date> */}
              </Box>
            </Box>
          </a>
        </Link>
      ))}
    </Layout>
  );
}

export default BoardContentSmall;
