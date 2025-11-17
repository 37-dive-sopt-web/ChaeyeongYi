import styled from "@emotion/styled";
// import { postSignup } from "../apis/login";
import { useState } from "react";
import { Link } from "react-router";
import type { SignupRequestType } from "../types/auth";
import StepId from "../components/SignUp/StepId";
import StepPassword from "../components/SignUp/StepPassword";
// import { useFunnel } from "../hooks/useFunnel";
import { useFunnel } from "../hooks/useFunnel";

const SignUp = () => {
  const [step, setStep] = useState<"아이디"|"비밀번호"|"개인정보">("아이디");
  const [signUpData, setSignUpData] = useState<SignupRequestType>({
    username: "",
    password: "",
    name: "",
    email: "",
    age: 0,
  });
  // const { Funnel, Step, setStep, currentStep } = useFunnel("아이디");

  const setValue = (key: string, value: string | number) => {
    setSignUpData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <SignUpLayout>
      <h1>회원가입</h1>
      <StepId
        value={signUpData.username}
        setValue={(value) => setValue("username", value)}
        onNext={() => setStep("비밀번호")}
      />
      <StepPassword
        value={signUpData.password}
        setValue={(value) => setValue("password", value)}
        onNext={() => setStep("개인정보")}
      />
      <span>
        이미 계정이 있나요?{" "}
        <BackToLogin to="/login">로그인으로 돌아가기</BackToLogin>
      </span>
    </SignUpLayout>
  );
};
//   const handleSignUp = async () => {
//     try {
//       const data = await postSignup();
//       console.log("data:", data);
//     } catch (error) {
//       console.error("회원가입 실패:", error);
//     }
//   };

export default SignUp;

export const SignUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  > h1 {
    font-size: 3.2rem;
  }
  > span {
    font-size: 1.4rem;
  }
`;

export const BackToLogin = styled(Link)`
  color: #326c9b;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
