import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const addItem = (newTodo) => {
    setTodoList((oldTodoList) => [...oldTodoList, newTodo]);
  };
  return (
    <>
      <TodoGroup todoList={todoList} />
      <TodoGenerator addItem={addItem} />
    </>
  );
};
export default TodoList;
