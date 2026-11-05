import {Container} from "../../components/Container/Container";
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {CountDown} from "../../components/CountDown/CountDown";
import {MainForm} from "../../components/MainForm/MainForm";
import {Footer} from "../../components/Footer/Footer";
import * as React from "react";
import {MainTemplates} from "../../templates/MainTemplates";


export function Home() {


    return (
        <MainTemplates>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <MainForm/>
            </Container>
        </MainTemplates>
    )
}