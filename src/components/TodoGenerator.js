import { useState } from "react";
import { useTodo } from "../hooks/useTodos";
import { UserOutlined } from "@ant-design/icons";

import "../css/todoGenerator.css";
import { Button, Input } from "antd";

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
    <>
      <Input
        className="input"
        onChange={handleOnChange}
        size="large"
        placeholder="What are you going todo today?"
        value={todoName}
      />
      <Button type="primary" onClick={handleOnClick}>
        Add
      </Button>
    </>
  );
};
export default TodoGenerator;
