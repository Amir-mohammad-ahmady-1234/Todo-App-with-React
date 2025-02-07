export default function TodoRaidoFilters() {
  return (
    <div className="todo__filters__center">
      <input
        type="radio"
        name="filter"
        id="all"
        value="all"
        className="btn btn--bold"
        defaultChecked
      />
      <label className="btn btn--bold" htmlFor="all">
        All
      </label>

      <input
        type="radio"
        name="filter"
        id="active"
        value="active"
        className="btn btn--bold"
      />
      <label className="btn btn--bold" htmlFor="active">
        Active
      </label>

      <input
        type="radio"
        name="filter"
        id="completed"
        value="completed"
        className="btn btn--bold"
      />
      <label className="btn btn--bold" htmlFor="completed">
        Completed
      </label>
    </div>
  );
}
