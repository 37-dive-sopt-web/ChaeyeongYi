import InputContainer from "../common/InputContainer";
import Button from "../common/Button";

type StepPasswordProps = {
  value: string;
  setValue: (value: string) => void;
  onNext: () => void;
};

const StepPassword = ({ value, setValue, onNext }: StepPasswordProps) => {
  return (
    <>
      <InputContainer
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        inputState={value}
        setInputState={setValue}
      />
      <Button buttonText="다음" onClick={onNext} isOk={value !== ""} />
    </>
  );
};

export default StepPassword;
