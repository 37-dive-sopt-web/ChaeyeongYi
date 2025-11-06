import * as S from "./CardBoard.styled";
import Card from "./Card";

const CardBoard = ({
  level,
  deckInfo,
  matchedList,
  first,
  second,
  onChangeFront,
}) => {
  return (
    <S.CardBoard $level={level}>
      {deckInfo.data.map((card) => (
        <Card
          key={card.id}
          num={card.value}
          isMatched={matchedList.includes(card.id)}
          isFront={first.id === card.id || second.id === card.id}
          onChangeFront={() => onChangeFront(card)}
        />
      ))}
    </S.CardBoard>
  );
};

export default CardBoard;
