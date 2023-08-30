import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = (props) => {
  return (
    <>
      <h2>TODO LIST</h2>
      <TodoGroup isDone={props.isDone} />
      {!props.isDone ? <TodoGenerator /> : []}
    </>
  );
};
export default TodoList;
