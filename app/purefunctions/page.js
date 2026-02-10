"use client"
import { memo } from "react";
import { useState } from "react";

/*
Pure Components re-render only when their props or 
state change (by shallow comparison), 
not just because the parent re-rendered.
*/

const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
    return (
        <>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </>
    )
})

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>
            <label>
                Name: {""}
                <input value={name} placeholder="your name" onChange={(e) => setName(e.target.value)}></input>
            </label>
            <label>
                Email: {""}
                <input value={email} placeholder="your email" onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <EmployeeProfile name={name} />
        </>
    )
}