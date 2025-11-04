import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 16px;
`;

export const Title = styled.h1`
  font-size: 3.8rem;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
