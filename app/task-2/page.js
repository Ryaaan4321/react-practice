"use client"
import { useState } from "react"

export default function Page() {
    const [states, setStates] = useState([]);
    const [state, setState] = useState("");
    const [singleCity, setSingleCity] = useState("");
    const [prant, setPrant] = useState([]);
    const [currentState, setCurrentState] = useState("");
    const [editingState, setEditingState] = useState(null);
    const [editingFlag, setEditingFlag] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_LIMIT = 10;
    const start = (currentPage - 1) * PAGE_LIMIT;
    const end = start + PAGE_LIMIT;
    const visiblePrants = prant.slice(start, end);
    function handleCityChange(e) {
        setSingleCity(e.target.value);
    }
    function handleStateChange(e) {
        setState(e.target.value);
    }
    function handleSaveState() {
        let id = Date.now();
        console.log("state from the handle save state == ", state);
        setStates([...states, { id, state }]);
        setState("");
    }
    function handlePrant() {
        const id = Date.now();
        if (editingState !== null) {
            handleUpdate();
            return;
        }
        setPrant([...prant, { id, currentState, singleCity }]);
        setSingleCity("");
    }
    function handleDeletePrant(id) {
        setPrant(prevPrant =>
            prevPrant.filter(prant => prant.id !== id)
        );
    }
    function handleEditClick(p) {
        // console.log("p from the handleedit click =", p)
        setEditingState(p.id);
        console.log("editing state from handleEdit == ", editingState);
        setCurrentState(p.currentState);
        setSingleCity(p.singleCity);
        setEditingFlag(true);
    }
    function handleUpdate() {
        console.log("ediitng state from handleupdate == ", editingState)
        console.log("current state == ", currentState);
        console.log("current city == ", singleCity);
        console.log("editing state == ", editingState);
        setPrant(prevPrant => prevPrant.map((p) =>
            p.id === editingState ? { ...p, currentState, singleCity } : p
        ))
        setEditingState(null);
    }
    function handleIncrease()
    {
        setCurrentPage(currentPage+1);
    }
    function handleDecrease(){
        setCurrentPage(currentPage-1);
    }
    return (
        <div className="">
            <h1 className="text-2xl">Task 2 </h1>
            <div className="space-x-2">
                <input placeholder="Enter State Name"
                    value={state}
                    onChange={handleStateChange}>
                </input>
                <span className="bg-gray-200 px-1 py-1 cursor-pointer rounded-b-sm rounded-e-sm rounded-l-sm"
                    onClick={handleSaveState}>
                    Save State</span>
            </div>
            <div className="flex flex-row mt-2 space-x-2">
                <select
                    onChange={(e) => setCurrentState(e.target.value)}
                >
                    <option >Select state </option>
                    {states.map((state) => {
                        return (
                            <option
                                key={state.id}
                                value={state.state}
                                className="p-2">
                                {state.state}
                            </option>
                        )

                    })}
                </select>
                <div className="flex space-x-2">
                    <input
                        value={singleCity}
                        placeholder="Enter your city Name"
                        onChange={handleCityChange}
                        className="" ></input>
                    <button
                        onClick={handlePrant}
                        className="bg-gray-200 px-3 py-0.5 cursor-pointer rounded-b-sm rounded-e-sm rounded-l-sm">
                        Add city
                    </button>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button
                onClick={handleDecrease} 
                className="bg-teal-800 text-white rounded-sm px-2 py-0.5 items-center">-</button>
                <span className="text-xl text-zinc-600">{currentPage}</span>
                <button 
                onClick={handleIncrease}
                className="bg-teal-800 text-white rounded-sm px-2 py-0.5 items-center">+</button>
            </div>
            <div>
                {visiblePrants.map((p) => (
                    <div
                        key={p.id}
                        className="flex flex-row space-x-24 ">
                        <div className="min-w-0">
                            {
                                p.id === editingState ?
                                    <input
                                        placeholder="edited state"
                                        className="min-w-0"
                                        onChange={(e) => setCurrentState(e.target.value)}>
                                    </input>
                                    :
                                    <div className="text-left text-wrap ">
                                        {(p.currentState)}
                                    </div>
                            }
                        </div>
                        <div className="flex flex-row mt-2">
                            {
                                p.id === editingState ?
                                    <input
                                        className="bg-gray-200 rounded-sm min-w-0"
                                        onChange={(e) => setSingleCity(e.target.value)}
                                        placeholder="city"></input> :
                                    <div
                                        className="text-center rounded-sm ml-16 px-4 bg-green-300 ">
                                        {p.singleCity}
                                    </div>
                            }
                            {p.id === editingState ?
                                <button
                                    onClick={handleUpdate}
                                    className="rounded-xl px-2 py-0.5 bg-green-400 text-amber-50"
                                >
                                    Save Changes</button>
                                :
                                <div>
                                    <button
                                        onClick={() => handleEditClick(p)}
                                        className="rounded-xl px-2 py-0.5 bg-gray-400" >
                                        Edit City
                                    </button>
                                    <button
                                        onClick={() => { handleDeletePrant(p.id) }}
                                        className="rounded-xl px-2 py-0.5 bg-red-800 text-white">
                                        Delete
                                    </button>
                                </div>
                            }
                        </div>

                    </div>
                ))}
            </div>
        </div >
    )
}