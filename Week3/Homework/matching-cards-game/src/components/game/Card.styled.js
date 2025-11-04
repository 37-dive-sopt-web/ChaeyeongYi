import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  border-radius: 1rem;
  transition: 0.4s;
  transform-style: preserve-3d;

  transform: ${({ $isFront }) =>
    $isFront ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const Front = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  transform: rotateY(180deg);
`;

export const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blueBlue};
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
