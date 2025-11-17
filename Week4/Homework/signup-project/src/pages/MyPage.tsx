import styled from "@emotion/styled";
import { useState, useEffect } from "react";
// import Button from "../components/common/Button";
import Header from "../components/common/Header";
import { getUserInfo } from "../apis/mypage";
import type { MyInfoType } from "../types/myInfo";

const MyPage = () => {
  const [myInfo, setMyInfo] = useState<MyInfoType>({
    id: 0,
    username: "",
    name: "",
    email: "",
    age: 0,
  });

  useEffect(() => {
    const fetchMyInfo = async () => {
      const getInfo = await getUserInfo();
      console.log(getInfo);
      if (getInfo) {
        setMyInfo(getInfo);
      }
    };

    fetchMyInfo();
  }, []);
  return (
    <>
      {/* <Header name={myInfo?.name} /> */}
      mypage
    </>
  );
};

export default MyPage;
