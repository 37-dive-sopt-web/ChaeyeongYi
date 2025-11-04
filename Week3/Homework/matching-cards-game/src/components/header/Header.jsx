import * as S from "./Header.styled";
import PageTabs from "./PageTabs";

const Header = ({ activePage, onPageChange }) => {
  const handlePageChange = (target) => {
    onPageChange(target);
  };
  
  return (
    <S.Header>
      <S.Title>숫자 카드 짝 맞추기</S.Title>
      <PageTabs activePage={activePage} onPageChange={handlePageChange} />
    </S.Header>
  );
};

export default Header;
