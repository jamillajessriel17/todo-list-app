import { useSelector } from "react-redux";
import DoneTodoItem from "./DoneTodoItem";
import { List } from "antd";

const DoneTodoGroup = () => {
  const todoList = useSelector((state) =>
    state.todo.todos.filter((item) => item.done)
  );
  return (
    <>
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
