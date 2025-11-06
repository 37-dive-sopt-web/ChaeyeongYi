import styled from "@emotion/styled";

export const RankCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90vw;
  height: 80vh;
  margin-top: 1.2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.darkBlue};
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
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverRed};
  }
`;

export const MainSection = styled.div`
  height: 100%;
  width: 100%;
`;

export const RecordTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;
  text-align: left;
  th {
    background-color: ${({ theme }) => theme.colors.mildDarkBlue};
    padding: 1rem;
  }
  td {
    padding: 1rem;
  }

  #no-record {
    text-align: center;
  }
`;
