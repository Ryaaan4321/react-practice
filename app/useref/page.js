"use client"
import { useRef } from "react";
import { useState } from "react";


export default function Page(){
    const intervalRef=useRef(0);
    const inputRef=useRef(null);

    function handleClick(){
        intervalRef.current=intervalRef.current+1;
        alert("clicked " + intervalRef.current + " times");
    }
    return (
        <button onClick={handleClick} className="bg-gray-500 px-2 py-0.5 rounded mt-2 text-white  cursor-pointer">
            hello hello
        </button>
    )
}