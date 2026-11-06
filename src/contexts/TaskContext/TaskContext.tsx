import React, {createContext, useState} from "react";
import {initialTaskState} from "./initialTaskState";
import {TaskStateModel} from "../../components/models/TaskStateModel";
//#2
type TaskContextProps = {
    state : TaskStateModel,
    setState :  React.Dispatch<React.SetStateAction<TaskStateModel>>
}


const initialContextValue = {
    state: initialTaskState,
    setState: () => {},
}

export const TaskContext =
    createContext<TaskContextProps>(initialContextValue)
