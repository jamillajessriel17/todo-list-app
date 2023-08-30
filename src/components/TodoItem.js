import { useDispatch } from "react-redux";
import "../css/todoItem.css";
import { deleteTodo, loadTodo } from "../slice/todoSlice";
import { useNavigate } from "react-router-dom";
import * as todoApi from "../apis/todoApi";

const TodoItem = (props) => {
  const id = props.todoItem.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDeleteTodo = async () => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion === true) {
      await todoApi.deleteTodoTask(id);
      const response = await todoApi.getTodoTasks();
      dispatch(loadTodo(response.data));
    }
  };
  const done = async () => {
    if (props.isDone) {
      navigate("/done/" + id);
    } else {
      await todoApi.updateTodoTask(id, { done: !props.todoItem.done });
      const response = await todoApi.getTodoTasks();
      dispatch(loadTodo(response.data));
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
