import React, { useState } from 'react';
import classes from "./Header.module.css";
import logo from "./logo_header.svg";
import { NavLink } from 'react-router-dom';
const setActive = ({ isActive }) => isActive ? `${classes.header__menulink_active} ${classes.header__menulink}` : classes.header__menulink;


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={classes.header}>
      <a className={classes.header__logo} href="index.html" target='blank'>
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
      <a onClick={() => setIsOpen(true)} className={classes.header__button} href="#">Войти</a>
      {isOpen && (
        <div className={classes.entrance} >
          <button className={classes.entrance__buttonexit} onClick={() => setIsOpen(false)}>X</button>
          <h3 className={classes.entrance__title}>Войти на сайт</h3>
          <form action="#" className={classes.entrance__form}>
            <input type="text" name="username" id="username" className={classes.entrance__text} placeholder="Логин" required />
            <input type="password" name="password" id="password" className={classes.entrance__password} placeholder="Пароль" required />
            <button type="submit" className={classes.entrance__button} >Войти</button>
          </form>
        </div>
      )}
    </header>
  );

}


export default Header;