import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./vehicleDetail.css"
import 'react-calendar/dist/Calendar.css';
import {useEffect} from "react";
import {SwiperSlide} from "swiper/react";


function CalendarArticle(props) {
    const car = props.data;
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `http://localhost:8080/api/car-availability/${car.id}`
            );
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            let actualData = await response.json();
            setData(actualData);
        }
        getData().catch(reason => {console.log(reason)});
    }, );

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