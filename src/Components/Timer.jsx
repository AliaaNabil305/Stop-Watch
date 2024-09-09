import React, { useContext } from 'react';
import stopWatchContext from '../Context/Store';

export default function Timer() {
    let { time } = useContext(stopWatchContext);

    return (
        <>
            <div className="timer pb-5 mb-5 ">
                <span className="digits">
                    {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                    {('0' + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits ms text-danger">
                    {('0' + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
        </>
    );
}
