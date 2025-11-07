import * as S from "./Card.styled";

const Card = ({ num, isFront, isMatched, onChangeFront, onChangeAlert }) => {
  return (
    <S.CardWrapper
      $isFront={isFront}
      $isMatched={isMatched}
      onClick={() => {
        if (isMatched) {
          onChangeAlert("이미 맞춘 카드입니다!");
          return;
        }
        onChangeFront();
      }}
    >
      <S.Back>?</S.Back>
      <S.Front $isMatched={isMatched}>{num}</S.Front>
    </S.CardWrapper>
  );
};

export default Card;
