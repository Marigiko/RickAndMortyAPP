import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const Login = () => {

    const Section = styled.section`
        display: flex;
        flex-direction: column;
        aling-content: center;
        justify-content: center;
    `

    const Img = styled.img`
        width: 30rem;
        heigth: 30rem;
        border-radius: 15%;
    `

    const Button = styled.button`
        width: 10rem;
    `

    const { loginWithRedirect } = useAuth0();

    return(
    <>
        <Section>
            <Img src="https://www.xtrafondos.com/wallpapers/rick-y-morty-3245.jpg"/>
            <Button onClick={() => loginWithRedirect()}>
                Login
            </Button>
        </Section>
    </>);
}

export default Login;