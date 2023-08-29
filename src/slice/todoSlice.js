import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
