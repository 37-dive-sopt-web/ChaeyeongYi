import styled from "@emotion/styled";

export const PageTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const PageButton = styled.button`
  height: 3rem;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary[500] : theme.colors.primary[100]};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.primary[700]};
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0 20px;
  border: none;
  border-radius: 50px;
`;
