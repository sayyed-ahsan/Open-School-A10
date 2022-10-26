import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Course from "../../pages/Course/Course/Course";
import Login from "../../pages/Login/Login";
import Rejister from "../../pages/Login/Rejister";
import Home from "../../Home/Home";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";

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
                path: '/course',
                element: <Course></Course>
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
    }
])