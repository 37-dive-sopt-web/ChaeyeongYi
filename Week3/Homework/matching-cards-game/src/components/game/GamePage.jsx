import * as S from "./GamePage.styled";
import { use, useState } from "react";
import buildDeck from "../../utils/buildDeck";
import Card from "./Card";

const GamePage = () => {
  const [deckInfo, setDeckInfo] = useState({
    status: "idle",
    data: null,
    level: 1,
  });

  const generateDeck = (level = deckInfo.level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: "ready", data, level });
  };

  // console.log(deckInfo);
  // const [first, setFirst] = useState(false);
  const [isFront, setIsFront] = useState(false);
  const handleChangeFront = () => {
    setIsFront(!isFront);
  };
  return (
    <S.GamePage>
      <S.GameSection>
        <S.TopDiv>
          <p>게임 보드</p>
          <button onClick={() => generateDeck(1)}>게임 리셋</button>
        </S.TopDiv>
        {deckInfo.status === "ready" && (
          <S.CardBoard>
            {deckInfo.data.map((card) => (
              <Card
                key={card.id}
                num={card.value}
                isFront={isFront}
                onChangeFront={handleChangeFront}
              />
            ))}
          </S.CardBoard>
        )}
      </S.GameSection>
      <S.ControlSection></S.ControlSection>
    </S.GamePage>
  );
};

export default GamePage;
