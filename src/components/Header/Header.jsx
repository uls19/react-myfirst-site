import React from 'react';
import classes from "./Header.module.css";
import logo from "./logo_header.svg";
import { NavLink } from 'react-router-dom';
const setActive = ({ isActive }) => isActive ? `${classes.header__menulink_active} ${classes.header__menulink}` : classes.header__menulink;


const Header = () => {
  return (
    <header className={classes.header}>
        <a className={classes.header__logo} href="index.html" target="_blank">
        <img className={classes.header__image} src={logo} width="47" height="47" alt="logotype" /></a>
      <nav className={classes.header__nav}>
        <ul className={classes.header__menu}>
          <li className={classes.header__menulist}>
            <NavLink className={setActive} to='/Main'>Главная</NavLink></li>
          <li className={classes.header__menulist}>
            <NavLink className={setActive} to='/Students'>Студенты</NavLink></li>
          <li className={classes.header__menulist}>
            <NavLink className={setActive} to='/About'>О курсе</NavLink></li>
          <li className={classes.header__menulist}>
            <NavLink className={setActive} to='/Contacts'>Контакты</NavLink></li>
        </ul>
      </nav>
      <a className={classes.header__button} href="#">Войти</a>
    </header>

  );
}
export default Header;