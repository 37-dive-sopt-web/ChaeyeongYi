import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 2;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 16px;
  width: 30rem;
  height: 12rem;
  z-index: 2;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const DetailText = styled.p`
  font-size: 1.3rem;
`;

export const TimeGuideText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mildDarkBlue};
`;
