import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import Button from "../components/Button";
import ProductContent from "../components/ProductContent";
import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  const { product } = useProduct(id!);
  const navigate = useNavigate();

  if (!product) return <div>로딩중 ... </div>;

  const { thumbnail, images, price, brand, title, description } = product;

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>목록으로 돌아가기</Button>
      <ProductContent
        thumbnail={thumbnail}
        images={images}
        price={price}
        brand={brand}
        title={title}
        description={description}
      />
    </Container>
  );
};

export default ProductDetailPage;
