import styled from "@emotion/styled";

export const GameCard = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 90vw;
  height: 80vh;
  margin-top: 1.2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 16px;

  div {
  height: 100%;
    border: 1px solid red;

  }
`;