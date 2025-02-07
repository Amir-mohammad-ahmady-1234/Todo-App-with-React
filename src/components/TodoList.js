export default function TodoList() {
  return (
    <ul className="todo__list" id="todo-list">
      {/* items added by JavaScript */}
      <li className="todo__elem todo__elem--checked">
        <button className="btn todo__check">
          <img src=".\img\icon-check.svg" alt="no intenet" />
        </button>
        <p>learn react</p>
        <button className="btn todo__delete">
          <img src="./img/icon-cross.svg" alt="no intenet" />
        </button>
      </li>
    </ul>
  );
}
