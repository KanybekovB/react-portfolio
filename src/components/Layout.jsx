import { Outlet, Link} from 'react-router'


const Layout = () => {
  return (
  <div>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/games">Библиотека игр</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 Ваша компания. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default Layout;
