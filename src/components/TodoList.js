import Todo from "./Todo"; 

export default function TodoList({ todos, onStatusChanged, onTodoRemoving }) {
  return (
    <ul className="todo__list" id="todo-list">
      {/* items added by JavaScript */}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          onStatusChanged={onStatusChanged}
          onTodoRemoving={onTodoRemoving}
          key={todo.id}
        />
      ))}
    </ul>
  );
}
