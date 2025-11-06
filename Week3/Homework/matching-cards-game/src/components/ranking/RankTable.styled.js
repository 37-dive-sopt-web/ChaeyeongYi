import styled from "@emotion/styled";

export const RankTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;
  text-align: left;
  th {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    padding: 1rem;
  }
  td {
    padding: 1rem;
  }

  #no-record {
    text-align: center;
  }
`;
