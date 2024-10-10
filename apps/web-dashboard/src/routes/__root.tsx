import { createRootRoute, createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NotFoundPage from '../pages/NotFoundPage';

interface MyRouterContext {
  auth: {
    isAuthenticated: boolean;
    handleChange: () => void;
  }
}

export const rootRoute = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: NotFoundPage
})