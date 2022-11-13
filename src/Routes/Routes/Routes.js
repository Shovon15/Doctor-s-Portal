import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";

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
                path: "/appointment",
                element: <Appointment />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default router;