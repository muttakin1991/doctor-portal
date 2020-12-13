import React from 'react';

const AppointmentByDate = ({appointment}) => {
    console.log(appointment);
    return (
        <div>
            <h2>appointment: {appointment.length}</h2>
            {
                appointment.map(app => <li key={app._id}>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentByDate;