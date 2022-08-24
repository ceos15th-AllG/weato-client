import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import Button from '@common/ButtonContainer';

const Layout = styled.div`
  height: calc(100vh - 340px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorCode = styled.span`
  font-size: 200px;
  font-weight: 700;

  color: #797979;
`;

const ErrorText = styled.span`
  margin-bottom: 37px;

  font-size: 32px;
  font-weight: 700;
  line-height: 42px;
  text-align: center;

  color: #797979;
`;

const Error400 = () => {
  const router = useRouter();

  return (
    <Box>
      <ErrorCode>400</ErrorCode>
      <ErrorText>
        찾을 수 없는 페이지 입니다.
        <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.
      </ErrorText>
      <Button
        text="이전 페이지로 이동"
        btnType="4"
        onClick={() => {
          router.back();
        }}
      />
    </Box>
  );
};

const Error404 = () => {
  const router = useRouter();

  return (
    <Box>
      <ErrorCode>404</ErrorCode>
      <ErrorText>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.
      </ErrorText>
      <Button
        text="이전 페이지로 이동"
        btnType="4"
        onClick={() => {
          router.back();
        }}
      />
    </Box>
  );
};

const Error500 = () => {
  const router = useRouter();

  return (
    <Box>
      <ErrorCode>500</ErrorCode>
      <ErrorText>
        웹 사이트에서 페이지를 표시할 수 없습니다.
        <br />웹 사이트가 유지 관리 중이거나 프로그래밍 오류가 발생한 것으로
        보입니다.
      </ErrorText>
      <Button
        text="이전 페이지로 이동"
        btnType="4"
        onClick={() => {
          router.back();
        }}
      />
    </Box>
  );
};

function Error({ statusCode }) {
  return (
    <Layout>
      {statusCode === 400 ? <Error400 /> : undefined}
      {statusCode === 404 ? <Error404 /> : undefined}
      {statusCode === 500 ? <Error500 /> : undefined}
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
