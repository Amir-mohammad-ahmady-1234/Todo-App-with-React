export default function Header({ onThemeChaning }) {
  return (
    <section className="logo">
      <h2 className="logo__title">TODO</h2>
      <button className="btn btn--theme" onClick={onThemeChaning}>
        <img
          className="todo__elem--hide"
          src="./img/icon-moon.svg"
          alt="moon icon to apply dark mode"
        />
        <img src="./img/icon-sun.svg" alt="sun icon to apply light mode" />
      </button>
    </section>
  );
}
