import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/todoItem.css";
import { useTodo } from "../hooks/useTodos";

const TodoItem = (props) => {
  const { toggleTodo, deleteTodo } = useTodo();
  const id = props.todoItem.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDeleteTodo = async () => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion === true) {
      deleteTodo(id);
    }
  };
  const done = async () => {
    if (props.isDone) {
      navigate("/done/" + id);
    } else {
      toggleTodo(id, props.todoItem);
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
