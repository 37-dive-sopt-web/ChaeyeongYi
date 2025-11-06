import styled from "@emotion/styled";

export const RankPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90vw;
  height: 80vh;
  margin-top: 1.2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.primary[200]};
  border-radius: 16px;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const ResetButton = styled.button`
  height: 3rem;
  padding: 0 1.3rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red[500]};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.red[400]};
  }
`;

export const MainSection = styled.div`
  height: 100%;
  width: 100%;
`;