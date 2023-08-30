import { DeleteOutlined } from "@ant-design/icons";
import { List } from "antd";
import { useNavigate } from "react-router-dom";
import "../css/todoItem.css";
import { useTodo } from "../hooks/useTodos";
const TodoItem = (props) => {
  const { toggleTodo, deleteTodo } = useTodo();
  const id = props.todoItem.id;

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

  return (
    <>
      <List.Item
        className="item"
        style={props.todoItem.done ? onToggleStyle : {}}
      >
        <p onClick={done}> {props.todoItem.text}</p>
        <DeleteOutlined onClick={onDeleteTodo} className="iconButton" />
      </List.Item>
    </>
  );
};
export default TodoItem;
