import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to='/' className={style.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' className={style.navLink}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/register' className={style.navLink}>
            Register
          </NavLink>
        </li>

        <li>
          <NavLink to='/admin' className={style.navLink}>
            Admin Page
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
