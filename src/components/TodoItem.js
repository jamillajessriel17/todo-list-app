import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, List, Popover, message } from "antd";
import { useState } from "react";
import "../css/todoItem.css";
import { useTodo } from "../hooks/useTodos";
import EditFormModal from "./EditFormModal";
const TodoItem = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const successDelete = () => {
    messageApi.open({
      type: "success",
      content: "Successfully Deleted!",
    });
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Success!",
    });
  };
  const [open, setOpen] = useState(false);
  const handleOpenChange = () => {
    setOpen(true);
  };
  const { toggleTodo, deleteTodo } = useTodo();
  const id = props.todoItem.id;
  const [showModal, setShowModal] = useState(false);

  const done = async () => {
    await toggleTodo(id, props.todoItem);
    success();
  };
  const onToggleStyle = {
    textDecoration: "line-through",
    color: "gray",
    backgroundColor: "#f0f1f2",
  };
  const onToggleShowModal = () => {
    setShowModal(!showModal);
  };
  const popOverContent = () => {
    return (
      <>
        <div>
          <Button
            onClick={onConfirmDelete}
            style={{ color: "white", backgroundColor: "#1890ff" }}
          >
            Yes
          </Button>
          <Button
            onClick={onCancelDelete}
            style={{ color: "white", backgroundColor: "red" }}
          >
            No
          </Button>
        </div>
      </>
    );
  };
  const onConfirmDelete = async () => {
    setOpen(false);
    await deleteTodo(id);
    successDelete();
  };
  const onCancelDelete = () => {
    setOpen(false);
  };

  return (
    <>
      {contextHolder}
      <List.Item
        className="item"
        style={props.todoItem.done ? onToggleStyle : {}}
      >
        <p onClick={done}> {props.todoItem.text}</p>
        <div className="control-area">
          <EditOutlined
            className="iconEditButton"
            onClick={onToggleShowModal}
          />
          <Popover
            content={popOverContent}
            title="Are you sure?"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <DeleteOutlined className="iconDeleteButton" />
          </Popover>
        </div>
      </List.Item>

      <EditFormModal
        showModal={showModal}
        closeModal={onToggleShowModal}
        todoItem={props.todoItem}
      />
    </>
  );
};
export default TodoItem;
