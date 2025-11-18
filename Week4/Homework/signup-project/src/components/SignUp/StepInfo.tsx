import InputContainer from "../common/InputContainer";
import Button from "../common/Button";

type StepIdProps = {
  value: { name: string; email: string; age: number | null };
  setValue: (key: "name" | "email" | "age", value: string | number) => void;
  onNext: () => void;
};

const StepInfo = ({ value, setValue, onNext }: StepIdProps) => {
  const isOk = Object.values(value).every((v) => !!v);

  return (
    <>
      <InputContainer
        title="이름"
        placeholder="이름을 입력해 주세요"
        inputState={value.name}
        setInputState={(v) => setValue("name", v)}
        type="text"
      />
      <InputContainer
        title="이메일"
        placeholder="name@example.com"
        inputState={value.email}
        setInputState={(v) => setValue("email", v)}
        type="text"
      />
      <InputContainer
        title="나이"
        placeholder="숫자로 입력"
        inputState={value.age ? value.age : ""}
        setInputState={(v) => setValue("age", Number(v))}
        type="number"
      />
      <Button buttonText="회원가입" onClick={onNext} isOk={isOk} />
    </>
  );
};

export default StepInfo;
