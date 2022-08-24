import "./vehicleDetail.css"
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarArticle(props) {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className={"vArticle"}>
                <div id="calendarContainer" className={"vTextContainer"}>
                    <h1>Calendar</h1>
                    <Calendar onChange={setDate} value={date} selectRange={true} />
                    <div className="text-center">
                        {date.length > 0 ? (
                            <p>
                                <div><strong>Start: </strong></div>{' '} {date[0].toDateString()}
                                &nbsp; to &nbsp;
                                <div><strong>End: </strong></div> {date[1].toDateString()}
                            </p>
                        ) : (
                            <p>
                                <div>Default selected date:</div>{' '} {date.toDateString()}
                            </p>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

export default CalendarArticle;