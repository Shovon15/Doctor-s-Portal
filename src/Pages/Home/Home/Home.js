import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../CountactUs/ContactUs";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import ServiceBanner from "../Services/ServiceBanner";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="my-5">
            <Banner />
            <InfoCards />
            <Services />
            <ServiceBanner />
            <MakeAppointment />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;
