import { useNavigate } from "react-router-dom";
import { useTodo } from "../hooks/useTodos";

const DoneTodoItem = (props) => {
  const { deleteTodo } = useTodo();
  const id = props.doneItem.id;

  const navigate = useNavigate();
  const onDeleteTodo = async () => {
    const confirmDeletion = window.confirm("Are you sure you want to delete?");
    if (confirmDeletion === true) {
      deleteTodo(id);
    }
  };
  const onClickDoneTodo = async () => {
    navigate("/done/" + id);
  };
  const doneTaskStyle = {
    textDecoration: "line-through",
    color: "gray",
    backgroundColor: "#f0f1f2",
  };
  return (
    <>
      <div className="todoItem" style={doneTaskStyle}>
        <div className="textArea">
          <p onClick={onClickDoneTodo}>{props.doneItem.text}</p>
        </div>
        <div className="buttonArea">
          <button className="deleteButton" onClick={onDeleteTodo}>
            x
          </button>
        </div>
      </div>
    </>
  );
};
export default DoneTodoItem;
