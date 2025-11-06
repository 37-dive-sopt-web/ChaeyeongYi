import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary[200]};
  border-radius: 16px;
`;

export const Title = styled.h1`
  font-size: 3.8rem;
`;
