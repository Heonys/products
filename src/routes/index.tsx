import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ProductDetail, ProductsList } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ProductsList /> },
      { path: '/product/:id', element: <ProductDetail /> },
    ],
  },
]);

export default router;
