import { useDispatch } from "react-redux";
import * as todoApi from "../apis/todoApi";
import { loadTodo } from "../slice/todoSlice";
export const useTodo = () => {
  const dispatch = useDispatch();
  const loadTodos = async () => {
    await todoApi.getTodoTasks().then((response) => {
      dispatch(loadTodo(response.data));
    });
  };
  const addTodo = async (text) => {
    await todoApi.addTodoTask({ text: text });
    loadTodos();
  };
  const toggleTodo = async (id, task) => {
    await todoApi.updateTodoTask(id, { done: !task.done });
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await todoApi.deleteTodoTask(id);
    loadTodos();
  };

  return {
    loadTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
