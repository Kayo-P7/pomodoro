import {Container} from "../../components/Container/Container";
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {CountDown} from "../../components/CountDown/CountDown";
import {MainForm} from "../../components/MainForm/MainForm";
import {Footer} from "../../components/Footer/Footer";
import * as React from "react";
import {MainTemplates} from "../../templates/MainTemplates";
import {NotFound} from "../../components/NotFound/NotFound";
import {Heading} from "lucide-react";
import style from "./style.module.css"
type GenericHtmlProps = {
    children : React.ReactNode
}
export function GenericHtml({children} : GenericHtmlProps) {


    return (
      <div className={style.genericHtml}>
          {children}
      </div>
    )
}