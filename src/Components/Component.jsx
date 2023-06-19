import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Component = () => {

    const dispatch = useDispatch()

    const Count = useSelector(state => state)

    return(
        <>
        <h2>{Count}</h2>
        <button onClick={(e) => dispatch({ type : 'INCREMENT' })}>Increment</button>
        <button onClick={(e) => dispatch({ type : 'DECREMENT' })}>Decrement</button>
        </>
    )
};

export default Component;