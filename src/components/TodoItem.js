import { useDispatch } from "react-redux";
import "../css/todoItem.css";
import { deleteTodo } from "../slice/todoSlice";
import { isDone } from "../slice/todoSlice";
import { useNavigate } from "react-router-dom";

const TodoItem = (props) => {
  const id = props.todoItem.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDeleteTodo = () => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion === true) {
      dispatch(deleteTodo(id));
    }
  };
  const done = () => {
    if (props.isDone) {
      navigate("/done/" + id);
    } else {
      dispatch(isDone(id));
    }
  };
  const onToggleStyle = {
    textDecoration: "line-through",
    color: "gray",
    backgroundColor: "#f0f1f2",
  };

  return (
    <>
      <div
        className="todoItem"
        style={props.todoItem.done ? onToggleStyle : {}}
      >
        <div className="textArea">
          <p onClick={done}>{props.todoItem.text}</p>
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
