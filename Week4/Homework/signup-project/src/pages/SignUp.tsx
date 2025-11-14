import styled from "@emotion/styled";
import { postSignup } from "../apis/login";
import { useState } from "react";
import type { SignupRequestType } from "../types/auth";
import StepId from "../components/SignUp/StepId";
import StepPassword from "../components/SignUp/StepPassword";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [userInfo, setUserInfo] = useState<SignupRequestType>({
    username: "",
    password: "",
    name: "",
    email: "",
    age: 0,
  });

  const ChangeNext = () => {
    setStep((prev) => prev + 1);
  };

  const setValue = (key: string, value: string | number) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const steps = [
    <StepId
      value={userInfo.username}
      setValue={(value) => setValue("username", value)}
      onNext={ChangeNext}
    />,
    <StepPassword
      value={userInfo.password}
      setValue={(value) => setValue("password", value)}
      onNext={ChangeNext}
    />,
  ];

  return (
    <SignUpLayout>
      <h1>회원가입</h1>
      {/* {step === 1 && (
        <StepId
          value={userInfo.username}
          setValue={(value) => setValue("username", value)}
          onNext={ChangeNext}
        />
      )}
      {step === 2 && (
        <StepPassword
          value={userInfo.password}
          setValue={(value) => setValue("password", value)}
          onNext={ChangeNext}
        />
      )} */}
      {steps[step]}
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
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
