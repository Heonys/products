import { useRecoilState, useRecoilValue } from 'recoil';
import { productsAtom, productsPageAtom } from '@/atom/productsAtom';
import { getProductList } from '@/api/product';
import { useQuery } from './useQuery';

const useProducts = (skip: number = 10) => {
  const [products, setProducts] = useRecoilState(productsAtom);
  const page = useRecoilValue(productsPageAtom) * skip;

  const { data, error, isLoading } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProductList(page),
    onSucces: (value) => {
      setProducts((prev) => [...prev, ...value!.products]);
    },
  });

  return { products, error, isLoading, total: data?.total };
};

export default useProducts;
