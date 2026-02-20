import { createBrowserRouter, Navigate } from "react-router";
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
import ManageAdmin from "../Components/Pages/ManageAdmin";
import ManageOrders from "../Components/SubPages/ManageOrders";
import ManageUploads from "../Components/SubPages/ManageUploads";
import Error from "../Components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
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
            },
            {
                path: "/Manage/134b949d05e69cbd5c0a",
                element: <ManageAdmin/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="orders" replace />
                    },
                    {
                        path: "orders",
                        element: <ManageOrders/>
                    },
                    {
                        path: "uploads",
                        element: <ManageUploads/>
                    }
                ]
            },
            {
                path: "*",
                element: <Error />,
            }
        ]
    }
])

export default router;


/**
 * CoverDesign
 * LogoDesign
 * ManipulationDesign
 * PrintDesign
 * SocialMediaDesign
 * ThumbnailDesign
 * 
 * eigulo holo ekjon graphycs designer er designs category tumi ..... e emon vabe design koro protita category head thakbe niche er image gulo thakbe protita image e ekta 3 dot icon thakbe jekhane tap korle delete option veshe uthbe just oi image tar jonno ar image jotogulo thakbe sheshe ekta card thakbe jate design kora thakbe upload jate chat dilei image upolad hoye jabe selected folder theke evabe protita categoryr sheshe next category shuru hobe
 */
