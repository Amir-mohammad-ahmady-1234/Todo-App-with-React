import AddTodo from "./AddTodo";
import Footer from "./Footer";
import Header from "./Header";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";
import TodoRaidoFilters from "./TodoRaidoFilters";

export default function App() {
  return (
    <div className="main__container">
      <div className="todo">
        <header className="header">
          <Header />
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
  );
}
