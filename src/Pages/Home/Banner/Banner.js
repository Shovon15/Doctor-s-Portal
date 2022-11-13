import React from "react";
import chair from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png";

const Banner = () => {
    return (
        <section
            className="p-12 rounded-xl"
            style={{
                background: `url(${bgImage})`,
            }}
        >
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
                        <div>
                            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Getting Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
