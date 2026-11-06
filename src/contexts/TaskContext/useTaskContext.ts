import {useContext} from "react";
import {TaskContext} from "./TaskContext";

//#4
export function useTaskContext(){
    return useContext(TaskContext)
}