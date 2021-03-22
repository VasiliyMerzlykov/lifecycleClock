import React from 'react';
import Clock from './Clock';

function ClockList(props) {
    const removeList = (e) => {
        props.remove(e);
    };
    
    return (
        <>
        {props.list.map(item => <Clock key = {item.nameClock} name = {item.nameClock} timeZone = {item.time} remove = {removeList}/>)} 
        </>
    );
}

export default ClockList;
