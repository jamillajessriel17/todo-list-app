import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
  const todoList = useSelector((state) => state.todo.todos);
  return (
    <>
      {(props.isDone ? todoList.filter((item) => item.done) : todoList).map(
        (element, index) => {
          return (
            <TodoItem todoItem={element} key={index} isDone={props.isDone} />
          );
        }
      )}
    </>
  );
};
export default TodoGroup;
