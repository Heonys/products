import { useEffect, useState } from "react";
import { Product } from "../types";
import { getProductSearch, getAllProducts } from "../api/product";

const useAllProduct = (page: string, search?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searched, setSearched] = useState<Product[]>([]);

  const fetchProducts = ({ search, nextpage }: { search?: string; nextpage?: string }) => {
    if (search || search === "") {
      getProductSearch(search).then((res) => {
        setSearched(res.products);
      });
    } else {
      getAllProducts(nextpage ? parseInt(nextpage) : parseInt(page)).then((res) => {
        setProducts(res.products);
      });
    }
  };

  useEffect(() => {
    if (search) {
      fetchProducts({ search });
    }
    fetchProducts({});
  }, [page]);

  const fetchNextPage = (nextpage: string) => {
    fetchProducts({ nextpage });
  };

  const searchProduct = (search: string) => {
    fetchProducts({ search });
  };
  const emptySearch = () => {
    setSearched([]);
  };

  return { products, fetchNextPage, searched, searchProduct, emptySearch };
};

export default useAllProduct;
