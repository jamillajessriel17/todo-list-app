import { useDispatch, useSelector } from "react-redux";
import "../css/todoItem.css";
import { deleteItem } from "../slice/todoSlice";
const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();
  const newList = [...useSelector((state) => state.todo.todos)];
  const onDeleteTodo = () => {
    dispatch(deleteItem(newList.filter((item) => item.id !== todoItem.id)));
  };
  return (
    <>
      <div className="todoItem">
        {todoItem.text}
        <button className="deleteButton" onClick={onDeleteTodo}>
          x
        </button>
      </div>
    </>
  );
};
export default TodoItem;
