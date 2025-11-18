import styled from "@emotion/styled";
import { createPortal } from "react-dom";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}
const DeleteModal = ({ open, onClose, onDelete }: DeleteModalProps) => {
  if (!open) return null;

  return createPortal(
    <>
      <Overlay />
      <Modal>
        <Title>정말 탈퇴하시겠습니까?</Title>
        <InfoP>탈퇴 후에는 모든 정보가 삭제돼요</InfoP>
        <ButtonWrapper>
          <button type="button" className="cancel" onClick={onClose}>
            취소
          </button>

          <button type="button" className="delete" onClick={onDelete}>
            회원탈퇴
          </button>
        </ButtonWrapper>
      </Modal>
    </>,
    document.getElementById("modal")!
  );
};

export default DeleteModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 2;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 16px;
  width: 30rem;
  height: 15rem;
  z-index: 2;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
`;

const InfoP = styled.p`
  font-size: 1.4rem;
  color: #707070;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  button {
    padding: 1rem 2rem;
    border-radius: 10px;
  }

  .cancel {
    border: 1px solid #cccccc;
    background-color: white;
    font-size: 1.4rem;
  }

  .delete {
    border: none;
    background-color: #ff4d4d;
    color: white;

    &:hover {
      background-color: darkred;
    }
  }
`;
