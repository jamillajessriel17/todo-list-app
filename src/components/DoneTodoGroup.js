import { List } from "antd";
import { useSelector } from "react-redux";
import DoneTodoItem from "./DoneTodoItem";

const DoneTodoGroup = () => {
  const todoList = useSelector((state) => state.todo);
  const todoListFiltered = todoList.todos.filter((item) => item.done);

  return (
    <>
      <List
        className="group"
        size="small"
        itemLayout="horizontal"
        bordered
        dataSource={todoListFiltered}
        renderItem={(todoItem) => <DoneTodoItem doneItem={todoItem} />}
      />
    </>
  );
};
export default DoneTodoGroup;
