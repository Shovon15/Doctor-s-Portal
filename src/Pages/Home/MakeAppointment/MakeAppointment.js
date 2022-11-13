import React from "react";
import { Link } from "react-router-dom";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor.png";

const MakeAppointment = () => {
    return (
        <section
            className="mt-32 rounded-xl mx-5 p-5 lg:p-0"
            style={{
                background: `url(${appointment})`,
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img src={doctor} alt="" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg " />
                    <div>
                        <h4 className="text-lg text-white font-bold">Appointment</h4>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less
                            normal distribution of letters,as opposed to using 'Content here, content here', making it
                            look like readable English. Many desktop publishing packages and web page
                        </p>
                        <Link to="/appointment">
                            <button className="btn btn-primary">Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
