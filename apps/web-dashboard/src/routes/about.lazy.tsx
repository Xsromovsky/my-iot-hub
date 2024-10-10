import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./__root"

export const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: function About() {
        return <div className="p-2 text-white">Welcome Home!</div>
    }
})