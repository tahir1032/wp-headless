import { Link } from "react-router-dom";
import '../styles/header.scss';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg px-4">
      <Link className="navbar-brand" to="/">My Headless WP</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
