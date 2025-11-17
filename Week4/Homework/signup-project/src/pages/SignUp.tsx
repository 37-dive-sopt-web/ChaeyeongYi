import styled from "@emotion/styled";
import { postSignup } from "../apis/login";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import type { SignupRequestType } from "../types/auth";
import StepId from "../components/SignUp/StepId";
import StepPassword from "../components/SignUp/StepPassword";
import StepInfo from "../components/SignUp/StepInfo";

const SignUp = () => {
  const navigate = useNavigate();
  const [, setStep] = useState<"아이디" | "비밀번호" | "개인정보">(
    "아이디"
  );
  const [signUpData, setSignUpData] = useState<SignupRequestType>({
    username: "",
    password: "",
    name: "",
    email: "",
    age: null,
  });

  const setValue = (key: string, value: string) => {
    setSignUpData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSignUp = async () => {
    try {
      // console.log()
      const data = await postSignup(signUpData);
      alert(`회원가입 성공! ${data.data.name}님 환영합니다!`);
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
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
      <StepInfo
        value={{
          name: signUpData.name,
          email: signUpData.email,
          age: signUpData.age,
        }}
        setValue={(key, value) =>
          setSignUpData((prev) => ({
            ...prev,
            [key]: value,
          }))
        }
        onNext={() => {
          console.log("회원가입 데이터:", signUpData);
          handleSignUp();
        }}
      />
      <span>
        이미 계정이 있나요?{" "}
        <BackToLogin to="/login">로그인으로 돌아가기</BackToLogin>
      </span>
    </SignUpLayout>
  );
};

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
