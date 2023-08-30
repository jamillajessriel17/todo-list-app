import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { List } from "antd";
import { useNavigate } from "react-router-dom";
import "../css/todoItem.css";
import { useTodo } from "../hooks/useTodos";
import { useState } from "react";
import EditFormModal from "./EditFormModal";
const TodoItem = (props) => {
  const { toggleTodo, deleteTodo } = useTodo();
  const id = props.todoItem.id;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const onDeleteTodo = async () => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion === true) {
      deleteTodo(id);
    }
  };
  const done = async () => {
    if (props.isDone) {
      navigate("/done/" + id);
    } else {
      toggleTodo(id, props.todoItem);
    }
  };
  const onToggleStyle = {
    textDecoration: "line-through",
    color: "gray",
    backgroundColor: "#f0f1f2",
  };
  const onToggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
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
          <DeleteOutlined onClick={onDeleteTodo} className="iconDeleteButton" />
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
