import { useState } from "react";

export default function AddTodo({ onAddingTodoToList }) {
  const [addTodoInput, setAddTodoInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!addTodoInput) return;

    const newTodo = {
      id: crypto.randomUUID(),
      name: addTodoInput,
      status: false,
    };

    onAddingTodoToList(newTodo);

    setAddTodoInput("");
  }

  return (
    <div className="todo__header">
      <div className="todo__circle"></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Create a new todo</label>
        <input
          type="text"
          className="todo__input"
          name="todo-input"
          id="todo-input"
          placeholder="Create a new todo..."
          value={addTodoInput}
          onChange={(e) => setAddTodoInput(e.target.value)}
        />
      </form>
    </div>
  );
}
