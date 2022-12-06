import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center mt-10">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100  dark:bg-slate-700 ">
                        <li>
                            <Link to="/dashboard">My Appointment</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/allUser">All User</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addDoctor">Add A Doctor</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/manageDoctors">Manage Doctor</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
