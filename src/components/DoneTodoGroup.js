import { useSelector } from "react-redux";
import DoneTodoItem from "./DoneTodoItem";
import { List, message } from "antd";

const DoneTodoGroup = () => {
  const todoList = useSelector((state) =>
    state.todo.todos.filter((item) => item.done)
  );
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
      <List
        className="group"
        size="small"
        itemLayout="horizontal"
        bordered
        dataSource={todoList}
        renderItem={(todoItem) => <DoneTodoItem doneItem={todoItem} />}
      />
    </>
  );
};
export default DoneTodoGroup;
