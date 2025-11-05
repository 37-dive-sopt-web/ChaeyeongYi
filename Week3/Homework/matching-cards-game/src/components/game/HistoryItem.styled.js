import styled from "@emotion/styled";

export const HistoryItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1.4rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.darkBlue};

  .numbers {
    color: ${({ $isSuccess, theme }) =>
      $isSuccess ? theme.colors.green : theme.colors.red};
  }
`;
