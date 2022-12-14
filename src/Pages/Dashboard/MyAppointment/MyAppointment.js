import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `https://doctors-portal-server-seven-gamma.vercel.app/bookings?email=${user?.email}`;

    const {
        data: bookings = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                header: {
                    authorization: `bearer${localStorage.getItem("accessToken")}`,
                },
            });
            const data = await res.json();
            return data;
        },
    });
    console.log(bookings);
    return (
        <div className="w-full px-10">
            <h1 className="text-3xl">My Appointment</h1>
            <div className="overflow-x-auto dark:text-slate-700">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, i) => (
                            <tr key={booking._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {booking.price && !booking.paid && (
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className="btn btn-primary btn-sm">Pay</button>
                                        </Link>
                                    )}
                                    {booking.price && booking.paid && <span className="text-green-500">Paid</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
