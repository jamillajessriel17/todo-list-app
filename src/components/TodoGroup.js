import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
  const todoList = useSelector((state) => state.todo.todos);
  return (
    <>
      <h2>TODO LIST</h2>
      {todoList.map((element, index) => {
        return <TodoItem todoItem={element} key={index} />;
      })}
    </>
  );
};
export default TodoGroup;
