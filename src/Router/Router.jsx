import { createBrowserRouter } from "react-router";
import Main from "../Components/Main";
import Home from "../Components/Pages/Home";
import Reviews from "../Components/Pages/Reviews";
import Help from "../Components/Pages/Help";
import Philosophy from "../Components/Pages/Philosophy";

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
                element: <Help/>,
            },
            {
                path: "/philosophy",
                element: <Philosophy/>,
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