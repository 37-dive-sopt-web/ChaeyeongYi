import styled from "@emotion/styled";
import { useState } from "react";
import { useOutletContext } from "react-router";
import type { MyInfoType, UserInfoType } from "../types/myInfo";
import Button from "../components/common/Button";
import InputContainer from "../components/common/InputContainer";
import { updateUserInfo } from "../apis/mypage";

const MyPage = () => {
  const { myInfo } = useOutletContext<{ myInfo: UserInfoType }>();
  const [updatedInfo, setUpdatedInfo] = useState<MyInfoType>({
    name: myInfo.name,
    email: myInfo.email,
    age: myInfo.age,
  });

  const handleSave = async () => {
    await updateUserInfo(updatedInfo);
    alert("정보가 저장되었어요");
  };

  return (
    <MyPageLayout>
      <h1>내 정보</h1>
      <IdDiv>
        <p className="idtitle">아이디</p>
        <p className="username">{myInfo.username}</p>
      </IdDiv>
      <InputContainer
        title="이름"
        placeholder="이름을 입력해 주세요"
        inputState={myInfo.name}
        setInputState={(v) => setUpdatedInfo((prev) => ({ ...prev, name: v }))}
        type="text"
      />
      <InputContainer
        title="이메일"
        placeholder="name@example.com"
        inputState={myInfo.email}
        type="text"
        setInputState={(v) => setUpdatedInfo((prev) => ({ ...prev, email: v }))}
      />
      <InputContainer
        title="나이"
        placeholder="숫자로 입력"
        inputState={myInfo.age ? myInfo.age : ""}
        type="number"
        setInputState={(v) =>
          setUpdatedInfo((prev) => ({ ...prev, age: Number(v) }))
        }
      />
      <Button
        buttonText="저장"
        onClick={handleSave}
        isOk={
          updatedInfo.age !== myInfo.age ||
          updatedInfo.email !== myInfo.email ||
          updatedInfo.name !== myInfo.name
        }
      />
    </MyPageLayout>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  gap: 4rem;

  > h1 {
    font-size: 3.2rem;
  }
`;

const IdDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .idtitle {
    font-size: 2rem;
    font-weight: 600;
    color: #707070;
  }

  .username {
    font-size: 2.8rem;
    font-weight: 800;
  }
`;
