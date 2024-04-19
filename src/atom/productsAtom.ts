import { Product } from '@/types/product';
import { atom } from 'recoil';

export const productsPageAtom = atom<number>({
  key: 'productsPage',
  default: 0,
});

export const productsAtom = atom<Product[]>({
  key: 'products',
  default: [],
});
