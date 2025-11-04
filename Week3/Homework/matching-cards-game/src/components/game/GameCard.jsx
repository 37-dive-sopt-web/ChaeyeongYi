import * as S from "./GameCard.styled";

const GameCard = () => {
  return (
    <S.GameCard>
      <S.MainSection>
        <S.TopDiv>
          <p>게임 보드</p>
          <button>게임 리셋</button>
        </S.TopDiv>
      </S.MainSection>
      <S.ControlSection></S.ControlSection>
    </S.GameCard>
  );
};

export default GameCard;
