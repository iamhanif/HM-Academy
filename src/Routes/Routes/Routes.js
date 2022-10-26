import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
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
                element: <Courses />,
                loader: ({ params }) => fetch(`http://localhost:5000/courseDetails/${params.id}`)
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
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }

])