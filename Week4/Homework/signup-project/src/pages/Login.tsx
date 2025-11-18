import styled from "@emotion/styled";
import InputContainer from "../components/common/InputContainer";
import PasswordInput from "../components/common/PasswordInput";
import { useState } from "react";
import { postLogin } from "../apis/login";
import Button from "../components/common/Button";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleLogin = async () => {
    const { success, data } = await postLogin({ username: id, password });
    setIsSuccess(success);
    localStorage.setItem("userId", data.userId);
    navigate("/mypage"); // 로그인 성공 시 홈으로 이동
  };

  const handleNavigateSignUp = () => {
    navigate("/signup");
  };
  return (
    <LoginLayout>
      <h1>로그인</h1>
      <InputContainer
        title="아이디"
        placeholder="아이디를 입력해주세요."
        inputState={id}
        setInputState={setId}
      />
      <PasswordInput
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        inputState={password}
        setInputState={setPassword}
      />
      <WarningP $isSuccess={isSuccess}>
        아이디 또는 비밀번호가 올바르지 않습니다.
      </WarningP>
      <ButtonWrapper>
        <Button
          buttonText="로그인"
          onClick={handleLogin}
          isOk={id !== "" && password !== ""}
        />
        <SignupBtn onClick={handleNavigateSignUp}>회원가입</SignupBtn>
      </ButtonWrapper>
    </LoginLayout>
  );
};

export default Login;

export const LoginLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  > h1 {
    font-size: 3.2rem;
  }
`;

export const WarningP = styled.p<{ $isSuccess: boolean | null }>`
  display: ${(props) => (props.$isSuccess === false ? "block" : "none")};
  font-size: 1.2rem;
  color: red;
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
  color: #4390cb;
  border: none;
  cursor: pointer;
`;
