import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/Dashboard/AddDoctor/AddDoctor";
import AllUser from "../../Pages/Dashboard/Dashboard/AllUser/AllUser";
// import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                element: (
                    <PrivateRoutes>
                        <Appointment />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoutes>
                <DashboardLayout />
            </PrivateRoutes>
        ),
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment />,
            },
            {
                path: "/dashboard/allUser",
                element: <AllUser />,
            },
            {
                path: "/dashboard/addDoctor",
                element: <AddDoctor />,
            },
            {
                path: "/dashboard/manageDoctors",
                element: <ManageDoctors />,
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment />,
                loader: ({ params }) => fetch(``),
            },
        ],
    },
]);

export default router;
