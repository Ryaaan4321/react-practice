"use client"
import { useEffect, useMemo, useState } from "react";
import { useRef } from "react";
import { memo } from "react";
import { useReducer } from "react";
const Parent = memo(function fn({ name, email }) {
    console.log("memo function got called")
    return (
        <>
            <div className="flex flex-col">
                <span>Profile Name : {name}</span>
                <span>Profile Email : {email}</span>
            </div>
        </>
    )
})
const initialState = {
    companyName: "aa",
    locationn: "lkw",
    phoneNumber: "09",
    error: null
}
function reducer(state, action) {
    switch (action.type) {
        case "namechange":
            return {
                ...state,
                companyName: action.payload
            };

        case "locationchange":
            return {
                ...state,
                locationn: action.payload
            };

        case "numberchange":
            return {
                ...state,
                phoneNumber: action.payload
            };

        case "error":
            return {
                ...state,
                companyname: "",
                locationn: "",
                phoneNumber: "",
                error: action.payload
            };

        case "reset":
            return initialState;

        default:
            return state;
    }
}

export default function Page() {
    const [statee, setState] = useState(0);
    const [cnt, setcnt] = useState(0);
    const ref = useRef(0);
    const [mx, setMx] = useState(10000);
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    function cal(mx) {
        let sm = 0;
        for (let i = mx; i >= 0; i--) {
            sm += i
        }
        return sm;
    }
    let calculatedValue = useMemo(() => {
        return cal(mx)
    }, [mx]);
    useEffect(() => {
        console.log("effect runs means we have loaded the page again")
    }, [statee, ref]);
    function increment() {
        setcnt(prev => prev + 1);
        ref.current = ref.current + 1;
        console.log("ref current ", ref.current);
    }
    function refIncremnt() {
        ref.current = ref.current + 1;
    }
    return (
        <>
            <div>
                <div>
                    <p>Company: {state.companyName}</p>
                    <p>Location: {String(state.locationn)}</p>
                    <p>Number: {state.phoneNumber}</p>
                    <p>Error : {state.error}</p>
                </div>
                <div className="space-x-1">
                    <input placeholder="company name" onChange={(e) => setCompanyName(e.target.value)}></input>
                    <input placeholder="location name" onChange={(e) => setLocation(e.target.value)}></input>
                    <input placeholder="number" onChange={(e) => setPhoneNumber(e.target.value)}></input>
                </div>
                <div className="space-x-1">

                    <button
                        className="px-1 py-0.5 bg-green-900 rounded-t-md mt-2 text-white cursor-pointer"
                        onClick={() => dispatch({ type: "namechange", payload: companyName })}
                    >changeCompanayName</button>
                    <button
                        className="px-1 py-0.5 bg-sky-800 rounded-t-md mt-2 text-white cursor-pointer"
                        onClick={() => dispatch({ type: "locationchange", payload: location })}
                    >changeLocation</button>
                    <button
                        className="px-1 py-0.5 bg-lime-900 rounded-t-md mt-2 text-white cursor-pointer"
                        onClick={() => dispatch({ type: "numberchange", payload: phoneNumber })}
                    >changeNumber</button>
                    <button
                        className="px-1 py-0.5 bg-red-900 rounded-t-md mt-2 text-white cursor-pointer"
                        onClick={() => dispatch({ type: "error", payload: "Something went wrong" })}
                    >error</button>
                    <button
                        className="px-1 py-0.5 bg-gray-500 rounded-t-md mt-2 text-white cursor-pointer"
                        onClick={() => dispatch({ type: "reset" })}
                    >reset</button>
                </div>
            </div>
            <div>
                <p>memo here</p>
                <div className="flex flex-col">
                    <input onChange={(e) => setname(e.target.value)} placeholder="type your name nigga"></input>
                    <input onChange={(e) => setemail(e.target.value)} placeholder="type your email nigga"></input>
                </div>
                <Parent name={name} />
            </div>
            <div>
                <p>use memo here</p>
                <p>{calculatedValue}</p>
                <button
                    onClick={() => setMx(prev => prev + 1)}
                    className="px-1 py-0.5 bg-pink-900 rounded text-white cursor-pointer">inc-memo</button>
            </div>
            <div className="space-x-1 mt-1">
                <button
                    className="px-1 py-0.5 bg-green-900 rounded text-white cursor-pointer"
                    onClick={increment}
                >increment</button>
                <button
                    className="px-1 py-0.5 bg-sky-900 rounded text-white cursor-pointer"
                    onClick={refIncremnt}
                >ref-inc</button>
            </div>
            <div className="flex ">
                <span>{cnt}</span>
            </div>
            <div>
                <span>{ref.current}</span>
            </div>
            <div className="flex">
                <input placeholder="type something!" onChange={(e) => setState(e.target.value)}></input>
            </div>
        </>
    )
}