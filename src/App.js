import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import NavigationMenuBar from "./components/NavigationMenuBar";

function App() {
  return (
    <div className="App">
      <NavigationMenuBar />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
