import styled from "@emotion/styled";

export const LevelSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 0.5rem;
`;
export const LevelButton = styled.button`
  height: 3rem;
  border-radius: 8px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary[500] : theme.colors.primary[200]};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.primary[500]};
  &:hover {
    background-color: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary[500] : theme.colors.primary[400]};
  }
`;