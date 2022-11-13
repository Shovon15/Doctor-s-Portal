import React from "react";
import treatment from "../../../assets/images/treatment.png";

const ServiceBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row p-12 lg:p-32">
                <img src={treatment} className="rounded-lg lg:w-1/2 shadow-2xl" alt="treatment" />
                <div className="m-10">
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Getting Started</button>
                    {/* <PrimaryButton>Getting Started</PrimaryButton> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;
