import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
  return (
    <>
      <h2>TODO LIST</h2>
      {props.todoList.map((element, index) => {
        return <TodoItem itemName={element} key={index} />;
      })}
    </>
  );
};
export default TodoGroup;
