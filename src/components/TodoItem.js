import { useDispatch, useSelector } from "react-redux";
import "../css/todoItem.css";
import { deleteTodo } from "../slice/todoSlice";
import { isDone } from "../slice/todoSlice";

const TodoItem = ({ todoItem }) => {
  const id = todoItem.id;
  const dispatch = useDispatch();
  const onDeleteTodo = () => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion === true) {
      dispatch(deleteTodo(id));
    }
  };
  const done = () => {
    dispatch(isDone(id));
  };
  const onToggleStyle = {
    textDecoration: "line-through",
    color: "gray",
    backgroundColor: "#f0f1f2",
  };

  return (
    <>
      <div className="todoItem" style={todoItem.done ? onToggleStyle : {}}>
        <div className="textArea">
          <p onClick={done}>{todoItem.text}</p>
        </div>
        <div className="buttonArea">
          <button className="deleteButton" onClick={onDeleteTodo}>
            x
          </button>
        </div>
      </div>
    </>
  );
};
export default TodoItem;
