import styled from "@emotion/styled";
import InputContainer from "../components/common/InputContainer";
import { useState } from "react";
import Button from "../components/common/Button";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginLayout>
      <h1>로그인</h1>
      <InputContainer
        title="로그인"
        placeholder="아이디를 입력해주세요."
        inputState={id}
        setInputState={setId}
      />
      <InputContainer
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        inputState={password}
        setInputState={setPassword}
      />
      <Button
        buttonText="로그인"
        handleClick={() => {}}
        isOk={id !== "" && password !== ""}
      />
    </LoginLayout>
  );
};

export default Login;

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  h1 {
    font-size: 3.2rem;
  }
`;
