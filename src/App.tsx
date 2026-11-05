import {Container} from "./components/Container/Container";
import {Logo} from "./components/Logo/Logo";
// @ts-ignore
import './style/global.module.css'
// @ts-ignore
import './style/theme.css'
import {Menu} from "./components/Menu/Menu";
import {CountDown} from "./components/CountDown/CountDown";
import {Footer} from "./components/Footer/Footer";
import {MainForm} from "./components/MainForm/MainForm";
import {Home} from "./pages/Home";
import {AboutPomodoro }from "./pages/AboutPomodoro";
import {NotFound} from "./pages/NotFound";

export function App() {


    return (
        <AboutPomodoro/>
    )
}


