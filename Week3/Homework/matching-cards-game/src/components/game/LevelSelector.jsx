import * as S from "./LevelSelector.styled";

const LevelSelector = ({ level, onReset }) => {
  return (
    <S.LevelSelector>
      {[1, 2, 3].map((item) => (
        <S.LevelButton
          type="button"
          key={item}
          $isActive={level === item}
          onClick={() => onReset(item)}
        >
          Level {item}
        </S.LevelButton>
      ))}
    </S.LevelSelector>
  );
};

export default LevelSelector;
