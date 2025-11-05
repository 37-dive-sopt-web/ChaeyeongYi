import * as S from "./GamePage.styled";
import { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";
import buildDeck from "../../utils/buildDeck";
import Card from "./Card";
import { ROTATE_DURATION, FLIP_BACK_DELAY } from "../../constants/constants";

const GamePage = () => {
  const [deckInfo, setDeckInfo] = useState({
    status: "idle",
    data: null,
    level: 1,
  });
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [history, setHistory] = useState([]);
  const [matchedList, setMatchedList] = useState([]);
  const { time, handleTimerActive, resetTimer } = useTimer(45);

  const generateDeck = (level = deckInfo.level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: "ready", data, level });
    setFirst({});
    setSecond({});
    setHistory([]);
    setMatchedList([]);
  };

  const handleClickCard = (card) => {
    if (card.id === first.id || matchedList.includes(card.id)) return;
    handleTimerActive();
    if (!first.id) {
      setFirst(card);
      return;
    }
    if (!second.id) {
      setSecond(card);
    }
  };

  const handleResetGame = (level = 1) => {
    generateDeck(level);
    resetTimer();
  };

  useEffect(() => {
    if (!first.id || !second.id) return;

    if (first.value === second.value) {
      const timer = setTimeout(() => {
        setHistory((prev) => [...prev, first.value]);
        setMatchedList((prev) => [...prev, first.id, second.id]);
        console.log("history:", history);
        setFirst({});
        setSecond({});
      }, ROTATE_DURATION);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setFirst({});
        setSecond({});
      }, FLIP_BACK_DELAY);
      return;
    }
  }, [first, second]);

  // 페이지 렌더링 시 덱 생성
  useEffect(() => {
    generateDeck();
  }, []);

  return (
    <S.GamePage>
      <S.GameSection>
        <S.TopDiv>
          <p>게임 보드</p>
          <p>{time.toFixed(2)}</p>
          <button onClick={() => handleResetGame(1)}>게임 리셋</button>
        </S.TopDiv>
        {deckInfo.status === "ready" && (
          <S.CardBoard>
            {deckInfo.data.map((card) => (
              <Card
                key={card.id}
                num={card.value}
                isMatched={matchedList.includes(card.id)}
                isFront={first.id === card.id || second.id === card.id}
                onChangeFront={() => handleClickCard(card)}
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
