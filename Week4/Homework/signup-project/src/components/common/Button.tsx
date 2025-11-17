import styled from "@emotion/styled";

type ButtonProps = {
  buttonText: string;
  onClick: () => void;
  isOk: boolean;
};

const Button = ({ buttonText, onClick, isOk }: ButtonProps) => {
  return (
    <ButtonWrapper type="button" onClick={onClick} disabled={!isOk}>
      {buttonText}
    </ButtonWrapper>
  );
};

export default Button;

export const ButtonWrapper = styled.button`
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
  font-size: 1.7rem;
  background-color: #4390cbff;
  color: white;
  border-radius: 6px;

  &:disabled {
    background-color: #cccccc;
    cursor: default;
    &:hover {
      background-color: #cccccc;
      transition: none;
    }
  }

  &:hover {
    background-color: #447ba7;
    transition: background-color 0.1s;
  }
`;
