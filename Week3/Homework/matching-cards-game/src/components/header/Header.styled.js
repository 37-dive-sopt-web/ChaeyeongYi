import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  align-items: center;
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

// export const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
// `;

// export const pageButton = styled.button`
//   height: 3rem;
//   background-color: ${({ active, theme }) =>
//     active ? theme.colors.mainBlue : theme.colors.blurBlue};
//   color: ${({ active, theme }) =>
//     active ? theme.colors.white : theme.colors.darkBlue};
//   font-size: 1.6rem;
//   font-weight: bold;
//   padding-left: 20px;
//   padding-right: 20px;
//   border: none;
//   border-radius: 50px;
// `;
