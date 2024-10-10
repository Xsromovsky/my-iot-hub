import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./__root";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";


export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/home',
    component: function Index() {
        return (
          <HomePage/>
        )
      },
})

