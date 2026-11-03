import * as React from "react";
// @ts-ignore
import styles from './Container.module.css'
type ContainerProps = {
    children: React.ReactNode
}

export function Container({children}: ContainerProps){

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                    {children}
            </div>
        </div>
    )
}