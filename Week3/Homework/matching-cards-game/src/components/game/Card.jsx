import * as S from "./Card.styled";

const Card = ({ num, isFront, isMatched, onChangeFront, onChangeAlert }) => {

  /**
   * 카드를 클릭했을 때 실행돼요
   * - 이미 매칭된 카드라면, alert 메시지 출력
   * - 매칭되지 않은 경우, onChangeFront 콜백 함수를 실행해요.
   * 
   * @returns {void}
   */
  const handleCardClick = () => {
    if (isMatched) {
      onChangeAlert("이미 맞춘 카드입니다!");
      return;
    }
    onChangeFront();
  };
  return (
    <S.CardWrapper
      $isFront={isFront}
      $isMatched={isMatched}
      onClick={() => handleCardClick()}
    >
      <S.Back>?</S.Back>
      <S.Front $isMatched={isMatched}>{num}</S.Front>
    </S.CardWrapper>
  );
};

export default Card;
