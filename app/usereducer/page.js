"use client"
import { useReducer } from "react";
import { reducer, initialState } from "@/lib/reducer";
import { reducerr, loadState } from "@/lib/reducer";
export default function Page() {
    /*
    useReducer is used when multiple state values are related and need to change together.
    Instead of updating each state separately, state transitions are described using actions.
    
    The reducer centralizes all state update logic, making changes predictable,
    explicit, and easier to reason about.
    
    In this case, count, loading, and error are related states.
    Managing them separately with multiple useState calls can become messy
    and error-prone, so useReducer is used to handle all transitions in one place,
    ensuring consistent and controlled state updates.
    */


    const [state, dispatch] = useReducer(reducer, initialState);
    const [statee, dispatchh] = useReducer(reducerr, loadState);
    return (
        <div style={{background:`${statee.color}`}}>
            <p>Count: {state.count}</p>
            <p>Loading: {String(state.loading)}</p>
            <p>Error: {state.error}</p>
            <div className="flex space-x-2 m-1">
                <button
                    className="bg-green-900 rounded-br-sm rounded-bl-sm px-1 text-white cursor-pointer"
                    onClick={() => dispatch({ type: "increment" })}>
                    increment
                </button>
                <button
                    className="bg-red-900 rounded-br-sm rounded-bl-sm px-1 text-white cursor-pointer"
                    onClick={() => dispatch({ type: "fail", payload: "Something broke" })}>
                    Fail
                </button>
                <button
                    className="bg-yellow-900 rounded-br-sm rounded-bl-sm px-1 text-white cursor-pointer"
                    onClick={() => dispatch({ type: "reset" })}>
                    Reset
                </button>
            </div>

            <p>count: {statee.count}</p>
            <div className="flex  space-x-1">color: <p className="ml-1" style={{ color: `${statee.color}` }}>  {statee.color}</p></div>
            <p>error : {statee.error}</p>
            <div className="flex space-x-2 m-1">
                <button
                    className={`bg-green-900 rounded-br-sm rounded-bl-sm px-1 text-white cursor-pointer`}
                    onClick={() => dispatchh({ type: "colorChange" })}>
                    change color
                </button>
                <button
                    className="bg-red-900 rounded-br-sm rounded-bl-sm px-1 text-white cursor-pointer"
                    onClick={() => dispatchh({ type: "increment" })}>
                    increment
                </button>
                <button
                    className="bg-yellow-900 rounded-br-sm rounded-bl-sm px-1 text-white cursor-pointer"
                    onClick={() => dispatchh({ type: "decrement" })}>
                    decrement
                </button>
                <button
                    className="bg-sky-900 rounded-br-sm rounded-bl-sm px-1 text-white cursor-pointer"
                    onClick={() => dispatchh({ type: "fail", payload: "something broke" })}>
                    error
                </button>
                <button
                    className="bg-stone-500 rounded-br-sm rounded-bl-sm px-1 text-white cursor-pointer"
                    onClick={() => dispatchh({ type: "reset"})}>
                    reset
                </button>
            </div>
        </div>
    )
}