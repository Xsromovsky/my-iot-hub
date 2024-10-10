import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import LoginPage from "../pages/LoginPage";


export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: function Index() {
        return (
          <LoginPage/>
        )
      },
})

