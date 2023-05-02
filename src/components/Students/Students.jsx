import React from 'react';
import classes from "./Students.module.css";
import student from './Student.jpg';

const Students = () => {
    return (
        <main className={classes.contentstudents}>
            <h2 className={`${classes.content__title} ${classes.contentstudents__title}`}>Студенты потока 08.02..2020 <span className={classes.contentstudents__emoji}>&#128103;&#129489;</span></h2>
            <div className={classes.contentstudents__students}>
                <div className={classes.contentstudents__student}>
                    <img width="200" height="270" src={student} alt="student_1" />
                    <p className={classes.contentstudents__name}>Василий Иванов</p>
                </div>
                <div className={`${classes.contentstudents__student} ${classes.new}`}>
                    <img width="200" height="270" src={student} alt="student_2" />
                    <p className={classes.contentstudents__name}>Мария Александрова</p>
                </div>
                <div className={classes.contentstudents__student}>
                    <img width="200" height="270" src={student} alt="student_3" />
                    <p className={classes.contentstudents__name}>Мария Александрова</p>
                </div>
                <div className={classes.contentstudents__student}>
                    <img width="200" height="270" src={student} alt="student_4" />
                    <p className={classes.contentstudents__name}>Василий Иванов</p>
                </div>
                <div className={classes.contentstudents__student}>
                    <img width="200" height="270" src={student} alt="student_5" />
                    <p className={classes.contentstudents__name}>Василий Иванов</p>
                </div>
            </div >

        </main >


    )
}

export default Students;