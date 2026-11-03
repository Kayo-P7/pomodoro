// @ts-ignore
import style from './Menu.module.css';
import * as React from "react";
import {HistoryIcon, HomeIcon, SettingsIcon, SunIcon} from "lucide-react";
import {useState} from "react";
import global from "../../style/global.module.css"

type AvailableThemes = 'dark' | 'light';

export function Menu() {

    const [darkMode, setDarkMode] = useState<AvailableThemes>('dark')

    function handleThemeChange(event : React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault()
        // setDarkMode(preventMode => {
        //     const NextPreventMode = preventMode === 'dark' ? 'light' : 'dark'
        //     return NextPreventMode
        // })


        document.documentElement.setAttribute('data-theme', darkMode)
        return setDarkMode(darkMode === 'dark' ? 'light' : 'dark')
    }
    return (
        <div className={darkMode ? global.light : global.dark}>
            <nav className={style.menu}>
                <a href="#" className={style.menuLink}
                   aria-label="Ir para a Home"
                   title="Ir para a Home">
                    <HomeIcon/>
                </a>

                <a href="#" className={style.menuLink}
                   aria-label="Ir para o Historico "
                   title="Ir para o Historico">
                    <HistoryIcon/>
                </a>

                <a href="#" className={style.menuLink}
                   aria-label="Ir para as Configuracoes"
                   title="Ir para as Configuracoes">
                    <SettingsIcon/>
                </a>

                <a href="#" className={style.menuLink}
                   aria-label="trocar de tema"
                   title="trocar de tema"
                onClick={handleThemeChange }
                >
                    <SunIcon/>
                </a>
            </nav>
        </div>
    )
}