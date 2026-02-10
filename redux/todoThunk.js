import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTodoAsync = createAsyncThunk(
  "todo/addTodoAsync",
  async (todo) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return todo;
  }
);
