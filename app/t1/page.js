"use client"

import { useEffect, useMemo, useState } from "react"

export default function Page() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [todos, setTodos] = useState([]);
    const [editingFlag, setEditingFlag] = useState(false);
    const [currentEditingState, setCurrentEditingState] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    function In() {
        setCurrentPage(prev => prev + 1);
    }
    function Dec() {
        setCurrentPage(prev => prev - 1);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const id = Date.now();
        const newTodo = { id, title, description, priority };
        setTodos((prev) => [...prev, newTodo]);
        // localStorage.setItem("todo",JSON.stringify(todos));
        // setTitle("");
        // setDescription("");
        // setPriority("low");
        // setEditingFlag(false);
        // setCurrentEditingState(null);
    }
    function handleDelete(id) {
        setTodos(todo => todo.filter(todo => todo.id !== id));
    }
    function handleUpdate() {
        console.log(title);
        console.log(description);
        console.log(priority);
        setTodos(prev => prev.map((todo) =>
            todo.id === currentEditingState
                ? { ...todo, title, description, priority }
                : todo
        ));
        setTitle("");
        setDescription("");
        setPriority("low");
        setEditingFlag(false);
        setCurrentEditingState(null);
    }
    function handleEditClick(obj) {
        setEditingFlag(true);
        setCurrentEditingState(obj.id);
        setTitle(obj.title);
        setDescription(obj.description);
        setPriority(obj.priority);
    }
    const todos_per_page = 10;
    const startIndeex = (currentPage - 1) * 10
    const endIndex = startIndeex + todos_per_page;
    const visibleTodos = todos.slice(startIndeex, endIndex);
    useEffect(() => {
        const data = localStorage.getItem("todo");
        if (data) {
            setTodos(JSON.parse(data))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos))
    }, [todos])
    const filteredTodos = useMemo(() => {
        return todos.filter(
            (todo) =>
                todo.title.toLowerCase().includes(searchTerm) ||
                todo.description.toLowerCase().includes(searchTerm))
    }, [searchTerm,todos])
    return (
        <>
            <div>
                <div>
                    <div className="space-x-3">
                        <label>title</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="title"></input>

                    </div>
                    <div className="space-x-3">
                        <label>description</label>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="description"></input>
                    </div>
                    <div>
                        <label>priority</label>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}>
                            <option>select priority</option>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    {editingFlag ?
                        <button
                            className="space-x-1.5 bg-green-900 rounded-md p-1 text-white"
                            onClick={handleUpdate}>update</button>
                        :
                        <button
                            className="space-x-1.5 bg-green-900 rounded-md p-1 text-white"
                            onClick={handleSubmit}>save</button>
                    }
                </div>
                <div>
                    <button
                        onClick={In}
                        className="bg-green-800 text-white p-0.5 rounded-sm" >increment</button>
                    {currentPage}
                    <button className="bg-gray-800 text-white p-0.5 rounded-sm"
                        onClick={Dec}>decrement</button>
                </div>
            </div>
            <input
                className="bg-green-100 p-0.5 rounded-sm 
                "
                onChange={(e) => setSearchTerm(e.target.value)} placeholder="search todos"></input>
            <button
                className="ml-1 bg-green-700 text-white rounded-sm p-0.5"> search</button>
            {filteredTodos.map((todo) => {
                return (
                    <div key={todo.id} className="flex  space-x-4">
                        <h2>{todo.title}</h2>
                        <h3>{todo.description}</h3>
                        <p>{todo.priority}</p>
                        <button onClick={() => handleDelete(todo.id)}>delete</button>
                        <button onClick={() => handleEditClick(todo)}>update</button>
                    </div>
                )
            })}
        </>
    )
}