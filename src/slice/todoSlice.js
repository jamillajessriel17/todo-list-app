import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    loadTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, isDone, loadTodo } = todoSlice.actions;

export default todoSlice.reducer;
