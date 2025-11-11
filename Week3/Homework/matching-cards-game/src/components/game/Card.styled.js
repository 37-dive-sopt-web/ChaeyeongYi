import styled from "@emotion/styled";
import { ROTATE_DURATION } from "../../constants/constants.js";

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  transition: ${ROTATE_DURATION}ms;
  perspective: 1000px;
  transform-style: preserve-3d;
  cursor: ${({ $isMatched }) => ($isMatched ? "default" : "pointer")};
  transform: ${({ $isFront, $isMatched }) =>
    $isMatched || $isFront ? "rotateY(0deg)" : "rotateY(180deg)"};
`;

export const Front = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: bold;
  backface-visibility: hidden;
  border: 1px solid
    ${({ $isMatched, theme }) =>
      $isMatched ? theme.colors.primary[600] : theme.colors.primary[500]};
  border-radius: 10px;
  background-color: ${({ $isMatched, theme }) =>
    $isMatched ? theme.colors.primary[600] : theme.colors.primary[200]};
  color: ${({ $isMatched, theme }) =>
    $isMatched ? theme.colors.white : theme.colors.primary[500]};
`;

export const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  transform: rotateY(180deg);
`;
