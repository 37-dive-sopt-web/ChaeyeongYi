import styled from "@emotion/styled";
import InputContainer from "../components/common/InputContainer";
import { useState } from "react";
import { postLogin } from "../apis/login";
import Button from "../components/common/Button";
import { useNavigate } from "react-router";
import type { LoginRequestType } from "../types/auth";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const loginData: LoginRequestType = { username: id, password };
      //   console.log("loginData:", loginData);
      const { data } = await postLogin(loginData);
      console.log("data:", data);
      localStorage.setItem("USER_ID", data.userId);
      //   navigate("/home"); // 로그인 성공 시 홈으로 이동
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  const handleNavigateSignUp = () => {
    navigate("/signup");
  };
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
      <ButtonWrapper>
        <Button
          buttonText="로그인"
          handleClick={handleLogin}
          isOk={id !== "" && password !== ""}
        />
        <SignupBtn onClick={handleNavigateSignUp}>회원가입</SignupBtn>
      </ButtonWrapper>
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
  > h1 {
    font-size: 3.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const SignupBtn = styled.button`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #4390cbff;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
