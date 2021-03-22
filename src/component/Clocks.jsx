import React, {  useState } from 'react';
import AddClock from './AddClock';
import ClockList from './ClockList';

function Clocks() {

    const [state, setstate] = useState({nameClock: '', timeZone: ''});
    const [clocksArr, setclocksArr] = useState([]);

    window.state = state

    const handlerChenge = (e) => {
        setstate(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const onClickClock = () => {
        setclocksArr(prev => ([...prev, {nameClock: state.nameClock, timeZone: state.timeZone}]))
        setstate({nameClock: '', timeZone: ''})
    };

    const remove = (e) => {
        setclocksArr(prev => ([...prev.filter(itm => itm.nameClock !== e.target.name)]))
    };


    return (
        <div>
            <AddClock onClickClock= {onClickClock} handlerChenge = {handlerChenge} nameClock = {state.nameClock} timeZone ={state.timeZone}/>
            <ClockList list = {clocksArr} remove = {remove}/>
        </div>
    );
};

export default Clocks;
