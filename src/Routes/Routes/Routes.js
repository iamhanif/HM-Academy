import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import AboutUs from "../../Pages/Shared/AboutUs/AboutUs";
import Blog from "../../Pages/Shared/Blog/Blog";
import FAQ from "../../Pages/Shared/FAQ/FAQ";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/courses/:id',
                element: <Courses />
            },
            {
                path: '/fag',
                element: <FAQ />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/about',
                element: <AboutUs />
            }
        ]
    }

])