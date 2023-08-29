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
      state.todos = [
        ...state.todos.filter((item) => item.id !== action.payload),
      ];
    },
    isDone: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].done = !state.todos[index].done;
    },
  },
});

export const { addTodo, deleteItem, isDone } = todoSlice.actions;

export default todoSlice.reducer;
