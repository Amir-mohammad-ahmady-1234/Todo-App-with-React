import { useState } from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import Header from "./Header";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";
import TodoRaidoFilters from "./TodoRaidoFilters";

const initialTodos = [
  { id: 1, name: "Learn React", status: false },
  { id: 2, name: "Learn Npm", status: true },
  { id: 3, name: "Learn Tailwind", status: false },
];

export default function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [todos, setTodos] = useState(initialTodos);

  function handleThemeChaning() {
    setTheme((theme) => (theme === "darkTheme" ? "lightTheme" : "darkTheme"));
  }

  function handleAddingTodoToList(newTodo) {
    setTodos((todos) => [...todos, newTodo]);
  }

  function handleStatusChanged(todo) {
    setTodos((todos) =>
      todos.map((hobit) =>
        todo.id === hobit.id ? { ...hobit, status: !hobit.status } : hobit
      )
    );
  }

  return (
    <div className="preload-transitions" data-theme={theme}>
      <div className="main__container">
        <div className="todo">
          <header className="header">
            <Header onThemeChaning={handleThemeChaning} />
            <AddTodo onAddingTodoToList={handleAddingTodoToList} />
          </header>

          <main className="main">
            <TodoList todos={todos} onStatusChanged={handleStatusChanged} />
            <div className="todo__filters">
              <TodoFilters />
              <TodoRaidoFilters />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}
