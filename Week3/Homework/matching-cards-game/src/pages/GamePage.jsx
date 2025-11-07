import * as S from "./GamePage.styled";
import { useEffect, useState } from "react";
import useTimer from "../hooks/useTimer";
import useModal from "../hooks/useModal";
import useLocalstorage from "../hooks/useLocalstorage";
import generateDeck from "../utils/generateDeck";
import CardBoard from "../components/game/CardBoard";
import HistoryItem from "../components/game/HistoryItem";
import Modal from "../components/game/Modal";
import LevelSelector from "../components/game/LevelSelector";

import {
  ROTATE_DURATION,
  FLIP_BACK_DELAY,
  LOCALSTORAGE_KEY,
  LEVEL_TIMER,
} from "../constants/constants";

const GamePage = () => {
  const [deckInfo, setDeckInfo] = useState(generateDeck());
  const { level } = deckInfo;
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [history, setHistory] = useState([]);
  const [matchedList, setMatchedList] = useState([]);
  const [alertMessage, setAlertMessage] = useState("카드를 눌러 게임을 시작");
  const [stopTime, setStopTime] = useState(null);
  const [_, setRecord] = useLocalstorage(LOCALSTORAGE_KEY);
  const { time, handleTimerActive, resetTimer, stopTimer } = useTimer();
  const { isModalOpen, openModal, closeModal } = useModal();

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
    setDeckInfo(generateDeck(goalLevel));
    setFirst({});
    setSecond({});
    setHistory([]);
    setMatchedList([]);
    setStopTime(null);
    setAlertMessage("카드를 눌러 게임을 시작");
    resetTimer(LEVEL_TIMER[goalLevel]);
  };

  // 매칭 검사
  useEffect(() => {
    if (!first.id || !second.id) return;
    // 매칭 시 history, matchedList 갱신
    if (first.value === second.value) {
      // 회전 효과 딜레이를 주기 위해 타이머 추가
      setTimeout(() => {
        setHistory((prev) => [[first.value, second.value], ...prev]);
        setMatchedList((prev) => [...prev, first.id, second.id]);
        setFirst({});
        setSecond({});
        setAlertMessage("성공!");
      }, ROTATE_DURATION);
      return;
    } else {
      // 회전 효과 딜레이를 주기 위해 타이머 추가
      setTimeout(() => {
        setHistory((prev) => [[first.value, second.value], ...prev]);
        setFirst({});
        setSecond({});
        setAlertMessage("실패!");
      }, FLIP_BACK_DELAY);
      return;
    }
  }, [first, second]);

  // 게임 종료 조건 충족 검사
  useEffect(() => {
    if (matchedList.length === deckInfo.data.length) {
      const catchStopTime = time;
      setStopTime(catchStopTime);
      stopTimer();
      openModal();
      const newRecord = {
        record_id: crypto.randomUUID(),
        level: deckInfo.level,
        recorded_at: new Date().toISOString(),
        clear_time: catchStopTime,
      };
      setRecord((prev) => [...prev, newRecord]);
    }
  }, [matchedList]);

  // 타임 아웃
  useEffect(() => {
    if (time <= 0) {
      openModal();
    }
  }, [time]);
  return (
    <S.GamePage>
      <Modal
        open={isModalOpen}
        onClose={() => closeModal()}
        level={level}
        stopTime={stopTime}
        onAutoRestart={() => handleResetGame(level)}
      />
      <S.GameSection>
        <S.TopDiv>
          <p>게임 보드</p>
          <S.ResetButton type="button" onClick={() => handleResetGame(level)}>
            게임 리셋
          </S.ResetButton>
        </S.TopDiv>
        {deckInfo.status === "ready" && (
          <CardBoard
            level={level}
            deckInfo={deckInfo}
            matchedList={matchedList}
            first={first}
            second={second}
            onChangeFront={handleClickCard}
          />
        )}
      </S.GameSection>
      <S.ControlSection>
        <LevelSelector level={level} onReset={handleResetGame} />
        <S.Dashboard>
          <S.DashBoardItem>
            <p>남은 시간</p>
            <p className="status">{time?.toFixed(1)}0</p>
          </S.DashBoardItem>
          <S.DashBoardItem>
            <p>성공한 짝</p>
            <p className="status">{`${matchedList.length / 2}/${
              deckInfo.data.length / 2
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
        <S.SubTitle>안내 메시지</S.SubTitle>
        <S.MessageBox>{alertMessage}</S.MessageBox>
        <S.SubTitle>히스토리</S.SubTitle>
        <S.HisToryBox>
          {history.length === 0 ? (
            <S.EmptyState>아직 뒤집은 카드가 없어요</S.EmptyState>
          ) : (
            history.map((item, idx) => <HistoryItem key={idx} history={item} />)
          )}
        </S.HisToryBox>
      </S.ControlSection>
    </S.GamePage>
  );
};

export default GamePage;
