import React from 'react';

function AddClock(props) {


    const hendlerOnChenge = (e) => {
        props.handlerChenge(e)
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.onClickClock();
    };

    return (
        <form onSubmit = {onSubmit}>
            <span>НАЗВАНИЕ </span><input onChange ={hendlerOnChenge} name = 'nameClock' value = {props.nameClock}/>
            <span>ВРЕМЕННАЯ ЗОНА </span><input onChange ={hendlerOnChenge} name = 'timeZone' value = {props.timeZone}/>
            <button >Add Clock</button>
        </form>
    );
}

export default AddClock;
