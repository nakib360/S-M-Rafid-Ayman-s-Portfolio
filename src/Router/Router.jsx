import { createBrowserRouter } from "react-router";
import Main from "../Components/Main";
import Home from "../Components/Pages/Home";
import Reviews from "../Components/Pages/Reviews";
import Help from "../Components/Pages/Help";
import Philosophy from "../Components/Pages/Philosophy";
import Contact from "../Components/Pages/Contact";
import About from "../Components/Pages/About";

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
                element: <Contact/>,
            },
            {
                path: "/About",
                element: <About/>,
            }
        ]
    }
])

export default router;