import { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "/vite.svg";
import classes from "./Header.module.scss";
import useClickOutside from "@/hooks/useClickOutside";

const Header = () => {
  const headerRef = useRef(null);
  const linkClass = ({ isActive }) =>
    isActive
      ? `${classes.menu__item} ${classes.menu__item_active}`
      : classes.menu__item;

  useClickOutside(headerRef, () => {
    // console.log("Outside of header clicked!");
  });

  return (
    <header ref={headerRef} className={classes.header}>
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
        <NavLink to="/table-pagination" className={linkClass}>
          Table Pagination
        </NavLink>
        <NavLink to="/form" className={linkClass}>
          Form
        </NavLink>
        <NavLink to="/otp" className={linkClass}>
          OTP
        </NavLink>
        <NavLink to="/todo" className={linkClass}>
          Todo
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
