import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle= {backgroundColor:'#F4FDFB', height:'100%'}
const DashBoard = () => {

    const formateDate = (d) => {
        var date = new Date(d);
        var newdata = (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear());
        return newdata;
    }

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState([]);
    const handleDateChange = date => {
        setSelectedDate(date);
    const data = formateDate(date);
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date: data})
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