import { useState } from "react";
import InputContainer from "../common/InputContainer";
import Button from "../common/Button";

type StepPasswordProps = {
  value: string;
  setValue: (value: string) => void;
  onNext: () => void;
};

const StepPassword = ({ value, setValue, onNext }: StepPasswordProps) => {
  const [checkPassword, setCheckPassword] = useState<string>("");
  return (
    <>
      <InputContainer
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        inputState={value}
        setInputState={setValue}
      />
      <InputContainer
        title="비밀번호 확인"
        placeholder="비밀번호 확인"
        inputState={checkPassword}
        setInputState={setCheckPassword}
      />
      <Button
        buttonText="다음"
        onClick={onNext}
        isOk={checkPassword !== "" && value === checkPassword}
      />
    </>
  );
};

export default StepPassword;
