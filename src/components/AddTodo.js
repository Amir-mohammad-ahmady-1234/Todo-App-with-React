export default function AddTodo() {
  return (
    <div className="todo__header">
      <div className="todo__circle"></div>
      <label htmlFor="todo-input">Create a new todo</label>
      <input
        type="text"
        className="todo__input"
        name="todo-input"
        id="todo-input"
        placeholder="Create a new todo..."
      />
    </div>
  );
}
