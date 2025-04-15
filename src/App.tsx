import ThemeContextProvider from "./providers/ThemeContextProvider";
import TodoContextProvider from "./providers/TodoContextProvider";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <TodoContextProvider>
        <div className="App">
          <h1>Ma Todo List</h1>
          <TodoForm />
          <TodoList />
        </div>
      </TodoContextProvider>
    </ThemeContextProvider>
  );
}

export default App;