export default function TodoFilters({
  onRemovingCompletedTodos,
  NotCompleted,
}) {
  return (
    <div className="todo__filters__sides">
      <p className="btn">
        <span id="items-left">{NotCompleted}</span> item(s) left
      </p>
      <button
        className="btn btn--clear"
        id="clear-completed"
        onClick={onRemovingCompletedTodos}
      >
        Clear Completed
      </button>
    </div>
  );
}
