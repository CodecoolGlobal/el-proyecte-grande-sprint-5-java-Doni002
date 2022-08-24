import "./vehicleDetail.css"
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarArticle(props) {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <div className={"vArticle"}>
                <div className={"vTextContainer"}>
                    <h1>Calendar</h1>
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div>

        </>
    );
}

export default CalendarArticle;