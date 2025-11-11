import * as S from "./HistoryItem.styled";

const HistoryItem = ({ history }) => {
  const isSuccess = history[0] === history[1];
  return (
    <S.HistoryItem $isSuccess={isSuccess}>
      <p className="numbers">{`${history[0]}, ${history[1]}`}</p>
      <p>{isSuccess ? "성공" : "실패"}</p>
    </S.HistoryItem>
  );
};

export default HistoryItem;
