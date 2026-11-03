import {Container} from "./components/Container/Container";
import {Logo} from "./components/Logo/Logo";
// @ts-ignore
import './style/global.module.css'
// @ts-ignore
import './style/theme.css'
import {Menu} from "./components/Menu/Menu";
import {CountDown} from "./components/CountDown/CountDown";
import {DefaultInput} from "./components/DefaultInput/DefaultInput";
import {Cycles} from "./components/Cycles/Cycles";
import {DefaultButton} from "./components/DefaultButton/DefaultButton";
import {PlayCircleIcon} from "lucide-react";
import {Footer} from "./components/Footer/Footer";

export function App() {


    return (
        <>
            <Container><Logo/></Container>
            <Container><Menu/></Container>
            <Container><CountDown/></Container>
            <Container>
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
            </Container>
            <Container><Footer/></Container>
        </>
    )
}


