import styled from "@emotion/styled";
import MemberInput from "../components/common/MemberInput";
import Button from "../components/common/Button";
import { useState } from "react";
import { getUserInfo } from "../apis/mypage";
import type { MemberDataType } from "../types/myInfo";

export const Member = () => {
  const [memberId, setMemberId] = useState<number | null>(null);
  const [memberInfo, setMemberInfo] = useState<MemberDataType | null>(null);

  const handleSearchMember = async () => {
    // search member api
    if (!memberId) return;
    const memberData = await getUserInfo(memberId);
    setMemberInfo(memberData);
  };
  return (
    <MemberLayout>
      <MemberTitle>회원 조회</MemberTitle>
      <MemberInput
        title="회원 ID"
        placeholder="숫자만 입력"
        inputState={memberId}
        setInputState={setMemberId}
        type="number"
      />
      <Button
        buttonText="확인"
        onClick={handleSearchMember}
        isOk={!!memberId}
      />
      <MerberInfoDiv>
        {memberInfo && (
          <>
            <MemberInfoColumn>
              <span>이름</span>
              <p>{memberInfo.name}</p>
            </MemberInfoColumn>
            <MemberInfoColumn>
              <span>아이디</span>
              <p>{memberInfo.username}</p>
            </MemberInfoColumn>
            <MemberInfoColumn>
              <span>이메일</span>
              <p>{memberInfo.email}</p>
            </MemberInfoColumn>
            <MemberInfoColumn>
              <span>나이</span>
              <p>{memberInfo.age}</p>
            </MemberInfoColumn>
          </>
        )}
      </MerberInfoDiv>
    </MemberLayout>
  );
};

export default Member;

const MemberLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 4rem 2rem;
`;

const MemberTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: #326c9b;
`;

const MerberInfoDiv = styled.div`
  margin-top: 2rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

const MemberInfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  gap: 1rem;
  font-size: 1.8rem;

  span {
    color: #707070;
  }
  p {
    font-weight: 600;
  }
`;
