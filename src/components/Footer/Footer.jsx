import React from 'react';
import classes from "./Footer.module.css";

const Footer = () => {
    return (
<footer className={classes.footer}>
<p>2023 &#169; <a className={classes.footer__link} href="#">учебный центр</a></p>
</footer>
    )
}
export default Footer;
