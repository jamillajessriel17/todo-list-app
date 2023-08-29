import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
  const todoList = useSelector((state) => state.todo.todos);
  return (
    <>
      {todoList.map((element, index) => {
        return <TodoItem todoItem={element} key={index} />;
      })}
    </>
  );
};
export default TodoGroup;
