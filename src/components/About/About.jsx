import React from 'react';
import classes from "./About.module.css";
import video from './video1.jpg';

const About = () => {
    return (
        <main className={classes.contentabout}>
            <h2 className={ `${classes.content__title}  ${classes.contentabout__title}`}>О курсе <span className={classes.contentabout__emoji}>&#128241;</span></h2>
            <p className={classes.contentabout__subtitle}>Посмотрите видео о нас</p>
            <img className={classes.contentabout__video} src={video} alt="video" />
        </main>
    )
}
export default About;