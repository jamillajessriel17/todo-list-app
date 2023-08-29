import { useDispatch, useSelector } from "react-redux";
import "../css/todoItem.css";
import { deleteTodo } from "../slice/todoSlice";
import { isDone } from "../slice/todoSlice";
const TodoItem = ({ todoItem }) => {
  const id = todoItem.id;
  const dispatch = useDispatch();
  const onDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  const done = () => {
    dispatch(isDone(id));
  };

  return (
    <>
      <div className="todoItem">
        <div className="textArea">
          <p
            onClick={done}
            style={todoItem.done ? { "text-decoration": "line-through" } : {}}
          >
            {todoItem.text}
          </p>
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
