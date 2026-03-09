"use client"
import { useEffect, useState } from "react";

export default function Page() {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (res.ok) {
                const data = await res.json();
                setAllData(data);
            }
        }
        fetchData();
    }, [])
    const [searchInput, setSearchInput] = useState("");
    function handleClick() {
        const fileteredResult = allData.filter(post => post.title.includes(searchInput) || post.body.includes(searchInput));
        console.log("filtered result",fileteredResult);
    }
    return (
        <>
            <div>hml lo </div>
            <input onChange={(e) => (setSearchInput(e.target.value))}></input>
            <button onClick={handleClick}>search Data</button>
        </>
    )
}