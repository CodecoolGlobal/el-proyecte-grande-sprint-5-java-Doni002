import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

import "./statistics.css"
import "react-circular-progressbar/dist/styles.css";


const ProgressBar = (props) => {
    const { type, count } = props;
    const calcColor = (percent, start, end) => {
        let a = percent / 100,
            b = (end - start) * a,
            c = b + start;

        // return an CSS hsl color string
        return 'hsl(' + Math.round(c)  + ', 80%, 50%)';
    };
    return (
    <div className={"statistics-item "}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={count}
                duration={2.2}
                easingFunction={easeQuadInOut}
                repeat
            >
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbarWithChildren
                            value={value}
                            maxValue={1}
                            text={`${roundedValue}`}
                            circleRatio={0.7}
                            styles={{
                                trail: {
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(-126deg)',
                                    transformOrigin: 'center center',
                                },
                                path: {
                                    strokeLinecap: 'butt',
                                    transform: 'rotate(-126deg)',
                                    transformOrigin: 'center center',
                                    stroke: calcColor(value, 0, 10),
                                },
                                pathTransition: "none",
                                pathTransitionDuration: 0.5,
                                text: {
                                    fill: '#313131',
                                    fontSize: "30px",
                                },
                            }}
                            strokeWidth={8}>
                            <div className={"progressbar-text"}>
                                {type}
                            </div>
                        </CircularProgressbarWithChildren>
                    );
                }}
            </AnimatedProgressProvider>
    </div>
)};

export default ProgressBar;

