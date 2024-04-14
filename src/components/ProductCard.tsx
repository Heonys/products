import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  height: 300px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Text = styled.span`
  text-decoration: none;
  color: black;
`;
const Price = styled.div`
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    span {
      color: blue;
    }
  }
`;

type Props = {
  id: number;
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
};

const ProductCard = ({ id, thumbnail, brand, title, price }: Props) => {
  return (
    <StyledLink to={`/product/${id}`}>
      <CardContainer>
        <Image src={thumbnail} alt="thumbnail" />
        <ContentWrapper>
          <Text>{brand}</Text>
          <Text>{title}</Text>
        </ContentWrapper>
        <Price>${price}</Price>
      </CardContainer>
    </StyledLink>
  );
};

export default ProductCard;
