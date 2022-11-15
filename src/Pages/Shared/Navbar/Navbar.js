import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .than(() => {})
            .catch((err) => console.log(err));
    };
    const menuItems = (
        <>
            <Link to="/">
                <button className="btn btn-ghost w-full">Home</button>
            </Link>
            <Link to="/appointment">
                <button className="btn btn-ghost w-full">Appointment</button>
            </Link>
            {user?.uid ? (
                <button onClick={handleLogOut} className="btn btn-ghost">
                    SignOut
                </button>
            ) : (
                <>
                    <Link to="/login">
                        <button className="btn btn-ghost w-full">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn btn-ghost w-full">SignUp</button>
                    </Link>
                </>
            )}
        </>
    );
    const userItem = (
        <>
            <div className="dropdown dropdown-end">
                <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="userProfile" />
                    </div>
                </label>
                <ul
                    tabIndex={1}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                    <li>
                        <Link to="/" className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Settings</Link>
                    </li>
                    <li>
                        <Link to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        </>
    );

    return (
        <div className="navbar border-b ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Doctor's Portal
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
            <div className="navbar-end">{userItem}</div>
        </div>
    );
};

export default Navbar;
