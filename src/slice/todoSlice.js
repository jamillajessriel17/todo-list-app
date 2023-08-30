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
    addTodo: (state, action) => {
      const todo = action.payload;
      if (state.todos.length === 0) {
        todo.id = 1;
      } else {
        todo.id = state.todos[state.todos.length - 1].id + 1;
      }

      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
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

export const { addTodo, deleteTodo, isDone, loadTodo } = todoSlice.actions;

export default todoSlice.reducer;
