import { getProductById } from '@/api/product';
import { useQuery } from './useQuery';

const useProductMore = (id: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['detail', id],
    queryFn: () => getProductById(id),
  });

  return { data, error, isLoading };
};

export default useProductMore;
