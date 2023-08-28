import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
  const [todoItems, setTodoItems] = useState([]);
  const addItem = () => {
    setTodoItems((todoItems) => [...todoItems, props.itemName]);
  };
  return (
    <>
      <div>TODO LIST</div>
      {todoItems.map((element, index) => {
        return <TodoItem itemName={element} key={index} />;
      })}
      <button onClick={addItem}>add</button>
    </>
  );
};
export default TodoGroup;
