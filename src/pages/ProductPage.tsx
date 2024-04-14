import styled from "@emotion/styled";
import ProductCard from "../components/ProductCard";
import useAllProduct from "../hooks/useAllProduct";
import Button from "../components/Button";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Container = styled.section`
  max-width: 80%;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

const InputContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = searchParams.get("page") || "1";
  const [text, setText] = useState(search);

  const { products, fetchNextPage, searched, searchProduct, emptySearch } = useAllProduct(
    page,
    search
  );

  const handleClick = async () => {
    if (text === "") {
      setSearchParams({});
      setText("");
      emptySearch();
    } else {
      searchProduct(text);
      setSearchParams({ search: text });
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleClick();
  };

  const handleMoreClick = () => {
    setSearchParams({ page: `${parseInt(page) + 1}` });
    fetchNextPage();
  };

  return (
    <Container>
      <InputContainer>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeydown}
        />
        <Button onClick={handleClick}>검색</Button>
      </InputContainer>

      {searched.length !== 0 ? (
        <Grid>
          {searched.map(({ id, thumbnail, brand, title, price }) => (
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
      ) : (
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
      )}

      {products.length >= 10 && !search && <Button onClick={handleMoreClick}>더보기</Button>}
    </Container>
  );
};

export default ProductPage;
