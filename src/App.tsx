import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./app/store";
import { fetchList } from "./features/todos/listSlice";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="App">
      <h1>Ma Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;