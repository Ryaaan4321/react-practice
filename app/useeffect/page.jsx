"use client"

import { useState, useEffect } from "react"

export default function Page() {
    const [count, setCount] = useState(0);
    /*
    In useEffect, whenever a dependency changes or the component re-renders,
    React first runs the cleanup function from the previous effect.
    After that, it executes the effect again with the updated state or props.
    
    If we do not clean up side effects (like subscriptions, timers, or event listeners),
    they may continue to reference old state or props, which can lead to stale data
    or unexpected behavior.
    */
    useEffect(() => {
        console.log("effect");
        return () => {
            console.log("from the clearnupp");
        }
    }, [count])
    function increment() {
        setCount(prev => prev + 1);
    }
    return (
        <div>
            <button onClick={increment}>inc</button>
            <div> {count} </div>
        </div>
    )
}