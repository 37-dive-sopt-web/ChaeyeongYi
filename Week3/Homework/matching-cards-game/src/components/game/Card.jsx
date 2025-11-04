import * as S from './Card.styled';

const Card = ({num, isFront, onChangeFront}) => {
    return (
        <S.CardWrapper $isFront={isFront} onClick={onChangeFront}>
            <S.Front>?</S.Front>
            <div>{num}</div>
        </S.CardWrapper>
    )
};

export default Card;