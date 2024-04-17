import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import router from './routes';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </RecoilRoot>,
);
