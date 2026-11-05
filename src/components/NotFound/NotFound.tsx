import * as React from "react";


type NotFoundProps = {
    children : React.ReactNode
}
export function NotFound({children} : NotFoundProps){

    return(
        <div>
            {children}
        </div>
    )
}