import React from "react";
import {NavLink} from "react-router-dom";

export const About = () => {
    return (
        <div className="jumbotron">
            <h1
                className="display-4"
            >
                Приветствую в своем мини-приложении!
            </h1>
            <p
                className="lead"
            >
                Я создал классическое "To-do" приложения используя React JS, библиотеку Bootstrap и
                Firebase
            </p>
            <p
                className="lead"
            >
               <strong>Версия 1.0.2</strong>
            </p>
            <p>
                Другие мои проекты вы можете посмотреть на личной странице
            </p>
            <NavLink
                className="btn btn-primary btn-lg"
                to="http://kunilovskiyva.ru/"
            >
                Посмотреть проекты
            </NavLink>
        </div>
    )
}