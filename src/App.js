import "./App.css";
import TodoGroup from "./components/TodoGroup";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoGroup itemName={"Test"} />
    </div>
  );
}

export default App;
