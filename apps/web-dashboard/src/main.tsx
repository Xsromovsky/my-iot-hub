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
import useAuth from './hooks/useAuth';
import { UserProvider } from './contexts/UserContext';

const routeTree = rootRoute._addFileChildren([
  indexRoute,
  aboutRoute,
  notFoundRoute,
  homeRoute,
]);

const router = createRouter({ routeTree, context: { auth: undefined! } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

function InnerApp() {
  const auth = useAuth();
  router.update({ context: { auth } });
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <InnerApp />
      </UserProvider>
      {/* <InnerApp /> */}
    </QueryClientProvider>
  </StrictMode>
);
