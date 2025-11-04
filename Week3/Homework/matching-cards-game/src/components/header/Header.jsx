import * as S from "./Header.styled";

const Header = ({ handlePageChange }) => {
  return (
    <S.HeaderContainer>
      <S.Title>숫자 카드 짝 맞추기</S.Title>
      <S.ButtonWrapper>
        <button
          type="button"
          onClick={() => {
            handlePageChange("game");
          }}
        >
          게임
        </button>
        <button
          type="button"
          onClick={() => {
            handlePageChange("ranking");
          }}
        >
          랭킹
        </button>
      </S.ButtonWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
