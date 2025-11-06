import * as S from "./RankingCard.styled";
import useLocalstorage from "../../hooks/useLocalstorage";
import { LOCALSTORAGE_KEY } from "../../constants/constants";

const RankCard = () => {
  const [record, setRecord] = useLocalstorage(LOCALSTORAGE_KEY);
  // console.log("record:", record);
  const handleResetRecord = () => {
    setRecord([]);
  };
  return (
    <S.RankCard>
      <S.TopSection>
        <p>랭킹 보드</p>
        <S.ResetButton
          onClick={() => {
            handleResetRecord();
          }}
        >
          기록 초기화
        </S.ResetButton>
      </S.TopSection>
      <S.MainSection>
        <S.RecordTable>
          <thead>
            <tr>
              <th>순위</th>
              <th>레벨</th>
              <th>클리어 시간(초)</th>
              <th>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {record.length === 0 ? (
              <p>기록이 없습니다.</p>
            ) : (
              record
                .sort((a, b) => a.clear_time - b.clear_time)
                .map((item, idx) => (
                  <tr key={item.record_id}>
                    <td>{idx + 1}</td>
                    <td>Level {item.level}</td>
                    <td>{item.clear_time}0</td>
                    <td>{new Date(item.recorded_at).toLocaleString()}</td>
                  </tr>
                ))
            )}
          </tbody>
        </S.RecordTable>
      </S.MainSection>
    </S.RankCard>
  );
};

export default RankCard;
