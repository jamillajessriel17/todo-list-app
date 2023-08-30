import { useState } from "react";
import { useTodo } from "../hooks/useTodos";

import "../css/todoGenerator.css";
import { Button, Input, message } from "antd";

const TodoGenerator = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [todoName, setTodoName] = useState("");
  const { addTodo } = useTodo();
  const handleOnChange = (event) => {
    setTodoName(event.target.value);
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successfully Added!",
    });
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "No Input!",
    });
  };

  const handleOnClick = async () => {
    if (todoName.trim() === "") {
      warning();
    } else {
      addTodo(todoName);
      success();
    }
    setTodoName("");
  };
  return (
    <>
      {contextHolder}
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
