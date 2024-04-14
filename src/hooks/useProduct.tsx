import { useEffect, useState } from "react";
import { Product } from "../types";
import { getProductById } from "../api/product";

const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [id]);

  return { product, isLoading };
};

export default useProduct;
