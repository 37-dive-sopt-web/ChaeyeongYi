import styled from "@emotion/styled";

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
