export default function Todo({ todo, onStatusChanged }) {
  return (
    <li
      className={
        todo.status ? "todo__elem todo__elem--checked" : "todo__elem todo"
      }
    >
      <button className="btn todo__check" onClick={() => onStatusChanged(todo)}>
        <img src=".\img\icon-check.svg" alt="no intenet" />
      </button>
      <p>{todo.name}</p>
      <button className="btn todo__delete">
        <img src="./img/icon-cross.svg" alt="no intenet" />
      </button>
    </li>
  );
}
