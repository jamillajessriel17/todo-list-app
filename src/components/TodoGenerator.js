import { useState } from "react";
import { useTodo } from "../hooks/useTodos";

import "../css/todoGenerator.css";

const TodoGenerator = () => {
  const [todoName, setTodoName] = useState("");
  const { addTodo } = useTodo();
  const handleOnChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleOnClick = async () => {
    if (todoName.trim() === "") {
      alert("No input");
    } else {
      addTodo(todoName);
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
