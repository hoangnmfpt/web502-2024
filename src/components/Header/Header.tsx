import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
const Header = () => {
  return (
    <header className={style.header}>
      <ul className="container">
        <li>
          <NavLink to="/" className={style.navItem}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={style.navItem}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style.navItem}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={style.navItem}>
            Register
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
