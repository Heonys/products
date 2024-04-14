import { AllProducts, Product } from "../types";

export const getAllProducts = async (page: number): Promise<AllProducts> => {
  const response = await fetch(`https://dummyjson.com/products?limit=${page * 10}&skip=0`);
  const data = await response.json();
  return data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

export const getProductSearch = async (keyword: string): Promise<AllProducts> => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${keyword}`);
  const data = await response.json();
  return data;
};
