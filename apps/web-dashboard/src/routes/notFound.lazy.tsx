import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";


export const notFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/not-found',
    component: function Index() {
        return (
          <NotFoundPage/>
        )
      },
})

