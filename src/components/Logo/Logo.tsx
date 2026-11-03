// @ts-ignore
import style from './Logo.module.css';
import * as React from "react";
import {TimerIcon} from "lucide-react";


export function Logo(){


    return(
        <>
            <div className={style.logo} ><a href="#"  className={style.logoLink}><TimerIcon size={42}/><span className={style.logoSpan}>Chronos</span></a></div>
        </>
    )
}