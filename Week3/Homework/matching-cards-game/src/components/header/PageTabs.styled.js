import styled from "@emotion/styled";

export const PageTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const PageButton = styled.button`
  height: 3rem;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.mainBlue : theme.colors.blurBlue};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.darkBlue};
  font-size: 1.6rem;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 50px;
`;
