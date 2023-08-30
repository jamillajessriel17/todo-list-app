import { useEffect } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useTodo } from "../hooks/useTodos";
const TodoList = (props) => {
  const { loadTodos } = useTodo();
  useEffect(() => {
    loadTodos();
  }, []);
  return (
    <>
      <h2>TODO LIST</h2>
      <TodoGroup isDone={props.isDone} />
      {!props.isDone ? <TodoGenerator /> : []}
    </>
  );
};
export default TodoList;
