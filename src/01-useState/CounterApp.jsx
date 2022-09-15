import { useState } from "react";

export const CounterApp = () => {

    const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <div>Counter : { counter1 }</div>
            <div>Counter : { counter2 }</div>
            <div>Counter : { counter3 }</div>
            <hr />
            <button className="btn" onClick={ 
                () => setCounter({ 
                    ...state,
                    counter1: counter1+1,
                })
                }>+1</button>
        </>
    )
}
