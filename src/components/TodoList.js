import { useEffect } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useDispatch } from "react-redux";
import * as todoApi from "../apis/todoApi";
import { loadTodo } from "../slice/todoSlice";

const TodoList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await todoApi.getTodoTask();
      dispatch(loadTodo(response.data));
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>TODO LIST</h2>
      <TodoGroup isDone={props.isDone} />
      {!props.isDone ? <TodoGenerator /> : []}
    </>
  );
};
export default TodoList;
