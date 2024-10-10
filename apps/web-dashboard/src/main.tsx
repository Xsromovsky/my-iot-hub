import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { rootRoute } from './routes/__root';
import { indexRoute } from './routes/index.lazy';
import { aboutRoute } from './routes/about.lazy';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { notFoundRoute } from './routes/notFound.lazy';
import { homeRoute } from './routes/home.lazy';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const routeTree = rootRoute._addFileChildren([indexRoute, aboutRoute, notFoundRoute, homeRoute])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

    </QueryClientProvider>
  </StrictMode>
);
