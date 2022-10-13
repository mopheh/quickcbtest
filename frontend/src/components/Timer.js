import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({ initialMinute, initialSeconds }) => {
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className="timer btn btn-light">
                {minutes < 10 ?  `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}
        </div>
    )
}

export default Timer;