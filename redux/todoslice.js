import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { addTodoAsync } from "./todoThunk";
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, actions) => {
            state.todos.push(actions.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload);
            if (todo) {
                todo.name = action.todo.name,
                    todo.description = action.todo.description,
                    todo.done = action.todo.done
            }
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload);
            if (todo) todo.done = !todo.done;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(t => t.id !== action.payload);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addTodoAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.todos.push(action.payload);
            })
            .addCase(addTodoAsync.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to save todo";
            });
    }
})

export const { addTodo, updateTodo, toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer;