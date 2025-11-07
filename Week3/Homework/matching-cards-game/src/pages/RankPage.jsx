import * as S from "./RankPage.styled";
import useLocalstorage from "../hooks/useLocalstorage";
import { LOCALSTORAGE_KEY } from "../constants/constants";
import RankTable from "../components/rank/RankTable";

const RankPage = () => {
  const [record, setRecord] = useLocalstorage(LOCALSTORAGE_KEY);
  const handleResetRecord = () => {
    if (window.confirm("기록을 초기화하시겠습니까?")) {
      setRecord([]);
    }
  };
  return (
    <S.RankPage>
      <S.TopSection>
        <p>랭킹 보드</p>
        <S.ResetButton onClick={() => handleResetRecord()}>
          기록 초기화
        </S.ResetButton>
      </S.TopSection>
      <S.MainSection>
        <RankTable record={record} />
      </S.MainSection>
    </S.RankPage>
  );
};

export default RankPage;
