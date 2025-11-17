import type { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

type InputContainerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  placeholder: string;
  inputState: string;
  setInputState: (value: string) => void;
};

const PasswordInput = ({
  title,
  placeholder,
  inputState,
  setInputState,
}: InputContainerProps) => {
  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <PasswordInputWrapper>
      <InputTitle>{title}</InputTitle>
      <InputBox
        placeholder={placeholder}
        onChange={handleChangeInputValue}
        value={inputState}
        type={isVisible ? "text" : "password"}
      />
      <VisibleButton onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? <FiEyeOff /> : <FiEye />}
      </VisibleButton>
    </PasswordInputWrapper>
  );
};

export default PasswordInput;

const PasswordInputWrapper = styled.div`
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

export const VisibleButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 60%;
  width: auto;
  height: auto;
  font-size: 2rem;
  background-color: transparent;
  color: #707070ff;
  cursor: pointer;
`;
