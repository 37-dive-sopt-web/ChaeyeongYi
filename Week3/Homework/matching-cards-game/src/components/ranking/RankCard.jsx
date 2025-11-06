import * as S from "./RankingCard.styled";
import useLocalstorage from "../../hooks/useLocalstorage";
import { LOCALSTORAGE_KEY } from "../../constants/constants";

const RankCard = () => {
  const [record, setRecord] = useLocalstorage(LOCALSTORAGE_KEY);
  console.log("record:", record);
  return (
    <S.RankCard>
      <S.MainSection>
        <S.TopDiv>
          <p>랭킹 보드</p>
          <div>
            {record.map((item) => (
              <div key={item.record_id}>
                <p>레벨: {item.level}</p>
                <p>기록 시간: {item.clear_time}0초</p>
                <p>기록 날짜: {new Date(item.recorded_at).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </S.TopDiv>
      </S.MainSection>
    </S.RankCard>
  );
};

export default RankCard;
