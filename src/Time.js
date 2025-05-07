import React, { useEffect, useState } from 'react';

function Time(props) {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        
            <p id={props.id}>{time}</p>
        
    );
}

export default Time;
