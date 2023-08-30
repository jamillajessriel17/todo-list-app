import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { List } from "antd";

const TodoGroup = (props) => {
  const todoList = useSelector((state) => state.todo.todos);
  return (
    // <>
    //   {todoList.map((element, index) => {
    //     return (
    //       <TodoItem todoItem={element} key={index} isDone={props.isDone} />
    //     );
    //   })}
    // </>
    <>
      <List
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
