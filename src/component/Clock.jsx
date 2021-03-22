import moment from 'moment';
import React, { useEffect, useState } from 'react';

function Clock(props) {

    const [state, setstate] = useState({ name: props.name, time: moment().add(props.timeZone, 'hours').format('hh:mm:ss') });
    useEffect(() => {
        const timerId = setInterval(() => {
            setstate(prev => ({
                ...prev,
                time: moment().add(props.timeZone, 'hours').format('hh:mm:ss')
            }));
        }, 1000);
        return () => clearInterval(timerId);
    },);
 
    return (
        <div>
            <div style={{ display: 'inline-block' }}>
                <div>Name Clock: {state.name} </div>
                <div>Time: {state.time}</div>
            </div>
            <button onClick = {(e) => props.remove(e)} name = {state.name}>
                Delete Clock
            </button>
        </div>
    );
};

export default Clock;
