import { useNavigate } from "react-router-dom";
import { useTodo } from "../hooks/useTodos";
import { Button, List, Popover, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

const DoneTodoItem = (props) => {
  const { deleteTodo } = useTodo();
  const id = props.doneItem.id;
  const navigate = useNavigate();
  const onClickDoneTodo = async () => {
    navigate("/done/" + id);
  };
  const doneTaskStyle = {
    textDecoration: "line-through",
    color: "gray",
    backgroundColor: "#f0f1f2",
  };
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(true);
  };
  const onConfirmDelete = () => {
    setOpen(false);
    deleteTodo(id);
    successDelete();
  };
  const onCancelDelete = () => {
    setOpen(false);
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
  const [messageApi, contextHolder] = message.useMessage();
  const successDelete = () => {
    messageApi.open({
      type: "success",
      content: "Successfully Deleted!",
    });
  };
  return (
    <>
      {contextHolder}
      <List.Item className="item" style={doneTaskStyle}>
        <p onClick={onClickDoneTodo}> {props.doneItem.text}</p>
        <Popover
          content={popOverContent}
          title="Are you sure?"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <DeleteOutlined className="iconDeleteButton" />
        </Popover>
      </List.Item>
    </>
  );
};
export default DoneTodoItem;
