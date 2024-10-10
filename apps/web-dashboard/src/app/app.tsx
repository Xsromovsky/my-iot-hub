import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
      <div className="min-h-screen w-screen">
        <LoginPage />
      </div>
  );
}

export default App;
