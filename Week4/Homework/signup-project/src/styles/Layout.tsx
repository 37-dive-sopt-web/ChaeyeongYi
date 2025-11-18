import styled from "@emotion/styled";
import Header from "../components/common/Header";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { getUserInfo } from "../apis/mypage";
import type { MemberDataType } from "../types/myInfo";

const Layout = () => {
  const [myInfo, setMyInfo] = useState<MemberDataType>({
    id: 0,
    username: "",
    name: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    const fetchMyInfo = async () => {
      const userId = localStorage.getItem("userId");
      const getInfo = await getUserInfo(Number(userId));
      console.log(getInfo);
      if (getInfo) {
        setMyInfo(getInfo);
      }
    };

    fetchMyInfo();
  }, []);

  return (
    <LayoutContainer>
      <Header name={myInfo.name} />
      <ContentContainer>
        <Outlet context={{ myInfo }} />
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
