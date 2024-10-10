import { createRoute, Navigate, redirect } from '@tanstack/react-router';
import { rootRoute } from './__root';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import useAuth from '../hooks/useAuth';
import NotFoundPage from '../pages/NotFoundPage';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/home',
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      console.log(`not authenticated : ${context.auth.isAuthenticated}`);

      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: function Index() {
    return <HomePage />;
  },
});
