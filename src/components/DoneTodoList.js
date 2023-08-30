import { useEffect } from "react";
import DoneTodoGroup from "./DoneTodoGroup";
import { useTodo } from "../hooks/useTodos";

const DoneTodoList = () => {
  const { loadTodos } = useTodo();
  useEffect(() => {
    loadTodos();
  });
  return (
    <>
      <div>
        <DoneTodoGroup />
      </div>
    </>
  );
};
export default DoneTodoList;
