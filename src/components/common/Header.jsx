import { NavLink } from "react-router-dom";
import logo from "/vite.svg";
import classes from "./Header.module.scss";

const header = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? `${classes.menu__item} ${classes.menu__item_active}`
      : classes.menu__item;

  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <img src={logo} alt="logo" />
        <h2>ReactJs Challenges</h2>
      </div>

      <nav className={`${classes.header__menu} ${classes.menu}`}>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/slider" className={linkClass}>
          Slider
        </NavLink>
      </nav>
    </header>
  );
};

export default header;
