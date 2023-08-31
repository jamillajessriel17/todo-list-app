import { useEffect } from "react";
import DoneTodoGroup from "./DoneTodoGroup";
import { useTodo } from "../hooks/useTodos";

const DoneTodoList = () => {
  const { loadTodos } = useTodo();
  loadTodos();
  useEffect(() => {});
  return (
    <>
      <div>
        <h2>DONE LIST</h2>
        <DoneTodoGroup />
      </div>
    </>
  );
};
export default DoneTodoList;
