import styled from "@emotion/styled";
import ProductImage from "./ProductImage";

type Props = {
  thumbnail: string;
  images: string[];
  brand: string;
  title: string;
  price: number;
  description: string;
};

const StyledSection = styled.section`
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Thumbnail = styled.img`
  width: 100px;
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const Description = styled.div`
  padding: 1rem;
`;

const ProductContent = ({ thumbnail, images, brand, title, price, description }: Props) => {
  return (
    <StyledSection>
      <Header>
        <Thumbnail src={thumbnail} alt="thumbnail" />
        <div>
          <div>
            {brand} {title}
          </div>
          <div>${price}</div>
        </div>
      </Header>
      <ImageContainer>
        {images.map((image, index) => {
          return <ProductImage key={index} image={image} />;
        })}
      </ImageContainer>
      <Description>{description}</Description>
    </StyledSection>
  );
};

export default ProductContent;
