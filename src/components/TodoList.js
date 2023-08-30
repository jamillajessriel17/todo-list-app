import { useEffect } from "react";
import { useTodo } from "../hooks/useTodos";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
const TodoList = (props) => {
  const { loadTodos } = useTodo();
  useEffect(() => {
    loadTodos();
  }, []);
  return (
    <>
      <h2>TODO LIST</h2>
      <TodoGroup isDone={props.isDone} />
      <br />
      {<TodoGenerator />}
    </>
  );
};
export default TodoList;
