import styled from "@emotion/styled";
import Header from "../components/common/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header name="야호" />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.main`
  width: 100%;
  margin-top: 10rem;
`;
