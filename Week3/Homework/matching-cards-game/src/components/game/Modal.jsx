import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import * as S from "./Modal.styled";

const Modal = ({ open, onClose, level, stopTime, onAutoRestart }) => {
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    if (!open) return;
    setCountdown(3);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onClose();
      onAutoRestart?.();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [open, onClose, onAutoRestart]);

  if (!open) return null;

  return createPortal(
    <>
      <S.Overlay />
      <S.Modal>
        <S.Title>{stopTime <= 0 ? "실패..." : "축하해요 !!!!"}</S.Title>
        {stopTime <= 0 ? (
          <></>
        ) : (
          <S.DetailText>{`Level ${level}을 ${stopTime}초 만에 클리어했어요`}</S.DetailText>
        )}
        <S.TimeGuideText>{`${countdown}초 후 자동으로 새 게임을 시작해요`}</S.TimeGuideText>
      </S.Modal>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
