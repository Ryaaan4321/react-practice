"use client"

import { useState } from "react"

export default function Page(){
    const [counter,setCounter]=useState(0);
    function increase(){
        setCounter(prev=>prev+1);
    }
    function decrease(){
        setCounter(prev=>prev-1);
    }
    return (
        <div>
            <button onClick={increase}>inc</button>
            {counter}
            <button onClick={decrease}>dec</button>
        </div>
    )
}