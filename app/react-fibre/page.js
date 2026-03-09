"use client"
import { useState } from "react"
import { startTransition } from "react"

function SlowList({ count }) {
    const items = []

    // for (let i = 0; i < 20000; i++) {
    //     items.push(
    //         <div key={i} style={{ padding: "4px", borderBottom: "1px solid #ddd" }}>
    //             Item {i} — {count}
    //         </div>
    //     )
    // }

    return <div>{items}</div>
}

export default function Page() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    return (
        <div style={{ padding: 20 }}>
            <h1>React Fiber Demo</h1>
            <input
                placeholder="Type here"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="cursor-pointer"
                onClick={() => {
                    startTransition(() => {
                    setCount(c => c + 1)
                    })
                }}
            >
                Update Counter
            </button>

            <p>Count: {count}</p>

            <SlowList count={count} />
        </div>
    )
}