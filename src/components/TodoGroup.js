import { List } from "antd";
import { useSelector } from "react-redux";
import "../css/todoGroup.css";
import TodoItem from "./TodoItem";

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
