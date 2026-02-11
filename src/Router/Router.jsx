import { createBrowserRouter } from "react-router";
import Main from "../Components/Main";
import Home from "../Components/Pages/Home";
import Reviews from "../Components/Pages/Reviews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/reviews",
                element: <Reviews/>,
            },
            {
                path: "/help",
                element: <p>"What I Can Help You With?"</p>,
            },
            {
                path: "/philosophy",
                element: <p>"My Design Philosophy"</p>,
            },
            {
                path: "/contact",
                element: <p>"Contact"</p>,
            },
            {
                path: "/About",
                element: <p>"About Me"</p>,
            }
        ]
    }
])

export default router;