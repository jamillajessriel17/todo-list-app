import { useNavigate } from "react-router-dom";
import { useTodo } from "../hooks/useTodos";
import { List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DoneTodoItem = (props) => {
  const { deleteTodo } = useTodo();
  const id = props.doneItem.id;
  const navigate = useNavigate();
  const onDeleteTodo = async () => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion === true) {
      deleteTodo(id);
    }
  };
  const onClickDoneTodo = async () => {
    navigate("/done/" + id);
  };
  const doneTaskStyle = {
    textDecoration: "line-through",
    color: "gray",
    backgroundColor: "#f0f1f2",
  };
  return (
    <>
      <List.Item className="item" style={doneTaskStyle}>
        <p onClick={onClickDoneTodo}> {props.doneItem.text}</p>
        <DeleteOutlined onClick={onDeleteTodo} className="iconButton" />
      </List.Item>
    </>
  );
};
export default DoneTodoItem;
