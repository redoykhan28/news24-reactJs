import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Catagory from "../Pages/Catagory/Catagory/Catagory";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News/News";
import Profile from "../Pages/Profile/Profile";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://news24-server.vercel.app/all_news')
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://news24-server.vercel.app/all_news')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://news24-server.vercel.app/newsDetails/${params.id}`)
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`https://news24-server.vercel.app/catagory_news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {

                path: '/registration',
                element: <Registration></Registration>
            },
            {

                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }

        ]
    }
])