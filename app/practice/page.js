"use client";

import { useState, useEffect, useRef, useReducer, useCallback, useMemo, memo } from "react";
const users = [
    { name: "aryan", class: "9", sub: "cs" },
    { name: "aa", class: "10", sub: "mt" },
    { name: "rya", class: "90", sub: "ch" },
    { name: "op", class: "100", sub: "io" },
    { name: "io", class: "89", sub: "uii" }
]
const initalState = {
    count: 0,
    loading: false,
    error: null
}

export function reducer(state, action) {
    console.log("reducer  got callleddddddd")
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1,
                loading: false,
                error: ""
            }
    }
    switch (action.type) {
        case "error":
            return {
                ...state,
                count:state.count * 0,
                loading : false,
                error :"error"
            }
    }
    switch (action.type) {
        case "loading":
            return {
                count : state.count * 0,
                loading : true,
                error : ""
            }
    }
}
export default function Page() {
    const [user, setUser] = useState([]);
    const initialRef = useRef(1);
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect(() => {
        async function fahh() {
            for (let i = 0; i < users.length; i++) {
                const now = Date.now() + i;
                const u = users[i];
                setUser((user) => [...user, { now, u }]);
                initialRef.current += 1;
            }
        }
        fahh()
        console.log("from the clean up function")
        return () => {
            setUser([]);
            initialRef.current = 0;
        }
    }, [])
    console.log(state);
    return (
        <div>
            <h2>hhhhhhhhhh</h2>

            <div className="space-x-1 text-white">
                <button
                    className="bg-green-600 px-1.5 py-0.5 rounded-sm cursor-pointer"
                    onClick={() => dispatch({ type: "increment" })}>increment</button>
                <button
                    className="bg-red-600 px-1.5 py-0.5 rounded-sm cursor-pointer"
                    onClick={() => dispatch({ type: "error" })}>error</button>
                <button
                    className="bg-yellow-600 px-1.5 py-0.5 rounded-sm cursor-pointer"
                    onClick={() => dispatch({ type: "loading" })}>loading</button>
            </div>
            <div>
                <p>{state.count}</p>
                <p>{state.error}</p>
                <p >{state.loading ? "....loading":""}</p>
            </div>
            <li>{initialRef.current}</li>
            {
                user.map((uu) => {
                    return (
                        <div key={uu.now} className="flex items-start space-x-2">
                            <p className="text-black">{uu.u.name}</p>
                            <h1>{uu.u.class}</h1>
                            <h3>{uu.u.sub}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}