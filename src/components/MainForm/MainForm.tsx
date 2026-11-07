import {DefaultInput} from "../DefaultInput/DefaultInput";
import {Cycles} from "../Cycles/Cycles";
import {DefaultButton} from "../DefaultButton/DefaultButton";
import {PlayCircleIcon} from "lucide-react";
import {useRef} from "react";
import {TaskModel} from "../models/TaskModel";
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
    // const [taskName, setTaskName] = useState('') utilizado em tempo real
    const taskNameInput = useRef<HTMLInputElement>(null)
    const {setState} = useTaskContext();
    function handleCreateTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()


        const task = taskNameInput.current.value.trim();

        if(task == null) return;

        if(!task)return;

        console.log(task)

        const newTask: TaskModel = {
            id : Date.now().toString(),
            name : task,
            completeDate : null,
            interruptDate : null,
            duration : 1,
            startDate : Date.now(),
            type: "workTime"
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return{
                ...prevState,
                activeTask: newTask,
                currentCycle : 1,
                secondsRemaining : secondsRemaining,
                formattedSecondsRemaining : '00:00',
                tasks : [...prevState.tasks, newTask]
            }
        })
    }

    return (
        <form onSubmit={handleCreateTask} className="form" action="">

            <div className="formRow">
                <DefaultInput
                    type="text"
                    id="meuInput"
                    labelText="task"
                    placeholder="qual o nome da tarefa?"
                    // value={taskName}
                    // onChange={e => setTaskName(e.target.value) }
                    ref={taskNameInput}
                />
            </div>

            <div className='formRow'>
                <p>Proximo intervalo e de 25min</p>
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