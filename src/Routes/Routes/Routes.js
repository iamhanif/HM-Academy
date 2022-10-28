import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseBrief from "../../Pages/Courses/CourseBrief/CourseBrief";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import AboutUs from "../../Pages/Shared/AboutUs/AboutUs";
import Blog from "../../Pages/Shared/Blog/Blog";
import FAQ from "../../Pages/Shared/FAQ/FAQ";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch(`http://localhost:5000/courseDetails`)
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch(`http://localhost:5000/courseDetails`)
            },
            {
                path: '/coursesDetails/:id',
                element: <PrivateRoute><CourseBrief /></PrivateRoute>,
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
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile /></PrivateRoute>
            }
        ]
    }

])