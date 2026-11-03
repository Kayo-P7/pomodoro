import * as React from "react";
import style from "./style.module.css"

type DefaultInputType = {
    id: string
    labelText: string
} & React.ComponentProps<"input">


export function DefaultInput({labelText, id, type, ...rest}: DefaultInputType) {
    return (
        <div className={style.inputContainer}>
            {labelText && <label htmlFor={id}>{labelText}</label>}

            <input className={style.input} type={type} id={id} {...rest}/>
        </div>
    )
}