import styled from "@emotion/styled";

type Props = {
  image: string;
};

const Image = styled.img`
  object-fit: cover;
  max-width: 300px;
  height: 100%;
`;

const ProductImage = ({ image }: Props) => {
  return <Image src={image} alt="product" />;
};

export default ProductImage;
