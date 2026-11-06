import {Home} from "./pages/Home";
import {TaskContextProvider} from "./contexts/TaskContext/TaskContextProvider";

// @ts-ignore
import './style/global.module.css'
// @ts-ignore
import './style/theme.css'

export function App() {


    return (
        <TaskContextProvider>
            <Home/>
        </TaskContextProvider>
    )
}


