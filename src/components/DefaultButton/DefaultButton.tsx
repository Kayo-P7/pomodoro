import * as React from "react";
import style from "./style.module.css"

type DefaultButtonType = {
    icon : React.ReactNode
    color?: "green" | "red"
} & React.ComponentProps<"button">


export function DefaultButton({ icon, color = "green", ...props}: DefaultButtonType) {
    return (
        <>
            <button className={`${style.button} ${style[color]}`} {...props}>{icon}</button>
        </>
    )
}