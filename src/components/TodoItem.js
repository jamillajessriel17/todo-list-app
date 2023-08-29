const TodoItem = ({ todoItem }) => {
  return (
    <>
      <div className="todoItem">
        {todoItem.text}
        <button className="deleteButton">x</button>
      </div>
    </>
  );
};
export default TodoItem;
