export default function TodoFilters() {
  return (
    <div className="todo__filters__sides">
      <p className="btn">
        <span id="items-left">5</span> item(s) left
      </p>
      <button className="btn btn--clear" id="clear-completed">
        Clear Completed
      </button>
    </div>
  );
}
