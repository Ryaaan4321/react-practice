"use client";
import UserSearch from "@/components/Usememo";
import { useMemo, useState } from "react";
const users = [
    { id: 1, name: 'Sudheer' },
    { id: 2, name: 'Brendon' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Dary' },
    { id: 5, name: 'Eden' }
];

export default function Page() {
    const [memoState, setMemoState] = useState(0);
    const [normalState, setNormalState] = useState(0);
    /*
    What useMemo does:
    
    - useMemo is used to memoize (cache) the result of a calculation.
    - The calculation runs only when the values in the dependency array change.
    - If the component re-renders due to unrelated state updates,
      React reuses the previously cached value instead of recalculating it.
    - This helps avoid unnecessary expensive computations during re-renders.
    - useMemo does NOT prevent re-renders; it only prevents recomputation.

    useMemo caches the result of a calculation and recomputes it only 
    when its dependencies change, 
    preventing unnecessary recalculation during unrelated re-renders.
    */
    function expensiveCalculation(n) {
        let total = 0;
        for (let i = 0; i <= 1000; i++) {
            total += n;
        }
        return total;
    }

    const result = useMemo(() => {
        return expensiveCalculation(memoState);
    }, [memoState, normalState]);

    return (
        <div>
            <p>Memoized Value: {result}</p>
            <p>Normal Value : {normalState}</p>
            <button onClick={() => setMemoState(prev => prev + 1)}>
                memo
            </button>

            <div className="bg-black w-full m-1 p-1"></div>

            <button onClick={() => setNormalState(prev => prev + 1)}>
                normal
            </button>
            <div>search component example of the use memo</div>
            <UserSearch users={users} />
        </div>
    );
}
