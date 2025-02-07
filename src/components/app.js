import { useState } from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import Header from "./Header";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";
import TodoRaidoFilters from "./TodoRaidoFilters";

export default function App() {
  const [theme, setTheme] = useState("darkTheme");

  function handleThemeChaning() {
    setTheme(theme => theme === 'darkTheme' ? 'lightTheme' : 'darkTheme')
  }

  return (
    <div className="preload-transitions" data-theme={theme}>
      <div className="main__container">
        <div className="todo">
          <header className="header">
            <Header onThemeChaning={handleThemeChaning} />
            <AddTodo />
          </header>

          <main className="main">
            <TodoList />
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
