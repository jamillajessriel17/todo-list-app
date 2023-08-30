import { Input, Modal, message } from "antd";
import React, { useState } from "react";
import { useTodo } from "../hooks/useTodos";
const EditFormModal = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const successEdit = () => {
    messageApi.open({
      type: "success",
      content: "Success!",
    });
  };
  const todoTextInitial = props.todoItem.text;
  const { updateTextTodo } = useTodo();
  const [todoText, setTodoText] = useState(todoTextInitial);
  const handleOk = async () => {
    await updateTextTodo(props.todoItem.id, { text: todoText });
    successEdit();
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
      {contextHolder}
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
