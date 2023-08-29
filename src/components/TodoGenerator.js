import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slice/todoSlice";

const TodoGenerator = () => {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    setTodoName(event.target.value);
  };
  const list = useSelector((state) => state.todo.todos);
  const generateId = list.length + 1;
  const handleOnClick = () => {
    if (todoName === "") {
      alert("No input");
    } else {
      dispatch(addTodo({ id: generateId, text: todoName, done: false }));
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

      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};
export default TodoGenerator;
