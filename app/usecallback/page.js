"use client"
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { memo } from "react";

const Child = memo(function Child({ onIncrement }) {
    useEffect(()=>{
        alert("inside the useffect of the memo child")
    })
    return <button onClick={onIncrement}>increment</button>
})
/*
useCallBack :

- useCallback is used to memoize a function reference.
- The function is recreated only when values in the dependency array change.
- On re-renders caused by unrelated state updates, React reuses the same
  function reference instead of creating a new one.
- This is useful when passing functions to memoized child components
  or when a function is used in dependency arrays.
- useCallback does NOT prevent re-renders and does NOT change
  how often the function logic runs.
- It only stabilizes the identity (reference) of the function.
*/

export default function Page() {
    const [count, setCount] = useState(0);
    const [normalCount, setNormalCount] = useState(0);
    const increment=useCallback(()=>{
        setCount(prev=>prev+1);
    },[]);
    return (
        <div>
            <p>CallBack Count : {count}</p>
            <p>Normal Count : {normalCount}</p>
            <Child onIncrement={increment}/>
            <br></br>
            <button onClick={()=>setNormalCount(prev=>prev+1)}>normal</button>
        </div>
    )
}