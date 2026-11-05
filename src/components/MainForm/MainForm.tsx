import {DefaultInput} from "../DefaultInput/DefaultInput";
import {Cycles} from "../Cycles/Cycles";
import {DefaultButton} from "../DefaultButton/DefaultButton";
import {PlayCircleIcon} from "lucide-react";


export function MainForm(){
    return(
        <form className="form" action="">

            <div className="formRow">
                <DefaultInput
                    type="text"
                    id="meuInput"
                    labelText="task"
                    placeholder="qual o nome da tarefa?"

                />
            </div>

            <div className="formRow">
                <Cycles/>
            </div>

            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon/>}/>
            </div>
        </form>
    )
}