import styled from "@emotion/styled";

export const GamePage = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 90vw;
  height: 80vh;
  margin-top: 1.2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 16px;
`;

export const GameSection = styled.div`
  height: 100%;
  width: 70%;
  border: 1px solid red;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const TopDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const CardBoard = styled.div`
  display: grid;
  align-items: center;
  justify-justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  height: 90%;
`;

export const ControlSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  padding: 0 1rem;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.mildBlue};
  border-radius: 16px;
`;

export const ButtonSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 0.5rem;
`;
export const LevelButton = styled.button`
  height: 3rem;
  border-radius: 8px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.mainBlue : theme.colors.lightBlue};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.mainBlue};
  &:hover {
    background-color: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.mainBlue : theme.colors.hoverBlue};
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.darkBlue};
`;
