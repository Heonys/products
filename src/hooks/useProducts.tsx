import { getProductList } from '@/api/product';
import { useQuery } from './useQuery';

const useProducts = (skip: number, limit: number = 10) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products', skip, limit],
    queryFn: () => getProductList(skip, limit),
  });

  return { data, error, isLoading };
};

export default useProducts;
