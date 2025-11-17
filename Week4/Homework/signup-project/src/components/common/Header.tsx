import styled from "@emotion/styled";
import { useLocation } from "react-router";
import { Link } from "react-router";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const location = useLocation();
  const navBarArr = [
    { title: "내정보", path: "/mypage" },
    { title: "회원정보", path: "/members" },
    { title: "로그아웃", path: "/login" },
    { title: "회원탈퇴", path: "/" },
  ];

  return (
    <HeaderWrapper>
      <TitleDiv>
        <h1>마이페이지</h1>
        <p>안녕하세요, {name}님!</p>
      </TitleDiv>
      <NavDiv>
        {navBarArr.map((item) => (
          <NavItem
            key={item.title}
            to={item.path}
            $isfocus={location.pathname === item.path}
          >
            {item.title}
          </NavItem>
        ))}
      </NavDiv>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 1rem 10rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  color: white;
  background-color: #4784b6;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
  > h1 {
    font-size: 2.4rem;
  }
  > p {
    font-size: 1.6rem;
  }
`;

const NavDiv = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const NavItem = styled(Link)<{ $isfocus: boolean }>`
  font-size: 1.6rem;
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-weight: ${(props) => (props.$isfocus ? "700" : "400")};
`;
