import { useDispatch, useSelector } from "react-redux";
import "../css/todoItem.css";
import { deleteItem } from "../slice/todoSlice";
import { isDone } from "../slice/todoSlice";
const TodoItem = ({ todoItem }) => {
  const id = todoItem.id;
  const dispatch = useDispatch();
  const onDeleteTodo = () => {
    dispatch(deleteItem(id));
  };
  const done = () => {
    dispatch(isDone(id));
  };

  return (
    <>
      <div className="todoItem">
        <p onClick={done}> {todoItem.text}</p>
        <button className="deleteButton" onClick={onDeleteTodo}>
          x
        </button>
      </div>
    </>
  );
};
export default TodoItem;
