import styled from "@emotion/styled";

export const HistoryItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.darkBlue};

  .numbers {
    color: ${({ $isSuccess, theme }) =>
      $isSuccess ? theme.colors.green : theme.colors.red};
  }
`;
