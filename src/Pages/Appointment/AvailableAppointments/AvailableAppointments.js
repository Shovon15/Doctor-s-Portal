import React from "react";
import { format } from "date-fns";

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <div>
            <p className="text-center font-bold text-xl">Selected date: {format(selectedDate, "PP")}</p>
        </div>
    );
};

export default AvailableAppointments;
