import React from 'react';
import classes from "./Contacts.module.css";

const Contacts = () => {
    return (
<main className={classes.contentcontacts}>
            <h2 className={classes.contentcontacts__title}>Как нас найти <span class="emoji">&#128506;</span></h2>
            {/* <iframe className={classes.contentcontacts__iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511624.09471709596!2d29.534283879675947!3d59.93991389777822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1676923081858!5m2!1sru!2sru"
                width="1280" height="370" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe> */}
            <h3 className={classes.contentcontacts__text}>Наши контакты</h3>
            <p className={classes.contentcontacts__address}>Адрес: г. Санкт-Петербург, Дворцовая пл., 2, 190000</p>
            <a className={classes.contentcontacts__tel} href="tel:+7(812)555-55-55">Тел: +7 (812) 555-55-55</a>


        </main>
    )
}
export default Contacts;
