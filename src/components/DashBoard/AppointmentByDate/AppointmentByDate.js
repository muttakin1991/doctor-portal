import React from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointment }) => {
    console.log(appointment);
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appointment.length ?
                 <AppointmentShortList appointment={appointment} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;