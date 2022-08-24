import "./vehicleDetail.css"
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarArticle(props) {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className={"vArticle"}>
                <div className={"vTextContainer"}>
                    <h1>Calendar</h1>
                    <Calendar onChange={setDate} value={date} selectRange={true} />
                    <div className="text-center">
                        {date.length > 0 ? (
                            <p>
                                <span><strong>Start: </strong></span>{' '} {date[0].toDateString()}
                                &nbsp; to &nbsp;
                                <span><strong>End: </strong></span> {date[1].toDateString()}
                            </p>
                        ) : (
                            <p>
                                <span>Default selected date:</span>{' '} {date.toDateString()}
                            </p>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

export default CalendarArticle;