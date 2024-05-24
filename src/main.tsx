import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import './index.css';

import { routeTree } from './routeTree.gen';
import { CartProvider } from './components/services/CartContext'; // Import CartProvider

const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </StrictMode>
  );
}
