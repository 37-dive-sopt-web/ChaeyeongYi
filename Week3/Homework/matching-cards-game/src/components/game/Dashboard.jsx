import * as S from "./Dashboard.styled";

const Dashboard = ({ restTime, successPair, restPair }) => {
  return (
    <S.Dashboard>
      <S.DashBoardItem>
        <p>남은 시간</p>
        <p className="status">{restTime}</p>
      </S.DashBoardItem>
      <S.DashBoardItem>
        <p>성공한 짝</p>
        <p className="status">{successPair}</p>
      </S.DashBoardItem>
      <S.DashBoardItem>
        <p>남은 짝</p>
        <p className="status">{restPair}</p>
      </S.DashBoardItem>
    </S.Dashboard>
  );
};

export default Dashboard;
