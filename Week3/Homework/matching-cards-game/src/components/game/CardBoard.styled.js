import styled from "@emotion/styled";

export const CardBoard = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: ${({ $level }) => {
    switch ($level) {
      case 1:
        return "repeat(4, 1fr)";
      case 2:
        return "repeat(6, 1fr)";
      case 3:
        return "repeat(6, 1fr)";
      default:
        return "repeat(4, 1fr)";
    }
  }};
  gap: 1rem;
  height: 90%;
`;
