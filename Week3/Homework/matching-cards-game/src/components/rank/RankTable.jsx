import * as S from "./RankTable.styled";

const RankTable = ({ record }) => {
  return (
    <S.RankTable>
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
          <tr>
            <td id="no-record" colSpan="4">
              기록이 없습니다.
            </td>
          </tr>
        ) : (
          record
            .sort((a, b) => a.clear_time - b.clear_time)
            .sort((a, b) => b.level - a.level)
            .map((item, idx) => (
              <tr key={item.record_id}>
                <td>{idx + 1}</td>
                <td>Level {item.level}</td>
                <td>{item.clear_time}</td>
                <td>{new Date(item.recorded_at).toLocaleString()}</td>
              </tr>
            ))
        )}
      </tbody>
    </S.RankTable>
  );
};

export default RankTable;
