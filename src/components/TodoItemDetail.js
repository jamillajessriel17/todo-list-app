import { Card } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/todoDetail.css";

const TodoItemDetail = () => {
  const { id } = useParams();
  const todoTask = useSelector((state) =>
    state.todo.todos.find((task) => task.id === id)
  );
  return (
    // <div className="todo-detail">
    //   <h2>TODO ITEM DETAILS</h2>
    //   <div>Id: {todoTask?.id}</div>
    //   <div>Name: {todoTask?.text}</div>
    // </div>
    <>
      <h2>TODO DETAILS</h2>
      <Card
        title={`ID: ${todoTask?.id}`}
        bordered={false}
        className="todoDetail"
      >
        NAME: {todoTask?.text}
      </Card>
    </>
  );
};
export default TodoItemDetail;
