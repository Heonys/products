import { useState } from 'react';
import { Product } from '@/types/product';
import { searchProduct } from '@/api/product';

const useSearch = () => {
  const [searched, setSearched] = useState<Product[]>();

  const searchKeyword = async (keyword: string) => {
    const data = await searchProduct(keyword);
    setSearched(data?.products);
  };

  const clearSearch = () => {
    setSearched(undefined);
  };

  return { searched, searchKeyword, clearSearch };
};

export default useSearch;
