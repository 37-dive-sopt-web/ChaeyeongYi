// Card.jsx
import style from "./Card.module.css";

const Card = ({ name, englishName, github }) => {
  // const { name, englishName, github } = props;
  return (
    <div className={style.card}>
      <p>이름: {name}</p>
      <p>깃허브: {github}</p>
      <p>영문이름: {englishName}</p>
    </div>
  );
};

export default Card;
