import React from 'react';
import classes from './Entrance.module.css';

const Entrance =()=> {
    return (
<div className={classes.entrance}>
<h3 className={classes.entrance__title}>Войти на сайт</h3>
<form action="#" className={classes.entrance__form}>
  <input type="text" name="username" id="username" className={classes.entrance__text} placeholder="Логин" required />
  <input type="password" name="password" id="password" className={classes.entrance__password} placeholder="Пароль" required />
  <button type="submit" className={classes.entrance__button}>Войти</button>
</form>
</div>
    )
}
export default Entrance;

