import InputContainer from "../common/InputContainer";
import Button from "../common/Button";

type StepIdProps = {
  value: string;
  setValue: (value: string) => void;
  onNext: () => void;
};
const StepId = ({ value, setValue, onNext }: StepIdProps) => {
  return (
    <>
      <InputContainer
        title="아이디"
        placeholder="아이디를 입력해주세요."
        inputState={value}
        setInputState={setValue}
      />
      <Button buttonText="다음" onClick={onNext} isOk={value !== ""} />
    </>
  );
};

export default StepId;
