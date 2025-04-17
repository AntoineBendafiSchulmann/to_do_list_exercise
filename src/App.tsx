import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="App">
      <h1 className="text-red-50">Ma Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
