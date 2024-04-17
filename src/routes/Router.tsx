import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductDetail, ProductsList } from '@/pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
