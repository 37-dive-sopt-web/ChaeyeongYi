import * as S from "./GamePage.styled";
import { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";
import buildDeck from "../../utils/buildDeck";
import Card from "./Card";
import HistoryItem from "./HistoryItem";
import { ROTATE_DURATION, FLIP_BACK_DELAY } from "../../constants/constants";

const GamePage = () => {
  const [deckInfo, setDeckInfo] = useState({
    status: "idle",
    data: null,
    level: 1,
  });
  const { level } = deckInfo;
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [history, setHistory] = useState([
    [1, 4],
    [2, 2],
  ]);
  const [matchedList, setMatchedList] = useState([]);
  const { time, handleTimerActive, resetTimer } = useTimer();

  const generateDeck = (level = deckInfo.level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: "ready", data, level });
    setFirst({});
    setSecond({});
    setHistory([
      [1, 4],
      [2, 2],
    ]);
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
      <S.ControlSection>
        <S.ButtonSection>
          {[1, 2, 3].map((item) => (
            <S.LevelButton
              key={item}
              $isActive={level === item}
              onClick={() => generateDeck(item)}
            >
              Level {item}
            </S.LevelButton>
          ))}
        </S.ButtonSection>
        {/* DashBoard */}
        <div>
          <div>
            <p>남은 시간</p>
            <p>{time.toFixed(2)}</p>
          </div>
        </div>
        <div>
          <p>성공한 짝</p>
          <p>{`${matchedList?.length / 2}/${deckInfo.data?.length / 2}`}</p>
        </div>
        <div>
          <p>남은 짝</p>
          <p>{(deckInfo.data?.length - matchedList?.length) / 2}</p>
        </div>
        {/* 안내 메시지 */}
        <S.SubTitle>안내 메시지</S.SubTitle>
        <div>안내메시지가 들어갈 곳</div>
        {/* 히스토리 */}
        <S.SubTitle>히스토리</S.SubTitle>
        <div>
          {history.map((item, idx) => (
            <HistoryItem key={idx} history={item} />
          ))}
        </div>
      </S.ControlSection>
    </S.GamePage>
  );
};

export default GamePage;
