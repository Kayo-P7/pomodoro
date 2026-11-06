import {Container} from "../../components/Container/Container";
import {CountDown} from "../../components/CountDown/CountDown";
import {MainForm} from "../../components/MainForm/MainForm";
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