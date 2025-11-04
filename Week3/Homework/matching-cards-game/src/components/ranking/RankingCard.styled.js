import styled from "@emotion/styled";

export const RankCard = styled.section`
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

export const MainSection = styled.div`
  height: 100%;
  width: 100%;
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
