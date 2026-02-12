import { createBrowserRouter } from "react-router";
import Main from "../Components/Main";
import Home from "../Components/Pages/Home";
import Reviews from "../Components/Pages/Reviews";
import Help from "../Components/Pages/Help";
import Philosophy from "../Components/Pages/Philosophy";
import Contact from "../Components/Pages/Contact";
import About from "../Components/Pages/About";
import CoverDesign from "../Components/SubPages/CoverDesign";
import LogoDesign from "../Components/SubPages/LogoDesign";
import ManipulationDesign from "../Components/SubPages/ManipulationDesign";
import PrintDesign from "../Components/SubPages/PrintDesign";
import SocialMediaDesign from "../Components/SubPages/SocialMediaDesign";
import ThumbnailDesign from "../Components/SubPages/ThumbnailDesign";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
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
            },
            {
                path: "/CoverDesign",
                element: <CoverDesign/>,
            },
            {
                path: "/LogoDesign",
                element: <LogoDesign/>,
            },
            {
                path: "/ManipulationDesign",
                element: <ManipulationDesign/>,
            },
            {
                path: "/PrintDesign",
                element: <PrintDesign/>,
            },
            {
                path: "/SocialMediaDesign",
                element: <SocialMediaDesign/>,
            },
            {
                path: "/ThumbnailDesign",
                element: <ThumbnailDesign/>,
            }
        ]
    }
])

export default router;