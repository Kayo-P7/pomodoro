import {Container} from "../../components/Container/Container";
import {Logo} from "../../components/Logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {CountDown} from "../../components/CountDown/CountDown";
import {MainForm} from "../../components/MainForm/MainForm";
import {Footer} from "../../components/Footer/Footer";
import * as React from "react";

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplates({children}: MainTemplateProps) {


    return (
        <>
            <Container>
                <Logo/>
            </Container>
            <Container>
                <Menu/>
            </Container>

            {children}

            <Container>
                <Footer/>
            </Container>
        </>
    )
}