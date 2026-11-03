// @ts-ignore
import style from './Footer.module.css';
import * as React from "react";


export function Footer(){


    return(
        <>
            <footer className={style.footer}>
                <a  href="#">Entenda como funciona a tecnica pomodoro</a>
                <a href="#">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️</a>
            </footer>
        </>
    )
}