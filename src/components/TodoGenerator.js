import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, loadTodo } from "../slice/todoSlice";
import "../css/todoGenerator.css";
import * as todoApi from "../apis/todoApi";

const TodoGenerator = () => {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleOnClick = async () => {
    if (todoName.trim() === "") {
      alert("No input");
    } else {
      await todoApi.addTodoTask({ text: todoName });
      await todoApi.getTodoTasks().then((response) => {
        dispatch(loadTodo(response.data));
      });

      // dispatch(addTodo({ id: null, text: todoName, done: false }));
    }
    setTodoName("");
  };
  return (
    <div className="container">
      <input
        type="text"
        value={todoName}
        onChange={handleOnChange}
        placeholder="Enter todo here"
      />

      <button className="addButton" onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
};
export default TodoGenerator;
