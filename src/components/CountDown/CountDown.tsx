// @ts-ignore
import style from './CountDown.module.css';
import * as React from "react";
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext";

export function CountDown(){

const {state} = useTaskContext()

    return(
            <div className={style.container} >
                <h1>
                    {state.formattedSecondsRemaining}
                </h1>
            </div>
    )
}