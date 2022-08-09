import React from 'react';
import ProgressProvider from './ProgressProvider';
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = (props) => {
    const { count, type, color } = props;

    return (
        <div className={"statistics-item"}>
        <ProgressProvider valueStart={0} valueEnd={count} >
            {(value) => (
                <CircularProgressbar
                    value={value}
                    text={ count }
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
                            stroke: color,
                        },
                        pathTransitionDuration: 0.5,
                        text: {
                            fill: '#313131',
                            fontSize: "35px",
                        },

                    }}
                    strokeWidth={8}
                />
            )}
        </ProgressProvider>
        </div>
    );
};

export default ProgressBar;