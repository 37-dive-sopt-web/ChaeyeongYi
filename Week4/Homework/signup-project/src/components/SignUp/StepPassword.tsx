import { useState } from "react";
import PasswordInput from "./PasswordInput";
import Button from "../common/Button";
import styled from "@emotion/styled";

type StepPasswordProps = {
  value: string;
  setValue: (value: string) => void;
  onNext: () => void;
};

const StepPassword = ({ value, setValue, onNext }: StepPasswordProps) => {
  const [checkPassword, setCheckPassword] = useState<string>("");
  return (
    <>
      <PasswordInput
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        inputState={value}
        setInputState={setValue}
      />
      <PasswordInput
        title="비밀번호 확인"
        placeholder="비밀번호 확인"
        inputState={checkPassword}
        setInputState={setCheckPassword}
      />
      <WarningP
        $isSuccess={checkPassword === "" ? null : value === checkPassword}
      >
        비밀번호가 일치하지 않습니다.
      </WarningP>
      <Button
        buttonText="다음"
        onClick={onNext}
        isOk={checkPassword !== "" && value === checkPassword}
      />
    </>
  );
};

export default StepPassword;

export const WarningP = styled.p`
  font-size: 1.4rem;
  color: ${(props: { $isSuccess: boolean | null }) =>
    props.$isSuccess === false ? "red" : "transparent"};
  height: 2rem;
`;
