import { Input, Modal } from "antd";
import React, { useState } from "react";
import { useTodo } from "../hooks/useTodos";
const EditFormModal = (props) => {
  const todoTextInitial = props.todoItem.text;
  const { updateTextTodo } = useTodo();
  const [todoText, setTodoText] = useState(todoTextInitial);
  const handleOk = () => {
    updateTextTodo(props.todoItem.id, { text: todoText });
    props.closeModal();
  };
  const handleCancel = () => {
    setTodoText(todoTextInitial);
    props.closeModal();
  };
  const textOnChange = (e) => {
    setTodoText(e.target.value);
  };
  return (
    <>
      <Modal
        title="Edit Todo"
        open={props.showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input value={todoText} onChange={textOnChange}></Input>
      </Modal>
    </>
  );
};
export default EditFormModal;
