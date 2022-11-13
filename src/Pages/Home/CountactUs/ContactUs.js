import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
    return (
        <section
            className="mt-32 rounded-xl mx-5 p-5 lg:p-0"
            style={{
                background: `url(${appointment})`,
            }}
        >
            <div className="text-center mx-auto py-10">
                <h1 className="text-xl text-green-400">Contact Us</h1>
                <h1 className="text-2xl text-white mb-4">Stay connected with us</h1>
                <div className="flex flex-col mx-auto w-96 space-y-5">
                    <input type="text" placeholder="Email address" className="input " />
                    <input type="text" placeholder="Subject" className="input " />
                    <textarea type="text" placeholder="Your message" className="input h-32 " />
                </div>
                <input type="submit" value="submit" className="btn btn-primary m-5 px-12"></input>
            </div>
        </section>
    );
};

export default ContactUs;
