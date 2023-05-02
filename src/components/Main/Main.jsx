import React from 'react';
import classes from "./Main.module.css";
import contentphoto from './contentphoto.jpg';


const Main = () => {
  return (

    <main className={classes.content}>
     <h1 className={classes.content__title}>Добро пожаловать на курс “Создание веб-сайтов (HTML, CSS)”!</h1>
      <img className={classes.content__image} src={contentphoto} alt="главное фото" />
      <div className={classes.content__info}>
        <div className={classes.content__section}>
          <article className={classes.content__article}>
            <h3 className={classes.content__subtitle}>Для кого этот курс</h3>
            <p className={classes.content__text}>Этот курс рассчитан на новичков, которые только начинают знакомство с
              веб-разработкой. В начале курса вы узнаете о том, как устроен Интернет и веб-сайты.
              Для обучения необходимо только владеть компьютерной грамотностью (пользоваться браузером,
              создавать
              папки и файлы, устанавливать программы).</p>
          </article>
          <article className={classes.content__article}>
            <h3 className={classes.content__subtitle}>Чему вы научитесь</h3>
            <p className={classes.content__text}>На этом курсе вы узнаете, как устроены веб-сайты и как создавать их с
              нуля.
              Изучите основы языков<span className={`${classes.content__text} ${classes.content__text_bold}`}> HTML, CSS </span>и
              немного<span className={`${classes.content__text} ${classes.content__text_bold}`}> JavaScript.</span> Мы вместе сверстаем сайт нашей группы по этому макету. А затем
              вы<span className={`${classes.content__text} ${classes.content__text_color}`}> сами</span> сверстаете свои личные
              странички в качестве
              домашнего
              задания и
              мы выложим все это на сервер.</p>
          </article>
        </div>
        <h2 className={classes.content__heading}>
          <span className={classes.content__quotation}>“</span> Учимся
          вместе! <span className={classes.content__quotation}>”</span>
        </h2>
      </div>
    </main>

  );
}
export default Main;