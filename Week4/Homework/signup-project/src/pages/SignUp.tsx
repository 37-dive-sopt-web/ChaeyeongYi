import styled from "@emotion/styled";
import { postSignup } from "../apis/login";

const SignUp = () => {
  return (
    <SignUpLayout>
      회원가입 페이지
      <button
        onClick={async () => {
          try {
            const data = await postSignup();
            console.log("data:", data);
          } catch (error) {
            console.error("회원가입 실패:", error);
          }
        }}
      >
        회원가입
      </button>
    </SignUpLayout>
  );
};

export default SignUp;

export const SignUpLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
