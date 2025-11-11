import * as S from "./CardBoard.styled";
import Card from "./Card";

const CardBoard = ({
  level,
  deckInfo,
  matchedList,
  openCardIds,
  onChangeFront,
  onChangeAlert,
}) => {
  return (
    <S.CardBoard $level={level}>
      {deckInfo.data.map((card) => (
        <Card
          key={card.id}
          num={card.value}
          isMatched={matchedList.includes(card.id)}
          isFront={openCardIds.includes(card.id)}
          onChangeFront={() => onChangeFront(card)}
          onChangeAlert={onChangeAlert}
        />
      ))}
    </S.CardBoard>
  );
};

export default CardBoard;
