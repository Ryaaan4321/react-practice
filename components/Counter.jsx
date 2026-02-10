"use client"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decremented, incremented } from "@/redux/countslice";
export default function Counter() {
    const counter = useSelector(state => state.count.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incremented())}
                >
                    Increment
                </button>
                <span>{counter}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decremented())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}