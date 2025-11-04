import * as S from "./PageTabs.styled";

const PageTabs = ({ activePage, onPageChange }) => {
  const handlePageChange = (target) => {
    onPageChange(target);
  };
  return (
    <S.PageTabs>
      <S.PageButton
        $isActive={activePage === "game"}
        type="button"
        onClick={() => handlePageChange("game")}
      >
        게임
      </S.PageButton>
      <S.PageButton
        $isActive={activePage === "ranking"}
        type="button"
        onClick={() => handlePageChange("ranking")}
      >
        랭킹
      </S.PageButton>
    </S.PageTabs>
  );
};

export default PageTabs;
