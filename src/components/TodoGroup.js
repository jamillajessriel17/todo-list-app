import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { List } from "antd";
import "../css/todoGroup.css";

const TodoGroup = (props) => {
  const todoList = useSelector((state) => state.todo.todos);
  return (
    <>
      <List
        className="group"
        size="small"
        itemLayout="horizontal"
        bordered
        dataSource={todoList}
        renderItem={(todoItem) => <TodoItem todoItem={todoItem} />}
      />
    </>
  );
};
export default TodoGroup;
