import Todo from "./Todo";

export default function TodoList({ todos, onStatusChanged }) {
  return (
    <ul className="todo__list" id="todo-list">
      {/* items added by JavaScript */}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          onStatusChanged={onStatusChanged}
          key={todo.id}
        />
      ))}
    </ul>
  );
}
