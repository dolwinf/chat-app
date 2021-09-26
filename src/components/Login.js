import React from 'react'
import styled from 'styled-components'
import slackLogo from '../slack.jpg'
import { Button } from '@mui/material'
import { auth, provider } from '../firebaseConfig'

const Login = () => {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(e => console.log("Error logging in", e))
    }

    return (
        <LoginContainer>
            <InnerLoginContainer>
                <img src={slackLogo} alt='Slack Logo' />
                <h1>Sign into D's Dungeon!</h1>

                <Button onClick={signIn}>Sign in with Google</Button>
            </InnerLoginContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;


`;
const InnerLoginContainer = styled.div`

    padding:100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);


> img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
}

> button {
    /* color: white;
    background-color: green; */
    /* text-transform: inherit; */
    margin-top: 50px;
}

`;

