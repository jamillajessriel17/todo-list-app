import { useSelector } from "react-redux";
import DoneTodoItem from "./DoneTodoItem";

const DoneTodoGroup = () => {
  const todoList = useSelector((state) => state.todo.todos);
  console.log(todoList);
  return (
    <>
      <h2>Done Todo List</h2>
      {todoList
        .filter((item) => item.done === true)
        .map((doneItem) => {
          return <DoneTodoItem doneItem={doneItem} key={doneItem.id} />;
        })}
    </>
  );
};
export default DoneTodoGroup;
