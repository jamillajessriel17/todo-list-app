import { useState } from "react";

const TodoGenerator = (props) => {
  const [todoName, setTodoName] = useState("");
  const handleOnChange = (event) => {
    setTodoName(event.target.value);
  };
  const addItem = () => {
    if (todoName === "") {
      alert("No input");
    } else {
      props.addItem(todoName);
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

      <button onClick={addItem}>Add</button>
    </div>
  );
};
export default TodoGenerator;
