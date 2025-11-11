import styled from "@emotion/styled";
import { GRID_COLUMNS } from "../../constants/constants";

export const CardBoard = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: ${({ $level }) =>
    `repeat(${GRID_COLUMNS[$level]}, 1fr)`};
  gap: 1rem;
  height: 94%;
`;
