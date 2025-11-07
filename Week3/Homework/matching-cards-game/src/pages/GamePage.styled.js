import styled from "@emotion/styled";

export const GamePage = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 90vw;
  height: 80vh;
  margin-top: 1.2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.primary[200]};
  border-radius: 16px;
`;

export const GameSection = styled.div`
  height: 100%;
  width: 70%;
`;

export const TopDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

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

export const ControlSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  padding: 0 1rem;
  gap: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary[300]};
  border-radius: 16px;
`;

export const SubTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 1rem;
  width: 100%;
`;

export const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 7rem;
  gap: 0.5rem;
`;

export const DashBoardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary[200]};
  font-size: 1.3rem;
  font-weight: bold;

  .status {
    font-size: 2rem;
    font-weight: 800;
  }
`;

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 3rem 0 3rem 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary[200]};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const HisToryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 36rem;
  gap: 0.5rem;
  overflow-y: auto;
  font-size: 1.4rem;
`;

export const EmptyState = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;

  height: 100%;
`;
