import { useEffect, useState } from "react";
import { Product } from "../types";
import { getAllProductsByPage, getProductSearch } from "../api/product";

const useAllProduct = (pages: string, search?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searched, setSearched] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const fetchProducts = (search?: string) => {
    if (search || search === "") {
      getProductSearch(search).then((res) => {
        setSearched(res.products);
      });
    } else {
      getAllProductsByPage(page).then((res) => {
        setProducts((prevProducts) => [...prevProducts, ...res.products]);
      });
    }
  };

  useEffect(() => {
    if (search) {
      fetchProducts(search);
    }
    fetchProducts();
  }, [page]);

  const fetchNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const searchProduct = (keyword: string) => {
    fetchProducts(keyword);
  };
  const emptySearch = () => {
    setSearched([]);
  };

  return { products, fetchNextPage, searched, searchProduct, emptySearch };
};

export default useAllProduct;
