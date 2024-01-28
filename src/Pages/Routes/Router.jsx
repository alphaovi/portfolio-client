import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home/Home";
import About from "../Home/About/About";
import Login from "../Login/Login/Login";
import SignUp from "../Login/SignUp/SignUp";
import Projects from "../Projects/Projects/Projects";
import Contact from "../Home/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;