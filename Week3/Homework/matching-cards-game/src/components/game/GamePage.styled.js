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

export const ControlSection = styled.div`
  height: 100%;
  width: 30%;
  background-color: ${({ theme }) => theme.colors.mildBlue};
  border-radius: 16px;
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
