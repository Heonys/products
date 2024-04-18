import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { ProductDetail, ProductsList } from '@/pages';
import { pageRoutes } from './path';

const router = createBrowserRouter([
  {
    path: pageRoutes.main,
    element: <App />,
    children: [
      { index: true, element: <ProductsList /> },
      { path: pageRoutes.detail, element: <ProductDetail /> },
    ],
  },
]);

export default router;

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<ProductsList />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
