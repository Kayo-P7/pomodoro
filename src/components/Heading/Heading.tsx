// @ts-ignore
import style from './Heading.module.css';
import * as React from "react";

type HeadingProps = {
    children: React.ReactNode;
}
export function Heading({children}: HeadingProps){


    return(
        <>
            <h1 className={style.heading} >{children}</h1>
        </>
    )
}