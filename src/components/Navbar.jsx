import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Логотип</Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/home">Главная</Link>
        </li>
        <li className="navbar-item">
          <Link to="/games">Библиотека игр</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
