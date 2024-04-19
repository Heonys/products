import { ProductList, Product } from '@/types/product';

const API_URL = import.meta.env.VITE_API_URL;

export const getProductList = async (
  skip: number = 0,
  limit: number = 10,
): Promise<ProductList | undefined> => {
  const response = await fetch(`${API_URL}/products?skip=${skip}&limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch product list');

  const data = await response.json();
  return data;
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product detail');

  const data = await response.json();
  return data;
};

export const searchProduct = async (keyword: string): Promise<ProductList | undefined> => {
  const response = await fetch(`${API_URL}/products/search?q=${keyword}`);
  if (!response.ok) throw new Error('Failed to search product');

  const data = await response.json();
  return data;
};
