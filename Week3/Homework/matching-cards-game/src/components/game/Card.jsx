import * as S from "./Card.styled";

const Card = ({ num, isFront, isMatched, onChangeFront }) => {
  return (
    <S.CardWrapper
      $isFront={isFront}
      $isMatched={isMatched}
      onClick={() => {
        if (isMatched) return;
        onChangeFront();
      }}
    >
      <S.Back>?</S.Back>
      <S.Front $isMatched={isMatched}>{num}</S.Front>
    </S.CardWrapper>
  );
};

export default Card;
