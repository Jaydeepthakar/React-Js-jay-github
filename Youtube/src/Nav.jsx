import './App.css'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <ul className="Nav-ul">
        <li>
          <Link to="/" className="nav-link">All</Link>
        </li>
        <li>
          <Link to="/music" className="nav-link">Music</Link>
        </li>
        <li>
          <Link to="/gaming" className="nav-link">Gaming</Link>
        </li>
        <li>
          <Link to="/lofi" className="nav-link">Lo-fi</Link>
        </li>
        <li>
          <Link to="/live" className="nav-link">Live</Link>
        </li>
        <li>
          <Link to="/t-series" className="nav-link">T-series</Link>
        </li>
        <li>
          <Link to="/comedy" className="nav-link">Comedy</Link>
        </li>
        <li>
          <Link to="/new-to-you" className="nav-link">New to you</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
