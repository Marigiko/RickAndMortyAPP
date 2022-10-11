import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

    const { loginWithRedirect } = useAuth0();

    return(
    <>
        <section>
            <img/>
            <Button onClick={() => loginWithRedirect()}>
                Login
            </Button>
        </section>
    </>);
}

export default Login;