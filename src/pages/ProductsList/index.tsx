import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useProducts, useSearch } from '@/hooks';
import { ProductCard } from '@/components';
import { productsPageAtom } from '@/atom/productsAtom';

import * as S from './style';

const ProductsList = () => {
  const [keyword, setKeyword] = useState('');
  const setPage = useSetRecoilState(productsPageAtom);
  const { products, total } = useProducts();
  const { searched, searchKeyword, clearSearch } = useSearch();

  const handleClick = () => {
    if (keyword.length === 0) return clearSearch();
    searchKeyword(keyword);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleClick();
  };

  return (
    <>
      <S.InputContainer>
        <S.Input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="상품을 입력해주세요"
          onKeyDown={handleEnter}
        />
        <S.Button onClick={handleClick}>검색</S.Button>
      </S.InputContainer>
      <S.ProductList>
        {(searched || products).map(({ title, id, brand, price, thumbnail }) => {
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
      {products.length < total! && !searched && (
        <S.ViewMore onClick={() => setPage((prev) => prev + 1)}>View More</S.ViewMore>
      )}
    </>
  );
};

export default ProductsList;
