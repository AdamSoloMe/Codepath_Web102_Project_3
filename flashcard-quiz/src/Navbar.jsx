export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="navbar-title">Trivia<span> Quiz</span></h1>
      <ul>
        <li>
          <a href="/">All Cards</a>
        </li>
        <li>
          <a href="/card-test">Study Mode</a>
        </li>
      </ul>
    </nav>
  );
}