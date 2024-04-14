import styled from "@emotion/styled";
import { Product } from "../types";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const ProductCardGrid = ({ products }: Props) => {
  return (
    <Grid>
      {products.map(({ id, thumbnail, brand, title, price }) => (
        <ProductCard
          key={id}
          id={id}
          thumbnail={thumbnail}
          brand={brand}
          title={title}
          price={price}
        />
      ))}
    </Grid>
  );
};

export default ProductCardGrid;
