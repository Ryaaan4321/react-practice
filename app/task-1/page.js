"use client"
import { useEffect, useState } from "react"
export default function Page() {
    const [todo, setTodo] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [todos, setTodos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [editinStateId, setCurrentEditingStateId] = useState(null);
    const [editingFlag,setEditingFlag]=useState(false);
    const TODOS_PER_PAGE = 10;
    const startIndex = (currentPage - 1) * TODOS_PER_PAGE;
    const endIndex = startIndex + TODOS_PER_PAGE;
    const visibleTodos = todos.slice(startIndex, endIndex);
    function onTodoChange(e) {
        setTodo(e.target.value);
    }
    function onDescriptionChange(e) {
        setDescription(e.target.value);
    }
    function onPriorityChange(e) {
        setPriority(e.target.value);
    }
    function handleSave() {
        const id = Date.now();
        setTodos(prevTodos => [...prevTodos, {
            id,
            todo,
            description,
            priority,
            status: false
        }]);
    }
    function handleClear(id) {
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
    }
    function handleStatus(idx) {
        setTodos(prevTodos => prevTodos.map(todo =>
            todo.id == idx ?
                { ...todo, status: true }
                : todo
        ));
    }
    function handleEditClick(p) {
        setEditingFlag(true);
        setCurrentEditingStateId(p.id);
        setTodo(p.todo);
        setDescription(p.description);
        console.log("editing state id == ",editinStateId);
    }
    function handleUpdate() {
        setTodos(todos => todos.map((singletodo) => (
            singletodo.id === editinStateId ? { ...singletodo, todo, description } : singletodo
        )))
        setEditingFlag(false);
    }
    return (
        <div>
            <div className="bg-gray-200 ">
                <h1 className="text-black text-3xl">Todo Task Managment</h1>
                <div>
                    <div className="flex flex-col mt-2 text-black">
                        <label>Todo Name</label>
                        <input value={todo}
                            placeholder="Task Name"
                            className="text-black bg-white"
                            onChange={onTodoChange}>
                        </input>
                    </div>
                    <div className="flex flex-col mt-2 text-black">
                        <label>Description</label>
                        <input
                            value={description}
                            placeholder="Descreption"
                            className="text-black bg-white"
                            onChange={onDescriptionChange}>
                        </input>
                    </div>
                    <div className="flex flex-col mt-2 text-black">
                        <label>Priority</label>
                        <select className="bg-white" onChange={onPriorityChange}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    {editingFlag ?
                        <button
                            onClick={handleUpdate}
                            className="bg-green-500 text-white px-2 py-2 mt-2 text-center cursor-pointer rounded-tr-xs ml-0.5 ">
                            Update Task
                        </button>
                        :
                        <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-2 py-2 mt-2 text-center cursor-pointer rounded-tr-xs ml-0.5 ">
                            Save Task
                        </button>
                    }
                </div>
            </div>
            <div className="space-x-2 mt-3 text-xl font-semibold">
                <button className="bg-gray-400 text-white cursor-pointer rounded px-2" onClick={() => setCurrentPage(currentPage - 1)}>prev</button>
                <button className="bg-gray-400 text-white  cursor-pointer rounded px-2" onClick={() => setCurrentPage(currentPage + 1)}>next</button>
                <span className="text- font-">{currentPage}</span>
            </div>
            <div className="flex flex-col">
                <div className="w-full">
                    <div className="flex flex-col mt-2">
                        {visibleTodos.map((obj) => {
                            return (
                                <div key={obj.id} className="flex flex-row space-x-4 mt-2">
                                    <div className="flex flex-row space-x-4 mt-2">
                                        <h1
                                            className={
                                                obj.status ?
                                                    `line-through text-gray-200`
                                                    :
                                                    ``
                                            }>
                                            {obj.todo}
                                        </h1>
                                        <p
                                            className={
                                                obj.status ?
                                                    `line-through text-gray-200`
                                                    :
                                                    ``
                                            }>
                                            {obj.description}
                                        </p>
                                        <span className=
                                            {
                                                obj.status ?
                                                    `line-through text-gray-200`
                                                    :
                                                    ``}>
                                            {obj.priority}
                                        </span>
                                    </div>
                                    <div className="flex ml-2 space-x-2">
                                        <span
                                            onClick={() => { handleEditClick(obj) }}
                                            className="rounded px-1 p-0.5 text-center cursor-pointer bg-blue-800 text-white">edit</span>
                                        <span
                                            onClick={() => { handleStatus(obj.id) }}
                                            className={
                                                obj.status ?
                                                    `rounded px-1 p-0.5 text-center cursor-pointer line-through bg-gray-300 text-gray-500 ` :
                                                    `rounded px-1 p-0.5 text-center cursor-pointer bg-green-600 text-white`}>
                                            done
                                        </span>
                                        <span className="rounded px-1  p-0.5 text-center cursor-pointer bg-red-800 text-white" onClick={() => { handleClear(obj.id) }}>clear</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
