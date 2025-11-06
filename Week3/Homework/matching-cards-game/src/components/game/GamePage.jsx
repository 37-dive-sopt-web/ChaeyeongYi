import * as S from "./GamePage.styled";
import { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";
import useLocalstorage from "../../hooks/useLocalstorage";
import buildDeck from "../../utils/buildDeck";
import Card from "./Card";
import HistoryItem from "./HistoryItem";
import Modal from "./Modal";
import {
  ROTATE_DURATION,
  FLIP_BACK_DELAY,
  LOCALSTORAGE_KEY,
  LEVEL_TIMER,
  RESET_DELAY,
} from "../../constants/constants";

const GamePage = () => {
  const [deckInfo, setDeckInfo] = useState({
    status: "idle",
    data: null,
    level: 1,
  });
  const { level } = deckInfo;
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [history, setHistory] = useState([]);
  const [matchedList, setMatchedList] = useState([]);
  const [alertMessage, setAlertMessage] = useState("카드를 눌러 게임을 시작");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { time, handleTimerActive, resetTimer, stopTimer, stopTime } =
    useTimer();
  const [record, setRecord] = useLocalstorage(LOCALSTORAGE_KEY);

  const generateDeck = (goalLevel = 1) => {
    const data = buildDeck(goalLevel);
    setDeckInfo({ status: "ready", data, level: goalLevel });
  };

  const handleClickCard = (card) => {
    if (card.id === first.id || matchedList.includes(card.id)) return;
    handleTimerActive();
    setAlertMessage("잠시만 기다려 주세요");
    if (!first.id) {
      setFirst(card);
      return;
    }
    if (!second.id) {
      setSecond(card);
    }
  };

  const handleResetGame = (goalLevel) => {
    generateDeck(goalLevel);
    setFirst({});
    setSecond({});
    setHistory([]);
    setMatchedList([]);
    setAlertMessage("카드를 눌러 게임을 시작");
    resetTimer(LEVEL_TIMER[goalLevel]);
  };

  // 두 장 클릭 시 매칭 검사
  useEffect(() => {
    if (!first.id || !second.id) return;

    if (first.value === second.value) {
      const timer = setTimeout(() => {
        setHistory((prev) => [...prev, [first.value, second.value]]);
        setMatchedList((prev) => [...prev, first.id, second.id]);
        setFirst({});
        setSecond({});
        setAlertMessage("성공!");
      }, ROTATE_DURATION);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setTimeout(() => {
        setHistory((prev) => [...prev, [first.value, second.value]]);
        setFirst({});
        setSecond({});
        setAlertMessage("실패!");
      }, FLIP_BACK_DELAY);
      return;
    }
  }, [first, second]);

  // 초기화: 덱 생성
  useEffect(() => {
    generateDeck();
  }, []);

  // 게임 종료 조건 충족 검사
  useEffect(() => {
    if (matchedList?.length === deckInfo.data?.length) {
      stopTimer();
      setIsModalOpen(true);
      const newRecord = {
        record_id: crypto.randomUUID(),
        level: deckInfo.level,
        recorded_at: new Date().toISOString(),
        clear_time: Number((LEVEL_TIMER[deckInfo.level] - time).toFixed(2)),
      };
      setRecord((prev) => [...prev, newRecord]);
    }
  }, [matchedList]);

  // 타임 아웃
  useEffect(() => {
    if (time <= 0) {
      setIsModalOpen(true);
    }
  }, [time]);
  return (
    <S.GamePage>
      <S.GameSection>
        <S.TopDiv>
          <p>게임 보드</p>
          <S.ResetButton onClick={() => handleResetGame(level)}>
            게임 리셋
          </S.ResetButton>
        </S.TopDiv>
        {deckInfo.status === "ready" && (
          <S.CardBoard $level={level}>
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
              onClick={() => handleResetGame(item)}
            >
              Level {item}
            </S.LevelButton>
          ))}
        </S.ButtonSection>
        {/* DashBoard */}
        <S.Dashboard>
          <S.DashBoardItem>
            <p>남은 시간</p>
            <p className="status">{time?.toFixed(2)}</p>
          </S.DashBoardItem>
          <S.DashBoardItem>
            <p>성공한 짝</p>
            <p className="status">{`${matchedList?.length / 2}/${
              deckInfo.data?.length / 2
            }`}</p>
          </S.DashBoardItem>
          <S.DashBoardItem>
            <p>남은 짝</p>
            <p className="status">
              {deckInfo.data
                ? (deckInfo.data.length - matchedList.length) / 2
                : 0}
            </p>
          </S.DashBoardItem>
        </S.Dashboard>

        {/* 안내 메시지 */}
        <S.SubTitle>안내 메시지</S.SubTitle>
        <S.MessageBox>{alertMessage}</S.MessageBox>
        {/* 히스토리 */}
        <S.SubTitle>히스토리</S.SubTitle>
        <S.HisToryBox>
          {history.length === 0 ? (
            <S.EmptyState>아직 뒤집은 카드가 없어요</S.EmptyState>
          ) : (
            history.map((item, idx) => <HistoryItem key={idx} history={item} />)
          )}
        </S.HisToryBox>
      </S.ControlSection>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        level={level}
        stopTime={stopTime}
        onAutoRestart={() => handleResetGame(level)}
      />
    </S.GamePage>
  );
};

export default GamePage;
