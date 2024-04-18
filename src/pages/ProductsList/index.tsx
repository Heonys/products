import { useState } from 'react';
import useProducts from '@/hooks/useProducts';
import { ProductCard } from '@/components';

import * as S from './style';

const ProductsList = () => {
  const [keyword, setKeyword] = useState('');
  const { data } = useProducts(10, 10);

  const handleClickMore = () => {};

  return (
    <>
      <S.InputContainer>
        <S.Input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="상품을 입력해주세요"
        />
        <S.Button>검색</S.Button>
      </S.InputContainer>
      <S.ProductList>
        {data?.products.map(({ title, id, brand, price, thumbnail }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              brand={brand}
              price={price}
              title={title}
              thumbnail={thumbnail}
            />
          );
        })}
      </S.ProductList>
      <S.ViewMore onClick={handleClickMore}>View More</S.ViewMore>
    </>
  );
};

export default ProductsList;
