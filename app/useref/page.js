"use client"
import { useRef } from "react";
import { useState } from "react";


/*
Rule:
- If changing a value should update the UI, use useState.
- If changing a value should NOT update the UI, use useRef.

In this example:
- `count` is state, so when `setCount` is called, React schedules a re-render.
- `intervalRef` is a ref, so changing `intervalRef.current` does NOT trigger a re-render.

In `handleClick`:
- `setCount` causes a re-render.
- Because a re-render happens, the updated `intervalRef.current`
  becomes visible in the UI.

In `handleClick2`:
- Only `intervalRef.current` is updated.
- No state changes, so React does not re-render.
- The ref value changes internally, but the UI does not update.
*/


export default function Page() {
    const intervalRef = useRef(0);
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(prev => prev + 1);
        intervalRef.current += 1;
        console.log("intervalRef == ", intervalRef.current)
        console.log("count == ", count);
    }
    function handleClick2() {
        intervalRef.current += 1;
        console.log("intervalRef == ", intervalRef)
        console.log("count == ", count);
    }
    return (
        <div>
            {/* <p>Interval Ref :  {intervalRef}</p>
            <p>count : {count}</p> */}
            <p>Interval Ref : {intervalRef.current}</p>
            <p>count : {count}</p>
            <button  className="cursor-pointer px-1 text-white rounded py-0.5 bg-green-800" onClick={handleClick}>inc</button>
            <br></br>
            <button className="cursor-pointer px-1 text-white rounded py-0.5 bg-yellow-800" onClick={handleClick2}>inc2</button>
        </div>
    )
}