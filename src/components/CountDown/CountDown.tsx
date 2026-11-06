// @ts-ignore
import style from './CountDown.module.css';
import * as React from "react";
import {useTaskContext} from "../../contexts/TaskContext";

export function CountDown(){

const taskContext = useTaskContext()

    return(
            <div className={style.container} >
                <h1>
                    00:00
                </h1>
            </div>
    )
}