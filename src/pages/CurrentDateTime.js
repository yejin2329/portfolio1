import React, {useState, useEffect} from 'react';

const CurrentDateTime=()=>{
    const[currentDateTime, setCurrentDateTime]=useState(new Date());

    useEffect(()=>{
        const timer=setInterval(()=>{
            setCurrentDateTime(new Date());
        }, 1000);

        //clear interval on unmount
        return()=>{
            clearInterval(timer);
        };
    }, []);
    
    return(
        <div className="feature">
        <div className="current-date-time">
            {currentDateTime.toLocaleDateString('en-US')}<br/>{currentDateTime.toLocaleTimeString('en-US')}
        </div>
        </div>
    )
}

export default CurrentDateTime;