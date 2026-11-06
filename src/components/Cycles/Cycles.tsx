import style from "./styles.module.css"

export function Cycles() {
    return (
        <div className={style.cycles}>

            <span>Ciclos:</span>
            <div className={style.cyclesDots}>
                <span className={`${style.clycleDot} ${style.workTime}`}></span>
                <span className={`${style.clycleDot} ${style.shortBreakTime}`}></span>
                <span className={`${style.clycleDot} ${style.workTime}`}></span>
                <span className={`${style.clycleDot} ${style.shortBreakTime}`}></span>
                <span className={`${style.clycleDot} ${style.workTime}`}></span>
                <span className={`${style.clycleDot} ${style.shortBreakTime}`}></span>
                <span className={`${style.clycleDot} ${style.workTime}`}></span>
                <span className={`${style.clycleDot} ${style.longBreakTime}`}></span>

            </div>
        </div>
    )
}