import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle= {backgroundColor:'#F4FDFB', height:'100%'}
const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState([]);
    const handleDateChange = date => {
        setSelectedDate(date);

        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date})
        })
        .then(res =>res.json())
        .then(data => setAppointment(data))
    }
    return (
        <section>
            <div style={containerStyle} className="container-fulid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointment={appointment}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;