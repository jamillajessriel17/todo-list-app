import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TodoItemDetail = () => {
  const { id } = useParams();
  const todoTask = useSelector((state) =>
    state.todo.todos.find((task) => task.id === id)
  );
  return (
    <div className="todo-detail">
      <h1>Todo Item Detail</h1>
      <div>Id: {todoTask?.id}</div>
      <div>Name: {todoTask?.text}</div>
    </div>
  );
};
export default TodoItemDetail;
