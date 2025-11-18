import type { ChangeEvent } from "react";
import styled from "@emotion/styled";

type InputContainerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  placeholder: string;
  inputState: number | null;
  setInputState: (value: number | null) => void;
};

const MemberInput = ({
  title,
  placeholder,
  inputState,
  setInputState,
}: InputContainerProps) => {
  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(Number(e.target.value));
  };
  return (
    <MemberInputWrapper>
      <InputTitle>{title}</InputTitle>
      <InputBox
        placeholder={placeholder}
        onChange={handleChangeInputValue}
        value={inputState ? inputState : ""}
        type="number"
      />
    </MemberInputWrapper>
  );
};

export default MemberInput;

const MemberInputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  gap: 1.2rem;
`;

export const InputTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #707070ff;
`;

export const InputBox = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1.6rem;
  &:focus {
    outline: none;
    border-color: #326c9b;
  }
`;
