import * as S from './style';

type Props = {
  id: number;
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
};

const ProductCard = ({ id, thumbnail, brand, title, price }: Props) => {
  return (
    <S.CardContainer to={`/product/${id}`}>
      <S.Img src={thumbnail} alt={title} />
      <S.Flex>
        <S.Brand>{brand}</S.Brand>
        <S.Title>{title}</S.Title>
      </S.Flex>
      <S.Price>${price}</S.Price>
    </S.CardContainer>
  );
};

export default ProductCard;
