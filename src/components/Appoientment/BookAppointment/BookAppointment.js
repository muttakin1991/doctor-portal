import React from 'react';
import BookingCard from '../BookignCard/BookingCard';

const BookAppointment = ({date}) => {
    const bookingData = [
        {
            _id: '5e8df50akd78kakjkldjfyh7jjkkalepo23de',
            id: 1,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 Am',
            totalSpace: 10
        },
        {
            _id: '5e8df50akd78kakjkldjfyh7jjkkalepo23de',
            id: 2,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 Am',
            totalSpace: 10
        },
        {
            _id: '5e8df50akd78kakjkldjfyh7jjkkalepo23de',
            id: 3,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 Am',
            totalSpace: 10
        },
        {
            _id: '5e8df50akd78kakjkldjfyh7jjkkalepo23de',
            id: 4,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 Am',
            totalSpace: 10
        },
        {
            _id: '5e8df50akd78kakjkldjfyh7jjkkalepo23de',
            id: 5,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 Am',
            totalSpace: 10
        },
        {
            _id: '5e8df50akd78kakjkldjfyh7jjkkalepo23de',
            id: 6,
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 Am',
            totalSpace: 10
        },
    ];
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Avaibleable Appointment on {date.toString()} </h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;