import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Course from "../../pages/Course/Course/Course";
import CourseDetails from "../../pages/Course/Courses/CourseDetails";
import Courses from "../../pages/Course/Courses/Courses";
import Login from "../../pages/Login/Login";
import Rejister from "../../pages/Login/Rejister";
import Home from "../../Home/Home";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CheckOut from "../../pages/Course/CheckOut/CheckOut";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Rejister></Rejister>
            },
            {
                path: '/*',
                element: <PageNotFound></PageNotFound>
            }
        ]
    },
    {
        path: '/course',
        element: <Course></Course>,
        loader: () => fetch('https://assignment-10-server-sayyed-ahsan.vercel.app/courses'),
        children: [
            {
                path: '/course',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-sayyed-ahsan.vercel.app/courses'),
            },
            {
                path: '/course/deatils/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://assignment-10-server-sayyed-ahsan.vercel.app/coursedetail/${params.id}`),
            },
            {
                path: '/course/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-sayyed-ahsan.vercel.app/coursedetail/${params.id}`),
            }
        ]
    },
])