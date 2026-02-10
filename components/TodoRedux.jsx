"use client";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, toggleTodo, removeTodo } from "@/redux/todoslice";
import { useState } from "react";
import { addTodoAsync } from "@/redux/todoThunk";

export default function TodoApp() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    function handleAdd() {
        dispatch(
            addTodo({
                id: Date.now(),
                name,
                description: desc,
                done: false
            })
        );
        setName("");
        setDesc("");
    }
    function handleAddFromThunk() {
        dispatch(
            addTodoAsync({
                id: Date.now(),
                name,
                description: desc,
                done: false
            })
        );
        setName("");
        setDesc("");
    }

    return (
        <div>

            <h2>Todos</h2>

            <input
                value={name}
                placeholder="title"
                onChange={e => setName(e.target.value)}
            />

            <input
                value={desc}
                placeholder="description"
                onChange={e => setDesc(e.target.value)}
            />
            <div className="flex space-x-1">
                <button className="px-0.5 py-0.5 bg-yellow-500 text-white rounded-sm" onClick={handleAdd}>Add</button>
                <button className="px-0.5 py-0.5 bg-green-500 text-white rounded-sm" onClick={handleAddFromThunk}>Add from Thunk Middleware</button>
            </div>
            {todos.map(todo => (
                <div key={todo.id}>


                    <div className="flex space-x-2">
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
                            {todo.name}
                        </span>

                        <button
                            className="space-y-1 px-1 py-0.5 bg-amber-700 rounded-sm text-white"
                            onClick={() =>
                                dispatch(
                                    updateTodo({
                                        id: todo.id,
                                        name: todo.name + "!",
                                        description: todo.description
                                    })
                                )
                            }
                        >
                            Update
                        </button>

                        <button
                            className="space-y-1 px-1 py-0.5 bg-green-700 rounded-sm text-white"
                            onClick={() => dispatch(removeTodo(todo.id))}>
                            Delete
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
}
