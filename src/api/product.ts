import { ProductList, Product } from '@/types/product';

const API_URL = import.meta.env.VITE_API_URL;

export const getProductList = async (
  keyword: string,
  skip: number,
  limit: number = 10,
): Promise<ProductList | undefined> => {
  try {
    const response = await fetch(
      `${API_URL}/products/search?q=${keyword}&skip=${skip}&limit=${limit}`,
    );
    if (!response.ok) throw new Error('Failed to fetch product list');

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Failed to fetch product list');
  }
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product detail');

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Failed to fetch product detail');
  }
};
